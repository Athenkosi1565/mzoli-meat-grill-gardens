import type { Metadata } from "next";
import { site } from "@/data/site";
import { siteUrl } from "./utils";

export function pageMetadata(opts: { title: string; description?: string; path: string }): Metadata {
  const title = `${opts.title} | ${site.name}`;
  const description = opts.description ?? site.description;
  const url = siteUrl(opts.path);
  return {
    title,
    description,
    keywords: [...site.keywords],
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "en_ZA", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    description: site.description,
    url: siteUrl(),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: "Western Cape",
      postalCode: site.address.postalCode,
      addressCountry: "ZA",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    telephone: site.phone,
    email: site.email,
    image: siteUrl(site.logo),
    sameAs: Object.values(site.social).filter(Boolean),
    servesCuisine: ["South African", "Braai", "Shisanyama", "Grill"],
    priceRange: "$$",
    openingHours: site.openingHoursSpec,
  };
}
