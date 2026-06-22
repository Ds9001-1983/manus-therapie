/*
 * DESIGN: "Manus Gold" – Cineastischer Video-Einblick direkt nach dem Hero
 * Hochformat-Video (9:16) im Handy-Rahmen, Split-Layout wie die Dozenten-Sektion.
 *
 * Wiedergabe-Wunsch: startet automatisch beim Reinscrollen, MIT Ton, in Schleife.
 * Browser blockieren Autoplay mit Ton ohne vorherige Nutzerinteraktion. Daher:
 *   1. Beim Sichtbarwerden wird zuerst MIT Ton gestartet.
 *   2. Lehnt der Browser ab, läuft das Video stumm weiter und ein Button
 *      "Ton aktivieren" wird eingeblendet (ein Klick genügt, danach mit Ton).
 *   3. Beim Wegscrollen wird pausiert (kein Ton außerhalb des Bildes).
 */
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(false);

  // Sanfte Einblend-Animation (wie die übrigen Sektionen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((item, i) => setTimeout(() => item.classList.add("visible"), i * 120));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-Play beim Sichtbarwerden (mit Ton, sonst stummer Fallback), Pause beim Verlassen
  useEffect(() => {
    const v = videoRef.current;
    const target = wrapRef.current;
    if (!v || !target) return;

    const playInView = async () => {
      v.loop = true;
      v.muted = false;
      try {
        await v.play();
        setMuted(false);
        setShowSoundHint(false);
      } catch {
        // Browser hat Autoplay mit Ton geblockt → stumm weiterlaufen lassen
        v.muted = true;
        setMuted(true);
        setShowSoundHint(true);
        try {
          await v.play();
        } catch {
          /* auch stummer Autoplay blockiert – Nutzer kann manuell starten */
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void playInView();
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    setShowSoundHint(false);
    void v.play();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next) {
      setShowSoundHint(false);
      void v.play();
    }
  };

  return (
    <section id="einblick" className="bg-[#0D0D0D] py-24 md:py-32" ref={sectionRef}>
      {/* Gold-Trennlinie zum Hero */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-16 md:mb-20" />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Handy-Rahmen mit Video */}
          <div className="animate-on-scroll flex justify-center md:justify-start">
            <div className="relative">
              {/* Dekorativer Gold-Rahmen versetzt */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A84C]/30 rounded-[2.4rem] pointer-events-none z-0" />

              <div
                ref={wrapRef}
                className="relative z-10 w-[280px] sm:w-[320px] aspect-[9/16] rounded-[2.2rem] bg-black p-[6px] shadow-2xl shadow-[#C9A84C]/20 ring-1 ring-[#C9A84C]/30"
              >
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    poster="/videos/manus-intro-poster.jpg"
                    preload="metadata"
                    loop
                    playsInline
                    muted
                    onClick={toggleMute}
                  >
                    <source src="/videos/manus-intro.mp4" type="video/mp4" />
                  </video>

                  {/* Ton aktivieren – nur wenn Browser den Ton-Autostart geblockt hat */}
                  {showSoundHint && (
                    <button
                      type="button"
                      onClick={enableSound}
                      className="absolute inset-x-0 bottom-4 mx-auto w-max flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C] text-black text-sm font-bold shadow-lg active:scale-95 transition-transform"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <Volume2 size={16} />
                      Ton aktivieren
                    </button>
                  )}

                  {/* Dauer-Toggle Lautsprecher */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                  >
                    {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span
                className="text-[#E8D08A] text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Einblick
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
              Direkt von den<br />
              <em style={{ fontStyle: "italic", color: "#E8D08A" }}>Gründern erklärt</em>
            </h2>

            <p
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              In rund 35 Sekunden erklären Eduard Birt und Leo Reich, worum es bei der
              Manus-Therapie Akademie geht – und für wen sich der Schritt in eine
              fundierte Weiterbildung wirklich lohnt.
            </p>

            <a
              href="#seminare"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A84C] text-black font-bold text-base tracking-wide rounded-sm hover:bg-[#E8D08A] transition-all duration-200 active:scale-95 shadow-lg shadow-[#C9A84C]/40"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Seminare entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
