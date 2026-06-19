/*
 * DESIGN: "Manus Gold" – Tiefschwarz Footer mit Gold-Akzenten
 */
import { Link } from "wouter";
import { site } from "@/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white/50 py-14">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-14" />

      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img
                src="/images/manus-therapie-logo.png"
                alt="Manus-Therapie – Massage und Trainingstherapie"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs text-white/45"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Fundiertes Körperwissen für Wellness-Therapeuten –
              ohne Vorkenntnisse, rechtssicher als Wellnessleistung.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif" }}>
                Massage und Trainingstherapie
              </span>
            </div>
            <div className="mt-6">
              <SocialLinks variant="light" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#C9A84C] text-xs tracking-widest uppercase mb-5 font-bold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                ["Seminare", "#seminare"],
                ["Dozenten", "#dozenten"],
                ["Beschwerdebilder", "#krankheitsbilder"],
                ["Aufbautraining", "#aufbautraining"],
                ["Selbstständig", "#selbstaendig"],
                ["Über uns", "#ueber-uns"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4
              className="text-[#C9A84C] text-xs tracking-widest uppercase mb-5 font-bold"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Rechtliches
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/impressum">
                  <span className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>Impressum</span>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <span className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>Datenschutz</span>
                </Link>
              </li>
              <li>
                <Link href="/widerruf">
                  <span className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>Widerruf</span>
                </Link>
              </li>
              <li>
                <Link href="/agb">
                  <span className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors cursor-pointer" style={{ fontFamily: "'Lato', sans-serif" }}>AGB</span>
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h4
                className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3 font-bold"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Kontakt
              </h4>
              <p className="text-sm text-white/45" style={{ fontFamily: "'Lato', sans-serif" }}>
                {site.email}
              </p>
              <p className="text-sm text-white/45 mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                {site.website}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/35"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            © {new Date().getFullYear()} Manus-Therapie Akademie · Eduard Birt & Leo Reich. Alle Rechte vorbehalten.
          </p>
          <p
            className="text-xs text-[#C9A84C]/50"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Wellness mit Wissen. Ganzheitlich. Rechtssicher.
          </p>
        </div>
      </div>
    </footer>
  );
}
