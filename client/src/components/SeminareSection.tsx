/*
 * DESIGN: "Organische Expertise" – Sandbeige Hintergrund, Seminar-Karten
 * Seminare: Übersicht der Kursangebote mit Preisen und Details
 */
import { useEffect, useRef } from "react";
import { Clock, Users, Award, ChevronRight, MapPin } from "lucide-react";
import { seminar as seminarData } from "@/content";

const seminare = [
  {
    level: seminarData.level,
    title: seminarData.title,
    subtitle: seminarData.subtitle,
    duration: seminarData.dates,
    participants: seminarData.participants,
    fruehbucher: seminarData.fruehbucher,
    location: seminarData.location,
    cert: seminarData.cert,
    price: seminarData.price,
    priceGross: seminarData.priceGross,
    highlight: true,
    topics: seminarData.topics,
    image: seminarData.image,
  },
];

export default function SeminareSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="seminare" className="py-24 md:py-32 bg-[#FAFAF8]" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Kursangebot
            </span>
          </div>
          <h2
            className="text-[#0D0D0D] leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            Unsere Seminare
          </h2>
          <p
            className="text-[#1A1A1A]/65 text-lg leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Starten Sie mit dem Manus-Therapie Basic – in drei intensiven Tagen erhalten
            Sie das Wissen und die Techniken, die Sie sofort in Ihrer Praxis einsetzen können.
          </p>
        </div>

        {/* Seminar Cards */}
        <div className="grid md:grid-cols-1 max-w-xl gap-6 lg:gap-8">
          {seminare.map((seminar, i) => (
            <div
              key={seminar.title}
              className={`animate-on-scroll relative rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                seminar.highlight
                  ? "shadow-xl shadow-[#0D0D0D]/20 ring-2 ring-[#0D0D0D]"
                  : "shadow-md shadow-black/10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
                {/* Highlight Badge */}
              {seminar.highlight && (
                <div className="absolute top-0 left-0 right-0 z-10 bg-[#0D0D0D] text-[#E8D08A] text-center text-xs tracking-widest uppercase py-1.5 font-bold" style={{ fontFamily: "'Lato', sans-serif" }}>
                  Manus-Therapie Basic
                </div>
              )}

              {/* Image */}
              <div className={`relative overflow-hidden ${seminar.highlight ? "h-48 mt-7" : "h-48"}`}>
                <img
                  src={seminar.image}
                  alt={seminar.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute bottom-3 left-4 text-white text-xs tracking-widest uppercase font-bold px-2 py-1 bg-[#C9A84C] rounded-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {seminar.level}
                </span>
              </div>

              {/* Content */}
              <div className="bg-white flex flex-col flex-1 p-6">
                <h3
                  className="text-[#0D0D0D] mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  {seminar.title}
                </h3>
                <p
                  className="text-[#1A1A1A]/55 text-sm mb-5"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {seminar.subtitle}
                </p>

                {/* Meta */}
                <div className="flex flex-col gap-2 mb-5 pb-5 border-b border-[#C9A84C]/20">
                  {[
                    { icon: Clock, text: seminar.duration },
                    { icon: MapPin, text: (seminar as any).location },
                    { icon: Users, text: seminar.participants },
                    { icon: Award, text: seminar.cert },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-[#1A1A1A]/65" style={{ fontFamily: "'Lato', sans-serif" }}>
                      <Icon size={14} className="text-[#C9A84C] flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>

                {/* Topics */}
                <ul className="flex flex-col gap-1.5 mb-6 flex-1">
                  {seminar.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-[#1A1A1A]/70" style={{ fontFamily: "'Lato', sans-serif" }}>
                      <ChevronRight size={13} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Frühbucher Banner */}
                {(seminar as any).fruehbucher && (
                  <div className="mb-4 px-4 py-3 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C9A84C] text-xs font-bold tracking-wide uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>🎯 Frühbucherrabatt</span>
                    </div>
                    <p className="text-[#C9A84C] text-sm mt-1 font-medium" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {(seminar as any).fruehbucher}
                    </p>
                  </div>
                )}

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span
                      className="text-[#0D0D0D]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700 }}
                    >
                      {seminar.price} €
                    </span>
                    <span className="text-[#1A1A1A]/45 text-xs ml-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                      zzgl. MwSt.
                    </span>
                    {(seminar as any).priceGross && (
                      <div className="text-[#1A1A1A]/45 text-xs mt-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                        {(seminar as any).priceGross} € inkl. 19% MwSt.
                      </div>
                    )}
                  </div>
                  <a
                    href="#kontakt"
                    className={`px-5 py-2.5 text-sm font-bold tracking-wide rounded-sm transition-all duration-200 active:scale-95 ${
                      seminar.highlight
                        ? "bg-[#C9A84C] text-black hover:bg-[#E8D08A]"
                        : "bg-[#0D0D0D] text-white hover:bg-[#1A1A1A]"
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Anmelden
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
