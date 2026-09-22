"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/functions", label: "Private Functions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-cream">
          <Image src={site.logo} alt={`${site.name} logo`} width={40} height={40} className="h-10 w-10 rounded-full object-cover" priority />
          <span className="font-display text-lg tracking-wide">
            {site.shortName}
            <span className="ml-2 hidden text-xs uppercase tracking-[0.2em] text-gold sm:inline">Meat · Grill · Gardens</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs font-semibold uppercase tracking-wider text-cream/80 hover:text-gold">{l.label}</Link>
          ))}
          <a href={`mailto:${site.email}`} className="hidden text-xs uppercase tracking-wider text-cream/70 hover:text-gold xl:inline">{site.email}</a>
          <Link href="/book" className="btn-primary !px-4 !py-2 text-xs">Book a table</Link>
        </nav>
        <button type="button" className="rounded-md p-2 text-cream lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <nav className="container-page flex flex-col gap-3 pb-6" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wider text-cream">{l.label}</Link>
          ))}
          <a href={`mailto:${site.email}`} className="text-sm text-gold">{site.email}</a>
          <Link href="/book" onClick={() => setOpen(false)} className="btn-primary w-fit">Book a table</Link>
        </nav>
      </div>
    </header>
  );
}
