import Link from "next/link";
import { site } from "@/data/site";
import { BrandMark } from "@/components/layout/BrandMark";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal-800 pb-24 pt-14 lg:pb-10">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-12 w-12" />
            <p className="font-display text-2xl leading-tight">{site.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-cream/70">{site.tagline}</p>
          <p className="mt-3 text-sm text-cream/70">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="section-kicker">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            {site.address.street}<br />
            {site.address.suburb}, {site.address.city}<br />
            {site.address.postalCode}, {site.address.country}
          </p>
        </div>
        <div>
          <p className="section-kicker">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            {site.hours.map((h) => (
              <li key={h.days}>{h.days}: {h.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-wider text-cream/50">
        <Link href="/menu">Menu</Link>
        <Link href="/book">Reservations</Link>
        <Link href="/functions">Private functions</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="container-page mt-8">
        <p className="section-kicker">Follow</p>
        <SocialLinks className="mt-3" />
      </div>
    </footer>
  );
}
