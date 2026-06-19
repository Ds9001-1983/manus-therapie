/*
 * DESIGN: "Organische Expertise" – Impressum-Seite
 * Rechtliche Pflichtangaben gemäß § 5 DDG (Digitale-Dienste-Gesetz, vormals § 5 TMG).
 *
 * Die Manus-Therapie Akademie wird von zwei selbstständigen Einzelunternehmern
 * (freiberuflich) gemeinsam betrieben. Beide Inhaber werden daher vollständig
 * mit Anschrift, Telefon und Steuerangaben ausgewiesen.
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

export default function Impressum() {
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
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg" style={{ fontFamily: "'Lato', sans-serif", color: "#1A1A1A" }}>

          <section className="mb-10">
            <h2 style={h2Style}>Angaben gemäß § 5 DDG</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed mb-6">
              <strong>{legal.betreiber}</strong><br />
              Die {legal.betreiber} wird gemeinschaftlich betrieben von zwei
              selbstständigen Einzelunternehmern:
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {legal.inhaber.map((person) => (
                <div key={person.name}>
                  <p className="text-[#1A1A1A]/80 leading-relaxed">
                    <strong>{person.name}</strong><br />
                    <span className="text-[#9A7A2E]">{person.rolle}</span><br />
                    {person.beruf}<br />
                    {person.unternehmen}<br />
                    {person.strasse}<br />
                    {person.plzOrt}<br />
                    {legal.land}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Kontakt</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              {legal.inhaber.map((person) => (
                <span key={person.name}>
                  Telefon {person.name}: {person.telefon}<br />
                </span>
              ))}
              E-Mail: {legal.email}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Umsatzsteuer / Steuernummer</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              {legal.inhaber.map((person) => (
                <span key={person.name}>
                  {person.name} – {person.steuer.label}: {person.steuer.wert}<br />
                </span>
              ))}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              {legal.verantwortlich.name}<br />
              {legal.verantwortlich.strasse}<br />
              {legal.verantwortlich.plzOrt}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Streitschlichtung</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A7A2E] underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Haftung für Inhalte</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Haftung für Links</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>Urheberrecht</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
