/*
 * DESIGN: "Organische Expertise" – Widerrufsbelehrung
 * -----------------------------------------------------------------------------
 * PLATZHALTER-SEITE. Verbraucher haben bei Fernabsatzverträgen (z. B. Anmeldung
 * über das Online-Kontaktformular) ein 14-tägiges Widerrufsrecht. Der untenstehende
 * Text orientiert sich am gesetzlichen Muster (Art. 246a EGBGB). VOR Go-Live durch
 * den Kunden / eine Rechtsberatung final prüfen und [eckige Platzhalter] ersetzen.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { legal } from "@/content";

const h2Style = {
  fontFamily: "'Cormorant Garamond', serif",
  color: "#0D0D0D",
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
} as const;

export default function Widerruf() {
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
            Widerrufsbelehrung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg" style={{ fontFamily: "'Lato', sans-serif", color: "#1A1A1A" }}>

          <p className="text-[#9A7A2E] text-sm mb-8 px-4 py-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm">
            Hinweis: Dies ist ein Entwurf auf Basis des gesetzlichen Musters. Der finale Text
            wird vom Anbieter bzw. einer Rechtsberatung geprüft, bevor er veröffentlicht wird.
          </p>

          <section className="mb-10">
            <h2 style={h2Style}>Widerrufsrecht</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              <strong>{legal.betreiber}</strong><br />
              {legal.verantwortlich.name}<br />
              {legal.verantwortlich.strasse}<br />
              {legal.verantwortlich.plzOrt}<br />
              E-Mail: {legal.email}
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine
              E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür
              das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
              Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Folgen des Widerrufs</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
              erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen,
              an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
              Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
              eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem
              Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Vorzeitiges Erlöschen des Widerrufsrechts</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Haben Sie verlangt, dass die Dienstleistung (z. B. die Teilnahme an einem Seminar) während
              der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der
              dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts
              unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag
              vorgesehenen Dienstleistungen entspricht. Das Widerrufsrecht erlischt vorzeitig, wenn wir die
              Dienstleistung vollständig erbracht haben und mit der Ausführung erst begonnen haben,
              nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis
              davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung
              verlieren.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Muster-Widerrufsformular</h2>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-4">
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus
              und senden Sie es zurück.)
            </p>
            <div className="px-5 py-5 bg-white border border-[#C9A84C]/25 rounded-sm text-[#1A1A1A]/80 leading-relaxed text-sm">
              <p>
                An {legal.betreiber}, {legal.verantwortlich.name}, {legal.verantwortlich.strasse},
                {" "}{legal.verantwortlich.plzOrt}, E-Mail: {legal.email}:
              </p>
              <p className="mt-4">
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die
                Erbringung der folgenden Dienstleistung (*):
              </p>
              <p className="mt-4">_______________________________________________</p>
              <p className="mt-4">Bestellt am (*) / erhalten am (*): _____________</p>
              <p className="mt-2">Name des/der Verbraucher(s): _________________</p>
              <p className="mt-2">Anschrift des/der Verbraucher(s): ____________</p>
              <p className="mt-2">Datum: ________________________________________</p>
              <p className="mt-2">
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ____________
              </p>
              <p className="mt-4 text-[#1A1A1A]/50">(*) Unzutreffendes streichen.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
