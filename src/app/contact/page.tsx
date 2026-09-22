import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Contact", path: "/contact" });
export default function ContactPage() {
  return (
    <div className="container-page grid gap-12 py-16 lg:grid-cols-2">
      <div>
        <p className="section-kicker">Visit</p>
        <h1 className="mt-3 font-display text-5xl">Contact</h1>
        <address className="mt-6 not-italic text-cream/80">{site.address.full}</address>
        <ul className="mt-6 space-y-2 text-sm">
          <li>Phone: <a className="text-gold" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
          <li>WhatsApp: <a className="text-gold" href={`https://wa.me/${site.whatsapp}`}>{site.whatsappDisplay}</a></li>
          <li>Email: <a className="text-gold" href={`mailto:${site.email}`}>{site.email}</a></li>
        </ul>
        <SocialLinks className="mt-4" />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`tel:${site.phone}`} className="btn-primary">Call now</a>
          <Link href="/book" className="btn-ghost">Book a table</Link>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
