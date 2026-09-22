"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import type { GalleryCategory, GalleryImage } from "@/types";
const cats: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" }, { id: "food", label: "Food" }, { id: "restaurant", label: "Restaurant" }, { id: "braai", label: "Braai" }, { id: "events", label: "Events" }, { id: "music", label: "Music" }, { id: "people", label: "People" }, { id: "atmosphere", label: "Atmosphere" },
];
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [cat, setCat] = useState<(typeof cats)[number]["id"]>("all");
  const [active, setActive] = useState<GalleryImage | null>(null);
  const filtered = useMemo(() => (cat === "all" ? images : images.filter((i) => i.category === cat)), [cat, images]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">{cats.map((c) => <button key={c.id} type="button" onClick={() => setCat(c.id)} className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider ${cat === c.id ? "bg-ember text-cream" : "bg-charcoal-800 text-cream/70"}`}>{c.label}</button>)}</div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{filtered.map((img) => <button key={img.id} type="button" className="mb-4 block w-full overflow-hidden rounded-xl" onClick={() => setActive(img)}><Image src={img.src} alt={img.alt} width={800} height={600} loading="lazy" className="h-auto w-full object-cover" /></button>)}</div>
      {active ? <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" role="dialog" onClick={() => setActive(null)}><Image src={active.src} alt={active.alt} width={1400} height={900} className="max-h-[90vh] w-auto rounded-lg object-contain" /></div> : null}
    </div>
  );
}
