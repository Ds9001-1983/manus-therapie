/*
 * Serverless-Kontaktendpunkt — POST /api/contact
 * -----------------------------------------------------------------------------
 * Nimmt das Anfrageformular (KontaktSection) entgegen und versendet die Anfrage
 * per SMTP DIREKT über das Postfach der Akademie. Kein Dritt-Dienstleister sieht
 * die Daten (DSGVO-konform). Läuft als Vercel Serverless Function in der EU-Region
 * Frankfurt (siehe vercel.json → "regions": ["fra1"]).
 *
 * Benötigte Environment-Variablen — bei Vercel unter
 *   Project → Settings → Environment Variables
 * hinterlegen (NIEMALS im Code / Repo):
 *   SMTP_HOST            z. B. "smtp.ionos.de"
 *   SMTP_PORT            "465" (SSL) oder "587" (STARTTLS)
 *   SMTP_SECURE          "true" bei Port 465, sonst "false"
 *   SMTP_USER            Postfach-Benutzer, z. B. "info@manus-therapie.de"
 *   SMTP_PASS            Postfach-Passwort
 *   KONTAKT_EMPFAENGER   Zieladresse, z. B. "info@manus-therapie.de"
 *   SMTP_FROM            (optional) Absenderadresse; Default = SMTP_USER.
 *                        Muss eine Adresse der eigenen Domain sein (SPF/DKIM).
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const MAX = { name: 100, email: 254, telefon: 50, seminar: 120, nachricht: 5000 };

/** Entfernt CR/LF — verhindert Header-Injection, wenn Werte in Mail-Header fließen. */
const oneLine = (v: unknown, max: number) =>
  String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

/** HTML-Escape für den Mail-Body. */
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

function safeParse(s: string): Record<string, unknown> {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

/*
 * Einfaches In-Memory-Rate-Limit pro IP. Hält im Modul-Scope und überlebt warme
 * Lambda-Instanzen — eine erste Hürde gegen Mail-Bombing / Schleifen-Aufrufe.
 * Grenzen bewusst: bei Cold-Starts / mehreren parallelen Instanzen wird je Instanz
 * separat gezählt. Reicht für ein Kontaktformular dieser Größe; wenn doch Spam
 * auftritt, ist der saubere Schritt Cloudflare Turnstile + Upstash/@vercel/kv.
 */
const RATE = { windowMs: 10 * 60_000, max: 5 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  if (recent.length >= RATE.max) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // Notbremse gegen unbegrenztes Wachstum
  return false;
}

function clientIp(req: VercelRequest): string {
  const xff = req.headers["x-forwarded-for"];
  const raw = Array.isArray(xff) ? xff[0] : xff || (req.headers["x-real-ip"] as string) || "";
  return raw.split(",")[0].trim() || "unknown";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  if (rateLimited(clientIp(req))) {
    return res
      .status(429)
      .json({ error: "Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut." });
  }

  const body =
    (typeof req.body === "string" ? safeParse(req.body) : (req.body as Record<string, unknown>)) ?? {};

  // Honeypot: dieses Feld ist für Menschen unsichtbar. Jeder nichtleere Wert (auch
  // reiner Whitespace) = Bot → stillschweigend mit OK quittieren, aber NICHTS senden.
  if (String(body.website2 ?? "").length > 0) {
    return res.status(200).json({ ok: true });
  }

  const name = oneLine(body.name, MAX.name);
  const email = oneLine(body.email, MAX.email);
  const telefon = oneLine(body.telefon, MAX.telefon);
  const seminar = oneLine(body.seminar, MAX.seminar);
  const nachricht = String(body.nachricht ?? "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, MAX.nachricht);
  const consent = body.consent === true || body.consent === "true";

  if (!name || !isEmail(email)) {
    return res
      .status(400)
      .json({ error: "Bitte Name und eine gültige E-Mail-Adresse angeben." });
  }
  if (!consent) {
    return res.status(400).json({ error: "Bitte stimmen Sie der Datenschutzerklärung zu." });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    KONTAKT_EMPFAENGER,
    SMTP_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !KONTAKT_EMPFAENGER) {
    console.error("[contact] SMTP-Konfiguration unvollständig — Environment-Variablen fehlen.");
    return res
      .status(500)
      .json({ error: "Versand momentan nicht möglich. Bitte später erneut versuchen." });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // Sauber scheitern, bevor das Vercel-Function-Timeout greift (vercel.json: 30 s).
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const seminarLabel = seminar || "—";

  const text =
    `Neue Anfrage über das Kontaktformular\n\n` +
    `Name:    ${name}\n` +
    `E-Mail:  ${email}\n` +
    `Telefon: ${telefon || "—"}\n` +
    `Seminar: ${seminarLabel}\n\n` +
    `Nachricht:\n${nachricht || "—"}\n`;

  const html =
    `<h2>Neue Anfrage über das Kontaktformular</h2>` +
    `<p><strong>Name:</strong> ${esc(name)}<br>` +
    `<strong>E-Mail:</strong> ${esc(email)}<br>` +
    `<strong>Telefon:</strong> ${esc(telefon) || "—"}<br>` +
    `<strong>Seminar:</strong> ${esc(seminarLabel)}</p>` +
    `<p><strong>Nachricht:</strong><br>${esc(nachricht).replace(/\n/g, "<br>") || "—"}</p>`;

  try {
    await transporter.sendMail({
      // Adressen als Objekt → nodemailer kodiert Anzeigenamen sicher (auch bei
      // Sonderzeichen), kein manuelles Quoting nötig.
      from: { name: "Manus-Therapie Website", address: SMTP_FROM || SMTP_USER },
      to: KONTAKT_EMPFAENGER,
      replyTo: { name, address: email },
      subject: `Neue Anfrage von ${name}${seminar ? ` – ${seminarLabel}` : ""}`,
      text,
      html,
    });
  } catch (err) {
    // Nur technische Metadaten loggen — KEINE personenbezogenen Daten (E-Mail des
    // Anfragenden landet sonst in den Vercel-Logs).
    const code = (err as { code?: string })?.code;
    console.error(
      "[contact] Mailversand fehlgeschlagen:",
      err instanceof Error ? err.message : "unbekannt",
      code ? `(${code})` : ""
    );
    return res.status(502).json({
      error: "Versand fehlgeschlagen. Bitte später erneut versuchen oder direkt per E-Mail.",
    });
  }

  return res.status(200).json({ ok: true });
}
