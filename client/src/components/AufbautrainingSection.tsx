/*
 * DESIGN: "Organische Expertise" – Asymmetrisches Layout, Bild links, Text rechts
 * Aufbautraining: Medizinisches Aufbautraining als Ergänzung zur Massage
 */
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const vorteile = [
  "Evidenzbasierte Übungsauswahl für spezifische Krankheitsbilder",
  "Trainingsplanung für Patienten mit Rücken-, Knie- und Schulterbeschwerden",
  "Kombination aus Massage und therapeutischem Training",
  "Gerätefreie Übungen für die Praxis und Heimtraining",
  "Dokumentation & Fortschrittsmessung für Klienten",
  "Erweitertes Leistungsangebot = höhere Honorare",
];

export default function AufbautrainingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".animate-on-scroll");
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("visible"), i * 100);
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
      id="aufbautraining"
      className="py-24 md:py-32 bg-white"
      ref={sectionRef}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image – links */}
          <div className="animate-on-scroll relative order-2 md:order-1">
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#0D0D0D]/20">
              <img
                src="/images/aufbautraining_fitness.jpg"
                alt="Medizinisches Aufbautraining"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#C9A84C] text-black p-5 rounded-sm shadow-lg max-w-[180px]">
              <div
                className="text-3xl font-bold leading-none mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2-in-1
              </div>
              <div
                className="text-xs leading-tight opacity-90"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Massage + Aufbautraining kombiniert
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#0D0D0D]/20 rounded-sm pointer-events-none" />
          </div>

          {/* Text – rechts */}
          <div className="order-1 md:order-2">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span
                  className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  Erweitertes Angebot
                </span>
              </div>
              <h2
                className="text-[#0D0D0D] leading-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Medizinisches<br />
                <em style={{ fontStyle: "italic" }}>Aufbautraining</em>
              </h2>
              <p
                className="text-[#1A1A1A]/65 text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Ergänzen Sie Ihre Massagepraxis mit gezieltem therapeutischen Aufbautraining.
                Klienten mit chronischen Beschwerden profitieren enorm von der Kombination aus
                manueller Therapie und medizinisch fundiertem Bewegungstraining.
              </p>
            </div>

            {/* Vorteile */}
            <ul className="flex flex-col gap-3 mb-8">
              {vorteile.map((vorteil, i) => (
                <li
                  key={vorteil}
                  className="animate-on-scroll flex items-start gap-3"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <CheckCircle2 size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span
                    className="text-[#1A1A1A]/75 text-sm leading-relaxed"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {vorteil}
                  </span>
                </li>
              ))}
            </ul>

            <div className="animate-on-scroll">
              <a
                href="#seminare"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-black font-bold text-sm tracking-wide rounded-sm hover:bg-[#E8D08A] transition-all duration-200 active:scale-95 shadow-lg shadow-[#C9A84C]/25"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Zum Komplettkurs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
