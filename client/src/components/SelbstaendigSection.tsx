/*
 * DESIGN: "Organische Expertise" – Terrakotta Akzente, Schritte-Darstellung
 * Selbstständigkeit: Weg in die eigene Praxis
 */
import { useEffect, useRef } from "react";

const schritte = [
  {
    nr: "01",
    title: "Fundiertes Fachwissen",
    text: "Sie lernen, welche Beschwerdebilder Ihre Klienten mitbringen, wie Sie diese einordnen und gezielt mit Massage- und Trainingstechniken begleiten können.",
  },
  {
    nr: "02",
    title: "Marktpositionierung verstehen",
    text: "Im Seminar vermitteln wir Ihnen, wie Sie sich als spezialisierter Wellness-Therapeut klar von gewöhnlichen Masseuren abheben und warum Klienten bereit sind, mehr zu zahlen.",
  },
  {
    nr: "03",
    title: "Praxisgründung einschätzen",
    text: "Sie erhalten das nötige Know-how über Gewerbeanmeldung, Preisgestaltung und Klientengewinnung – damit Sie wissen, was Sie erwartet und wie Sie starten können.",
  },
  {
    nr: "04",
    title: "Eigenverantwortlich durchstarten",
    text: "Mit dem Wissen aus dem Seminar sind Sie bestens vorbereitet, um selbstständig durchzustarten – als Therapeut, der sich durch echtes Fachwissen klar von der Masse abhebt.",
  },
];

export default function SelbstaendigSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".animate-on-scroll");
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add("visible"), i * 120);
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
      id="selbstaendig"
      className="py-24 md:py-32 bg-[#FAFAF8]"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header + Image */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span
                  className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                >
                  Ihr Weg in die Selbstständigkeit
                </span>
              </div>
              <h2
                className="text-[#0D0D0D] leading-tight mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                }}
              >
                Von der Ausbildung zur<br />
                <em style={{ fontStyle: "italic" }}>eigenen Praxis</em>
              </h2>
              <p
                className="text-[#1A1A1A]/65 text-lg leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Das Manus-Therapie Seminar vermittelt Ihnen das Wissen, das Sie für
                eine erfolgreiche Selbstständigkeit brauchen. Sie erhalten einen klaren
                Vorsprung: Wer versteht, was hinter einem Beschwerdebild steckt und
                gezielt darauf eingeht, hebt sich von gewöhnlichen Masseuren grundlegend
                ab – und das spüren Klienten sofort.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="animate-on-scroll mt-8 p-6 bg-[#0D0D0D] rounded-sm">
              <p
                className="text-white/90 text-base leading-relaxed italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
              >
                „Der Unterschied zwischen einem gewöhnlichen Masseur und jemandem mit
                Manus-Therapie-Wissen ist nicht die Lizenz – es ist das Verständnis.
                Und genau das ist Ihr Alleinstellungsmerkmal am Markt."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-px bg-[#C9A84C]" />
                <span
                  className="text-[#E8D08A] text-xs tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Eduard Birt & Leo Reich – Dozenten der Manus-Therapie Akademie
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="rounded-sm overflow-hidden shadow-xl shadow-[#0D0D0D]/15">
              <img
                src="/images/selbstaendig_success.jpg"
                alt="Erfolgreiche selbstständige Masseurin"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#C9A84C]/20 rounded-sm pointer-events-none" />
          </div>
        </div>

        {/* Schritte */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {schritte.map((schritt, i) => (
            <div
              key={schritt.nr}
              className="animate-on-scroll relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < schritte.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#C9A84C]/30 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-sm p-6 shadow-sm border border-[#C9A84C]/20 h-full">
                <span
                  className="block text-[#C9A84C]/30 font-bold mb-4 leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem" }}
                >
                  {schritt.nr}
                </span>
                <h3
                  className="text-[#0D0D0D] mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  {schritt.title}
                </h3>
                <p
                  className="text-[#1A1A1A]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {schritt.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
