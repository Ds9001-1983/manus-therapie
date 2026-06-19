/*
 * Social-Media-Verlinkungen (Instagram, Facebook, TikTok).
 * Quelle der URLs: content.ts → site.social. Leere URLs werden ausgeblendet,
 * d. h. ein Icon erscheint erst, wenn dort ein echter Profil-Link hinterlegt ist.
 */
import { Instagram, Facebook } from "lucide-react";
import { site } from "@/content";

/** TikTok hat in lucide-react kein eigenes Icon – schlankes Inline-SVG. */
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.2 1.6 3.8 3.7 4v2.4c-1.3.1-2.6-.3-3.7-1v6.6c0 3.3-2.4 5.6-5.5 5.6A5.4 5.4 0 0 1 5.5 15a5.4 5.4 0 0 1 6.7-5.2v2.6a2.8 2.8 0 0 0-3 2.6 2.8 2.8 0 0 0 2.8 2.7c1.6 0 2.7-1.2 2.7-2.9V3h1.8Z" />
    </svg>
  );
}

const channels = [
  { key: "instagram", label: "Instagram", url: site.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", url: site.social.facebook, Icon: Facebook },
  { key: "tiktok", label: "TikTok", url: site.social.tiktok, Icon: TikTokIcon },
] as const;

interface SocialLinksProps {
  /** "light" für dunkle Hintergründe (Footer), "dark" für helle Hintergründe (Kontakt). */
  variant?: "light" | "dark";
}

export default function SocialLinks({ variant = "dark" }: SocialLinksProps) {
  const active = channels.filter((c) => c.url);
  if (active.length === 0) return null;

  const base =
    variant === "light"
      ? "bg-white/5 text-white/70 hover:text-black hover:bg-[#C9A84C]"
      : "bg-[#C9A84C]/15 text-[#C9A84C] hover:text-black hover:bg-[#C9A84C]";

  return (
    <div className="flex items-center gap-3">
      {active.map(({ key, label, url, Icon }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${base}`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
