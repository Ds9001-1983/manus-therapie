/*
 * DESIGN: "Organische Expertise" – Waldgrün Hintergrund, Testimonials
 * Über uns + Stimmen von Absolventen
 */
import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { stats } from "@/content";

const testimonials = [
  {
    name: "G. R.",
    quelle: "Google • Integral Therapie Leo Reich",
    text: "Ein echter Profi – spürbare Hilfe schon nach der ersten Behandlung! Schon direkt nach der ersten Sitzung habe ich eine spürbare Verbesserung gefühlt. Er nimmt sich wirklich Zeit, hört aufmerksam zu und weiß genau, was zu tun ist. Seine ruhige Art und die gezielten Techniken machen jeden Besuch effektiv und angenehm.",
    sterne: 5,
  },
  {
    name: "Dagmar Epe",
    quelle: "Google • Integral Therapie Leo Reich",
    text: "Meine Familie und ich sind schon seit längerer Zeit in der Praxis und ich kann alle Mitarbeiter und Leo Reich selbst nur weiterempfehlen. Mit der Terminvergabe, der Atmosphäre, der Freundlichkeit und vor allem den Behandlungen bin ich mehr als zufrieden. Auch bei kurzfristigen Anfragen wurde immer alles möglich gemacht. Top Team!",
    sterne: 5,
  },
  {
    name: "Danny Hublin",
    quelle: "Google • ChiroConcept Birt",
    text: "Sehr zu empfehlen. Aufmerksames Erstgespräch. Bin am ersten Tag fast schmerzfrei wieder rausgegangen. Natürlich bedarf es weiterer Behandlung zur allgemeinen Besserung. Vielen Dank an das ganze Team.",
    sterne: 5,
  },
  {
    name: "Bine",
    quelle: "Google • ChiroConcept Birt",
    text: "Wenn schon Behandlung, dann hier. Super Team, super Behandlung. Wenn jemand meinen alten Körper wieder auf Kurs bringt, dann Ihr.",
    sterne: 5,
  },
  {
    name: "Maria Becker",
    quelle: "Google • ChiroConcept Birt",
    text: "Super Praxis. Das gesamte Team sehr freundlich und kompetent. Mittlerweile lässt sich die ganze Familie dort behandeln. Kann ich nur weiterempfehlen.",
    sterne: 5,
  },
  {
    name: "B A",
    quelle: "Google • ChiroConcept Birt",
    text: "Ich bin sehr zufrieden bei der Therapeutin Angelina. Sie nimmt die Beschwerden professionell auf und behandelt super. Die Behandlung hilft mir sehr und ich kann die Praxis 100% weiterempfehlen. Kaum eine Wartezeit bei Terminen.",
    sterne: 5,
  },
];

export default function UeberUnsSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ueber-uns"
      className="py-24 md:py-32 bg-[#0D0D0D]"
      ref={sectionRef}
    >
      <div className="container">
        {/* Über uns Header */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span
                className="text-[#E8D08A] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Über die Akademie
              </span>
            </div>
            <h2
              className="text-white leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Warum die<br />
              <em style={{ fontStyle: "italic", color: "#E8D08A" }}>Manus-Therapie Akademie?</em>
            </h2>
          </div>

          <div className="animate-on-scroll">
            <p
              className="text-white/70 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Wir haben erkannt, dass es eine große Lücke zwischen einfacher Wellnessmassage und
              medizinisch informierter Begleitung gibt. In dieser Lücke liegt eine enorme Chance:
              Wellness-Therapeuten mit fundiertem Körperwissen sind gefragt wie nie.
            </p>
            <p
              className="text-white/70 text-lg leading-relaxed"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Unsere Dozenten sind erfahrene Wellness-Therapeuten und Körperwissen-Experten,
              die ihr Wissen verständlich und praxisnah vermitteln. Keine trockene Theorie –
              sondern Wissen, das Sie sofort anwenden können.
            </p>
          </div>
        </div>

        {/* Zahlen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-on-scroll">
          {[
            { value: stats.behandlungen, label: "erfolgreiche Behandlungen" },
            { value: stats.jahre, label: "Erfahrung" },
            { value: stats.weiterempfehlung, label: "Weiterempfehlung" },
            { value: stats.krankheitsbilder, label: "Krankheitsbilder" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 rounded-sm border border-[#C9A84C]/25 hover:border-[#C9A84C]/50 transition-colors"
            >
              <div
                className="text-[#E8D08A] font-bold mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/55 text-sm tracking-wide"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12 animate-on-scroll">
            <h3
              className="text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
              }}
            >
              Was Patienten sagen
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="animate-on-scroll bg-white/5 border border-[#C9A84C]/20 rounded-sm p-7 hover:bg-white/8 hover:border-[#C9A84C]/40 transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote size={24} className="text-[#C9A84C] mb-4 opacity-60" />
                <p
                  className="text-white/80 text-base leading-relaxed mb-6 italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
                >
                  {t.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                    className="text-[#E8D08A] text-xs"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.quelle}
                  </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.sterne }).map((_, j) => (
                      <Star key={j} size={13} className="text-[#C9A84C] fill-[#C9A84C]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
