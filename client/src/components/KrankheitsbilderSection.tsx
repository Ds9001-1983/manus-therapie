/*
 * DESIGN: "Organische Expertise" – Waldgrün Hintergrund, Illustration + Karten
 * Krankheitsbilder: Anatomische Illustration + Kacheln
 */
import { useEffect, useRef } from "react";

const krankheitsbilder = [
  {
    title: "HWS-BWS-LWS Syndrom",
    desc: "Sie lernen, wie Verspannungen und Fehlbelastungen entlang der gesamten Wirbelsäule entstehen – und welche gezielten Massagetechniken sowie Ausgleichsübungen Ihren Klienten langfristig helfen, den Schmerzzirkel zu durchbrechen und beschwerdefrei zu bleiben.",
    tag: "Kernschwerpunkt",
  },
  {
    title: "Impingement-Syndrom",
    desc: "Sie verstehen die Ursachen des Schulterimpingements auf muskulärer Ebene und lernen, welche Grifftechniken akut entlasten – ergänzt durch spezifische Kräftigungs- und Mobilisierungsübungen, die das Schultergelenk langfristig stabilisieren.",
    tag: "Sehr gefragt",
  },
  {
    title: "Tennisarm & Golferarm",
    desc: "Überlastungsbeschwerden am Ellenbogen haben oft eine klare muskuläre Ursache. Sie lernen gezielte Grifftechniken für die betroffene Region sowie Dehn- und Kräftigungsübungen, die Rückfälle verhindern und die Belastbarkeit dauerhaft steigern.",
    tag: "Alleinstellungsmerkmal",
  },
  {
    title: "Piriformis-Syndrom",
    desc: "Der Piriformis-Muskel ist häufig unerkannter Auslöser von Gesäß- und Ischiasbeschwerden. Sie lernen tiefenwirksame Massagetechniken für diesen Bereich sowie gezielte Dehn- und Aktivierungsübungen, die Ihren Klienten nachhaltig entlasten.",
    tag: "Spezialisierung",
  },
  {
    title: "X-Bein / O-Bein Haltung",
    desc: "Beinachsenfehlstellungen belasten Knie, Hüfte und Rücken oft über Jahre. Sie lernen, wie Muskelungleichgewichte entstehen, welche Massagetechniken gezielt eingesetzt werden – und welche Übungen die Beinachse langfristig korrigieren und stabilisieren.",
    tag: "Wachsendes Feld",
  },
];

export default function KrankheitsbilderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".animate-on-scroll");
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="krankheitsbilder"
      className="py-24 md:py-32 bg-[#0D0D0D]"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span
                className="text-[#E8D08A] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Medizinische Expertise
              </span>
            </div>
            <h2
              className="text-white leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Gezieltes Wissen für<br />
              <em style={{ fontStyle: "italic", color: "#E8D08A" }}>häufige Beschwerdebilder</em>
            </h2>
            <p
              className="text-white/65 text-lg leading-relaxed mt-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Sie lernen, wie Sie Klienten mit bestimmten Beschwerden ganzheitlich begleiten können –
              als Wellnessleistung, ohne Heilversprechen und im rechtlich sicheren Rahmen.
            </p>
          </div>

          {/* Illustration */}
          <div className="animate-on-scroll flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[#FAFAF8]/10 flex items-center justify-center overflow-hidden border border-white/10">
                <img
                  src="/images/illustration_krankheitsbilder.jpg"
                  alt="Anatomische Illustration Krankheitsbilder"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-[#C9A84C]/30 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-white/10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Krankheitsbilder Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {krankheitsbilder.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll bg-white/5 hover:bg-white/10 border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 rounded-sm p-6 transition-all duration-300 group cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span
                className="inline-block text-[10px] tracking-widest uppercase text-[#C9A84C] font-bold mb-3 px-2 py-0.5 bg-[#C9A84C]/15 rounded-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {item.tag}
              </span>
              <h3
                className="text-white mb-2 group-hover:text-[#E8D08A] transition-colors"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/55 text-sm leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
