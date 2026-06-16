/*
 * DESIGN: "Organische Expertise" – Sandbeige Hintergrund, Kontaktformular
 * Kontakt: Anmeldeformular + Kontaktdaten
 */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { site, seminar as seminarData } from "@/content";

export default function KontaktSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    seminar: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  // ⚠️ TODO PLATZHALTER — VERSAND NOCH NICHT VERDRAHTET
  // Das Formular sendet aktuell NICHTS: handleSubmit zeigt nur die "Vielen Dank"-
  // Bestätigung, ohne die Daten irgendwohin zu übertragen — Anfragen gehen also
  // verloren. Die finale Versand-Strategie (Formdienst / eigenes Backend / mailto)
  // wird nach Rücksprache mit dem Kunden festgelegt.
  // → NICHT live nehmen, solange hier kein echter Versand angebunden ist.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="py-24 md:py-32 bg-[#FAFAF8]"
      ref={sectionRef}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Jetzt starten
            </span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-[#0D0D0D] leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            Seminaranmeldung &<br />
            <em style={{ fontStyle: "italic" }}>Kontakt</em>
          </h2>
          <p
            className="text-[#1A1A1A]/65 text-lg leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Melden Sie sich für ein Seminar an oder stellen Sie uns Ihre Fragen.
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Kontaktdaten */}
          <div className="md:col-span-1 animate-on-scroll">
            <h3
              className="text-[#0D0D0D] mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
              }}
            >
              Kontaktdaten
            </h3>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: site.phone,
                  href: site.phoneHref,
                },
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: site.email,
                  href: `mailto:${site.email}`,
                },
                {
                  icon: MapPin,
                  label: "Standort",
                  value: site.standort,
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div
                      className="text-[#1A1A1A]/50 text-xs tracking-wide uppercase mb-0.5"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#0D0D0D] text-sm hover:text-[#C9A84C] transition-colors"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="text-[#0D0D0D] text-sm"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Formular */}
          <div className="md:col-span-2 animate-on-scroll">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-sm shadow-sm border border-[#C9A84C]/20">
                <div className="w-16 h-16 bg-[#C9A84C]/15 rounded-full flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="text-[#0D0D0D] mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                  }}
                >
                  Vielen Dank!
                </h3>
                <p
                  className="text-[#1A1A1A]/65 text-base leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-sm shadow-sm border border-[#C9A84C]/20 p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-xs tracking-wide uppercase text-[#1A1A1A]/60 mb-2 font-bold"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded-sm text-[#1A1A1A] bg-[#FAFAF8]/50 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-wide uppercase text-[#1A1A1A]/60 mb-2 font-bold"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded-sm text-[#1A1A1A] bg-[#FAFAF8]/50 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-xs tracking-wide uppercase text-[#1A1A1A]/60 mb-2 font-bold"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded-sm text-[#1A1A1A] bg-[#FAFAF8]/50 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      placeholder="+49 ..."
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-wide uppercase text-[#1A1A1A]/60 mb-2 font-bold"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      Gewünschtes Seminar
                    </label>
                    <select
                      value={formData.seminar}
                      onChange={(e) => setFormData({ ...formData, seminar: e.target.value })}
                      className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded-sm text-[#1A1A1A] bg-[#FAFAF8]/50 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <option value="">Bitte wählen ...</option>
                      <option value="basic">{seminarData.title} (3 Tage) – {seminarData.datesShort}</option>
                      <option value="info">Allgemeine Anfrage</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-xs tracking-wide uppercase text-[#1A1A1A]/60 mb-2 font-bold"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Ihre Nachricht
                  </label>
                  <textarea
                    rows={4}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    className="w-full px-4 py-3 border border-[#C9A84C]/20 rounded-sm text-[#1A1A1A] bg-[#FAFAF8]/50 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-sm resize-none"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    placeholder="Ihre Fragen oder Anmerkungen ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A84C] text-black font-bold text-sm tracking-wide rounded-sm hover:bg-[#E8D08A] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#C9A84C]/25"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Send size={16} />
                  Anfrage senden
                </button>

                <p
                  className="text-center text-[#1A1A1A]/40 text-xs mt-4"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
