import Link from "next/link";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function MobileDock() {
  const callHref = site.phone ? `tel:${site.phone}` : "/contact";
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-cream/15 bg-charcoal/95 backdrop-blur lg:hidden" aria-label="Quick actions">
      <a href={callHref} className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-wider text-cream"><Phone size={18} />Call</a>
      <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-wider text-cream"><MapPin size={18} />Directions</a>
      <Link href="/book" className="flex flex-col items-center gap-1 bg-ember py-3 text-[10px] uppercase tracking-wider text-cream"><CalendarDays size={18} />Book</Link>
    </nav>
  );
}
