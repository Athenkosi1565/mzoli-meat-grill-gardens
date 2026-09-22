import Image from "next/image";
import type { MenuItem } from "@/types";
import { formatPrice } from "@/lib/utils";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-charcoal-800 shadow-card">
      <div className="relative aspect-[4/3]">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        {item.placeholder ? <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-2 py-1 text-[10px] uppercase tracking-wider text-gold">Placeholder</span> : null}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl">{item.name}</h3>
          <p className="shrink-0 text-sm text-gold">{formatPrice(item.priceZar)}</p>
        </div>
        <p className="mt-2 text-sm text-cream/70">{item.description}</p>
      </div>
    </article>
  );
}
