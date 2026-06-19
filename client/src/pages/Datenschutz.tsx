/*
 * DESIGN: "Organische Expertise" – Datenschutzerklärung
 * Gemäß DSGVO / GDPR
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { legal } from "@/content";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#FAF6EE]">
      {/* Header */}
      <div className="bg-[#0D0D0D] py-16">
        <div className="container">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-[#E8D08A] text-sm mb-6 hover:text-white transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>
              <ArrowLeft size={16} />
              Zurück zur Startseite
            </span>
          </Link>
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl">
        <div style={{ fontFamily: "'Lato', sans-serif", color: "#1A1A1A" }}>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 style={{ fontFamily: "'Lato', sans-serif", color: "#0D0D0D", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Allgemeine Hinweise</h3>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              2. Verantwortliche Stelle
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              <strong>{legal.betreiber}</strong><br />
              {legal.verantwortlich.name}<br />
              {legal.verantwortlich.strasse}<br />
              {legal.verantwortlich.plzOrt}<br />
              {legal.land}<br /><br />
              Telefon: {legal.verantwortlich.telefon}<br />
              E-Mail: {legal.email}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 style={{ fontFamily: "'Lato', sans-serif", color: "#0D0D0D", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Kontaktformular</h3>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>

            <h3 style={{ fontFamily: "'Lato', sans-serif", color: "#0D0D0D", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", marginTop: "1.5rem" }}>Server-Log-Dateien</h3>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              4. Ihre Rechte
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              5. Analyse-Tools und Werbung
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              {/* TODO PLATZHALTER: Falls später ein Analyse-Tool (z. B. Matomo/Umami) eingebunden wird, muss es hier datenschutzkonform beschrieben werden. */}
              Diese Website verwendet derzeit keine Analyse-, Tracking- oder Werbe-Tools und setzt hierfür keine Cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              6. Externe Schriftarten (Google Fonts)
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[#C9A84C]/20">
            <p className="text-[#1A1A1A]/45 text-sm">
              Stand: {legal.datenschutzStand} · Bitte ersetzen Sie alle Platzhalter in eckigen Klammern durch Ihre tatsächlichen Angaben vor der Veröffentlichung. Wir empfehlen, diese Datenschutzerklärung von einem Rechtsanwalt prüfen zu lassen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
