/*
 * DESIGN: "Manus Gold" – Schwarz + Gold + Weiß
 * Navbar: Transparent → Tiefschwarz beim Scrollen, echtes Manus-Therapie Logo
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Seminare", href: "#seminare" },
  { label: "Dozenten", href: "#dozenten" },
  { label: "Beschwerdebilder", href: "#krankheitsbilder" },
  { label: "Aufbautraining", href: "#aufbautraining" },
  { label: "Selbstständig", href: "#selbstaendig" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#0D0D0D] shadow-lg shadow-black/40"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      {/* Gold top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/images/manus-therapie-logo.png"
              alt="Manus-Therapie – Massage und Trainingstherapie"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-[#C9A84C] text-sm tracking-wide transition-colors duration-200 relative group"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-sm font-bold tracking-wide hover:bg-[#C9A84C] hover:text-black transition-all duration-200 active:scale-95"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Jetzt anmelden
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0D0D0D] overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        <nav className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-[#C9A84C] py-3 text-base border-b border-white/10 transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-3 px-5 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm font-bold text-center hover:bg-[#C9A84C] hover:text-black transition-colors"
          >
            Jetzt anmelden
          </a>
        </nav>
      </div>
    </header>
  );
}
