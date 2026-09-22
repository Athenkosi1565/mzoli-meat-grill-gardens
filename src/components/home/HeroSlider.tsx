"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { heroSlides } from "@/data/media";

const INTERVAL_MS = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      {heroSlides.map((slide, i) => (
        <Image key={slide.slot} src={slide.src} alt={slide.label} fill priority={i === 0} sizes="100vw" className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/25" />
      <div className="container-page relative z-10 pb-20 pt-32">
        <p className="section-kicker">Gardens · Cape Town</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">{site.heroHeadline}</h1>
        <p className="mt-4 text-lg tracking-[0.25em] text-gold">{site.tagline}</p>
        <p className="mt-4 text-sm text-cream/85">
          <a href={`tel:${site.phone}`} className="hover:text-gold">{site.phoneDisplay}</a>
          <span className="mx-2 text-cream/40">·</span>
          <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/menu" className="btn-primary">View menu</Link>
          <Link href="/book" className="btn-ghost">Book a table</Link>
        </div>
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero images">
          {heroSlides.map((slide, i) => (
            <button key={slide.slot} type="button" aria-label={slide.label} aria-selected={i === index} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-cream/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
