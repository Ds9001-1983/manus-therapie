/*
 * DESIGN: "Manus Gold" – Großformatiger Hero mit Overlay
 * Dunkles Overlay auf Hero-Bild, heller Text, Gold-CTA
 */
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { stats } from "@/content";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero_massage_seminar.jpg"
          alt="Medizinisches Massage Seminar"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#0D0D0D]/70 to-[#0D0D0D]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container py-32 md:py-0">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span
              className="text-[#E8D08A] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Medizinisches Fachwissen ohne Vorkenntnisse
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-white leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Medizinische Massage –<br />
            <em style={{ fontStyle: "italic", color: "#E8D08A" }}>
              Wissen, das wirkt.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Lernen Sie, wie Sie Ihre Klienten bei häufigen Beschwerdebildern ganzheitlich begleiten können –
            als qualifizierter Wellness-Therapeut mit fundiertem Körperwissen. Keine Vorkenntnisse nötig,
            keine Heilversprechen – dafür echter Mehrwert für Ihre Klienten.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#seminare"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A84C] text-black font-bold text-base tracking-wide rounded-sm hover:bg-[#E8D08A] transition-all duration-200 active:scale-95 shadow-lg shadow-[#C9A84C]/40"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Seminare entdecken
            </a>
            <a
              href="#krankheitsbilder"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-bold text-base tracking-wide rounded-sm hover:border-white hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Krankheitsbilder ansehen
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
            {[
              { value: stats.behandlungen, label: "erfolgreiche Behandlungen" },
              { value: stats.krankheitsbilder, label: "Krankheitsbilder" },
              { value: stats.vorkenntnisse, label: "Vorkenntnisse nötig" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-white font-bold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/60 text-sm tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#alleinstellungsmerkmal"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
