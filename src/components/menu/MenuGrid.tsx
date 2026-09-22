"use client";
import { useMemo, useState } from "react";
import type { MenuCategory, MenuItem } from "@/types";
import { menuCategories } from "@/data/menu";
import { MenuItemCard } from "./MenuItemCard";

export function MenuGrid({ items }: { items: MenuItem[] }) {
  const [cat, setCat] = useState<MenuCategory | "all">("all");
  const filtered = useMemo(() => (cat === "all" ? items : items.filter((i) => i.category === cat)), [cat, items]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button type="button" onClick={() => setCat("all")} className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider ${cat === "all" ? "bg-ember text-cream" : "bg-charcoal-800 text-cream/70"}`}>All</button>
        {menuCategories.map((c) => (
          <button key={c.id} type="button" onClick={() => setCat(c.id)} className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider ${cat === c.id ? "bg-ember text-cream" : "bg-charcoal-800 text-cream/70"}`}>{c.label}</button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <MenuItemCard key={item.id} item={item} />)}</div>
    </div>
  );
}
