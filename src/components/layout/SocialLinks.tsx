import { site } from "@/data/site";

const items = [
  { key: "facebook" as const, label: "Facebook" },
  { key: "instagram" as const, label: "Instagram" },
  { key: "tiktok" as const, label: "TikTok" },
  { key: "youtube" as const, label: "YouTube" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  const linked = items.filter((item) => site.social[item.key]);
  return (
    <ul className={`flex flex-wrap gap-4 text-xs uppercase tracking-wider ${className}`}>
      {linked.map((item) => (
        <li key={item.key}><a href={site.social[item.key]} target="_blank" rel="noreferrer" className="hover:text-gold">{item.label}</a></li>
      ))}
      {site.whatsapp ? (
        <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a></li>
      ) : null}
    </ul>
  );
}
