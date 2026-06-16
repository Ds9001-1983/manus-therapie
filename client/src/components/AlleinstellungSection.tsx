/*
 * DESIGN: "Organische Expertise" – Sandbeige Hintergrund, asymmetrisches Layout
 * USP-Sektion: Medizinisches Wissen ohne Vorkenntnisse
 */
import { useEffect, useRef } from "react";
import { Stethoscope, GraduationCap, TrendingUp, ShieldCheck } from "lucide-react";

const usp = [
  {
    icon: Stethoscope,
    title: "Medizinisches Fachwissen",
    text: "Wir vermitteln gezieltes Körperwissen zu häufigen Beschwerdebildern – praxisnah, verständlich und sofort anwendbar. Kein Medizinstudium, keine Vorausbildung erforderlich.",
  },
  {
    icon: GraduationCap,
    title: "Ohne Vorkenntnisse starten",
    text: "Unsere Seminare sind so aufgebaut, dass jeder Interessierte einsteigen kann – vom Quereinsteiger bis zum erfahrenen Masseur, der sein Angebot erweitern möchte.",
  },
  {
    icon: TrendingUp,
    title: "Ihr Alleinstellungsmerkmal",
    text: "Als medizinisch geschulter Masseur heben Sie sich klar vom Markt ab. Klienten mit konkreten Beschwerden suchen gezielt nach Therapeuten mit fundiertem Wissen.",
  },
  {
    icon: ShieldCheck,
    title: "Zertifizierte Qualität",
    text: "Alle Seminare schließen mit einem anerkannten Zertifikat ab, das Ihre Qualifikation gegenüber Klienten und Kooperationspartnern dokumentiert.",
  },
];

export default function AlleinstellungSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".animate-on-scroll");
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alleinstellungsmerkmal"
      className="py-24 md:py-32 bg-[#FAFAF8]"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header – asymmetrisch */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-20">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Ihr Vorteil
              </span>
            </div>
            <h2
              className="text-[#0D0D0D] leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Medizinisches Wissen –<br />
              <em style={{ fontStyle: "italic" }}>ohne Vorkenntnisse</em>
            </h2>
          </div>
          <div className="animate-on-scroll">
            <p
              className="text-[#1A1A1A]/65 text-lg leading-relaxed"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Der Unterschied zwischen einem gewöhnlichen Masseur und einem fundierten Wellness-Therapeuten
              liegt im Wissen. Wir geben Ihnen dieses Körperwissen – strukturiert, praxisnah und
              rechtssicher als Wellnessleistung positioniert.
            </p>
          </div>
        </div>

        {/* USP Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usp.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="animate-on-scroll bg-white rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="text-[#0D0D0D] mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#1A1A1A]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
