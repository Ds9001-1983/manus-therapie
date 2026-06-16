/*
 * DESIGN: "Organische Expertise" – Impressum-Seite
 * Rechtliche Pflichtangaben gemäß § 5 TMG
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { legal } from "@/content";

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
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              <strong>{legal.betreiber}</strong><br />
              {legal.inhaber}<br />
              {legal.strasse}<br />
              {legal.plzOrt}<br />
              {legal.land}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Kontakt
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Telefon: {legal.telefon}<br />
              E-Mail: {legal.email}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Umsatzsteuer-ID
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              {legal.ustId}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              {legal.rstvName}<br />
              {legal.rstvStrasse}<br />
              {legal.rstvPlzOrt}
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Haftung für Inhalte
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-[#1A1A1A]/80 leading-relaxed mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Haftung für Links
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#0D0D0D", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>
              Urheberrecht
            </h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[#C9A84C]/20">
            <p className="text-[#1A1A1A]/45 text-sm">
              Bitte ersetzen Sie alle Platzhalter in eckigen Klammern durch Ihre tatsächlichen Angaben vor der Veröffentlichung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
