/*
 * DESIGN: "Organische Expertise" – Sandbeige Hintergrund, großzügige Porträt-Karten
 * Dozenten-Fotos (vom Kunden bestätigt — Dateien wurden personentreu umbenannt):
 *   - Eduard Birt  = Foto im schwarzen HEMD  → /images/dozent-eduard-birt.png
 *   - Leo Reich    = Foto im schwarzen T-SHIRT → /images/dozent-leo-reich.jpg
 *   (Die Original-Manus-Dateinamen waren vertauscht/irreführend.)
 */
import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const dozenten = [
  {
    name: "Eduard Birt",
    titel: "Gründer & Leitender Dozent",
    unternehmen: "ChiroConcept Birt",
    foto: "/images/dozent-eduard-birt.png",
    kurztext: "Wer den Körper wirklich versteht, kann mehr als massieren – er kann begleiten, entlasten und verändern.",
    text: "Als Gründer von ChiroConcept Birt und Entwickler der Manus-Therapie weiß ich aus eigener Erfahrung: Echte Wirkung entsteht nicht durch Druck allein, sondern durch Verständnis. Im Manus-Therapie Basic Seminar gebe ich Ihnen in zwei intensiven Tagen das Körperwissen an die Hand, das ich selbst täglich anwende.\n\nSie lernen, wie Beschwerden entstehen, wo der Ursprung häufig liegt – und wie Sie als Wellness-Therapeut gezielt und sicher darauf eingehen können. Kein Medizinstudium, keine Vorkenntnisse erforderlich. Nur die Bereitschaft, Ihren Klienten wirklich zu helfen.",
    tags: ["Manus-Therapie Basic", "Wirbelsäulenwissen", "2-Tage-Seminar"],
    seite: "links",
  },
  {
    name: "Leo Reich",
    titel: "Dozent & Experte für Aufbautraining",
    unternehmen: "Medizinisches Aufbautraining",
    foto: "/images/dozent-leo-reich.jpg",
    kurztext: "Massage und Bewegung gehören zusammen – wer beides versteht, bietet seinen Klienten das volle Bild.",
    text: "Leo Reich bringt den Bereich des medizinischen Aufbautrainings in die Manus-Therapie Seminare ein. Seine Überzeugung: Wer als Wellness-Therapeut auch versteht, wie Muskulatur, Haltung und Bewegungsmuster zusammenhängen, kann Klienten auf einem ganz anderen Niveau begleiten.\n\nIn seinen Seminareinheiten erleben Sie, wie sich Massagetechniken und gezieltes Körpertraining ergänzen – und wie Sie daraus ein ganzheitliches Angebot entwickeln, das Ihre Klienten begeistert und Sie klar von anderen Anbietern unterscheidet.",
    tags: ["Aufbautraining", "Bewegungslehre", "Ganzheitliches Angebot"],
    seite: "rechts",
  },
];

export default function DozentenSection() {
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
    <section id="dozenten" className="py-24 md:py-32 bg-[#FAFAF8]" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-20 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Ihre Dozenten
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
            Lernen Sie von den<br />
            <em style={{ fontStyle: "italic" }}>Experten persönlich</em>
          </h2>
        </div>

        {/* Dozenten – abwechselndes Layout */}
        <div className="flex flex-col gap-20">
          {dozenten.map((dozent, i) => (
            <div
              key={dozent.name}
              className="animate-on-scroll grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Foto */}
              <div
                className={`relative ${dozent.seite === "rechts" ? "md:order-2" : "md:order-1"}`}
              >
                <div className="relative">
                  {/* Dekorativer Rahmen */}
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A84C]/30 rounded-sm pointer-events-none z-0" />
                  {/* Foto-Container */}
                  <div className="relative z-10 rounded-sm overflow-hidden shadow-xl shadow-[#C9A84C]/15 bg-[#1A1A1A]">
                    <img
                      src={dozent.foto}
                      alt={dozent.name}
                      className="w-full object-cover object-top"
                      style={{ maxHeight: "520px" }}
                    />
                    {/* Gradient unten */}
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />
                    {/* Name-Badge unten */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div
                        className="text-white font-bold"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}
                      >
                        {dozent.name}
                      </div>
                      <div
                        className="text-[#E8D08A] text-xs tracking-wide"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {dozent.unternehmen}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={dozent.seite === "rechts" ? "md:order-1" : "md:order-2"}>
                {/* Titel-Badge */}
                <span
                  className="inline-block text-[10px] tracking-widest uppercase text-[#C9A84C] font-bold mb-4 px-2.5 py-1 bg-[#C9A84C]/12 rounded-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {dozent.titel}
                </span>

                <h3
                  className="text-[#0D0D0D] mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 700,
                  }}
                >
                  {dozent.name}
                </h3>

                {/* Zitat-Kurztext */}
                <div className="flex items-start gap-2 mb-2">
                  <Quote size={16} className="text-[#C9A84C] flex-shrink-0 mt-1 opacity-70" />
                  <p
                    className="text-[#0D0D0D]/70 italic leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
                  >
                    {dozent.kurztext}
                  </p>
                </div>
                <p className="text-[#1A1A1A]/40 text-xs mb-5" style={{ fontFamily: "'Lato', sans-serif", paddingLeft: "1.5rem" }}>
                  {dozent.name === "Eduard Birt" ? "Eduard Birt & Leo Reich – Dozenten der Manus-Therapie Akademie" : "Leo Reich & Eduard Birt – Dozenten der Manus-Therapie Akademie"}
                </p>

                {/* Langer Text – Absätze */}
                <div className="flex flex-col gap-4 mb-7">
                  {dozent.text.split("\n\n").map((absatz, j) => (
                    <p
                      key={j}
                      className="text-[#1A1A1A]/65 text-base leading-relaxed"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {absatz}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {dozent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#C9A84C]/10 text-[#9A7A2E] text-xs font-bold tracking-wide rounded-sm border border-[#C9A84C]/30"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
