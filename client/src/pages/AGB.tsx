/*
 * DESIGN: "Organische Expertise" – Allgemeine Geschäftsbedingungen (AGB)
 * -----------------------------------------------------------------------------
 * PLATZHALTER-SEITE. Der finale AGB-Text wird vom Kunden geliefert ("wenn ihr mir
 * den Text zugeschickt habt") und hier eingesetzt. Die Gliederung dient als Gerüst
 * und sollte vor Go-Live rechtlich geprüft werden. Wichtig laut Abstimmung: Der
 * Hinweis "keine Heilversprechen / Wellnessleistung" wird hier abgesichert, damit
 * er nicht prominent auf der Startseite stehen muss.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const h2Style = {
  fontFamily: "'Cormorant Garamond', serif",
  color: "#0D0D0D",
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
} as const;

export default function AGB() {
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
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg" style={{ fontFamily: "'Lato', sans-serif", color: "#1A1A1A" }}>

          <p className="text-[#9A7A2E] text-sm mb-8 px-4 py-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm">
            Hinweis: Die finalen AGB werden derzeit erstellt und an dieser Stelle eingesetzt,
            sobald der Text vorliegt. Die nachfolgende Gliederung dient als Platzhalter.
          </p>

          <section className="mb-10">
            <h2 style={h2Style}>1. Geltungsbereich</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die
              Teilnahme an Seminaren und Angeboten der Manus-Therapie Akademie.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>2. Vertragsschluss & Anmeldung</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Ablauf der Anmeldung, Bestätigung und Zustandekommen des Vertrags.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>3. Preise & Zahlungsbedingungen</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Seminargebühren, Fälligkeit, Zahlungsarten und Frühbucherkonditionen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>4. Rücktritt, Stornierung & Umbuchung</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Stornofristen und -gebühren sowie Regelungen zur Umbuchung. Das
              gesetzliche{" "}
              <Link href="/widerruf">
                <span className="text-[#9A7A2E] underline cursor-pointer">Widerrufsrecht</span>
              </Link>{" "}
              für Verbraucher bleibt unberührt.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>5. Leistungsumfang & rechtlicher Charakter</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Alle vermittelten Inhalte und Techniken sind ausschließlich als
              Wellnessleistungen konzipiert. Sie ersetzen weder eine ärztliche Diagnose noch eine
              medizinische Behandlung; es werden keinerlei Heilungsversprechen gemacht
              (vgl. Heilpraktikergesetz).
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>6. Haftung</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Haftungsumfang und -beschränkungen.
            </p>
          </section>

          <section className="mb-10">
            <h2 style={h2Style}>7. Schlussbestimmungen</h2>
            <p className="text-[#1A1A1A]/80 leading-relaxed">
              [Platzhalter] Anwendbares Recht, Gerichtsstand und salvatorische Klausel.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
