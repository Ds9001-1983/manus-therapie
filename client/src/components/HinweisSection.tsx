/*
 * DESIGN: "Organische Expertise" – Dezenter rechtlicher Hinweis-Banner
 * Sandbeige mit Terrakotta-Akzent, klar und transparent positioniert
 */
import { Info } from "lucide-react";

export default function HinweisSection() {
  return (
    <section className="bg-[#FAFAF8] border-t border-b border-[#C9A84C]/20">
      <div className="container py-8">
        <div className="flex items-start gap-4 max-w-4xl mx-auto">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mt-0.5">
            <Info size={17} className="text-[#C9A84C]" />
          </div>
          <div>
            <h4
              className="text-[#0D0D0D] mb-1.5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              Rechtlicher Hinweis – Wellness, keine Heilkunde
            </h4>
            <p
              className="text-[#1A1A1A]/65 text-sm leading-relaxed"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Alle in unseren Seminaren vermittelten Techniken und Inhalte sind ausschließlich
              als <strong className="text-[#1A1A1A]/80">Wellnessleistungen</strong> konzipiert
              und rechtlich als solche einzustufen. Sie ersetzen weder eine ärztliche Diagnose noch
              eine medizinische Behandlung. Es werden keinerlei Heilungsversprechen gemacht.
              Die Anwendungen dienen der allgemeinen Entspannung, dem Wohlbefinden und der
              ganzheitlichen Begleitung – nicht der Therapie oder Heilbehandlung im Sinne des
              Heilpraktikergesetzes. Für medizinische Fragen wenden sich Klienten stets an einen
              Arzt oder zugelassenen Heilberufler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
