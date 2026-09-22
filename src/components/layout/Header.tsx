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
  { href: "/functions", label: "Functions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-cream">
          <Image src={site.logo} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" priority />
          <span className="whitespace-nowrap font-display text-xl leading-none tracking-wide">Mzoli&apos;s</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/80 hover:text-gold">
              {l.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary !px-5 !py-2 text-[11px]">Book a table</Link>
        </nav>

        <button type="button" className="rounded-md p-2 text-cream lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn("lg:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-3 px-4 pb-6" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wider text-cream">{l.label}</Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="btn-primary w-fit">Book a table</Link>
        </nav>
      </div>
    </header>
  );
}
