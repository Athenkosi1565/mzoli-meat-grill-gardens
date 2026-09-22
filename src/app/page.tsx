import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { menuItems } from "@/data/menu";
import { events } from "@/data/events";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { EventCard } from "@/components/events/EventCard";
import { EventVideo } from "@/components/events/EventVideo";
import { HeroSlider } from "@/components/home/HeroSlider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Home", path: "/", description: site.description });

const steps = [
  { title: "FOOD", body: "Cuts chosen for the fire." },
  { title: "FIRE", body: "Shisanyama at the centre." },
  { title: "MUSIC", body: "House, kwaito and a long afternoon." },
  { title: "COMMUNITY", body: "Tables that fill with a crowd." },
];

export default function HomePage() {
  const featuredFood = menuItems.filter((i) => i.featured).slice(0, 6);
  const upcoming = events.filter((e) => e.published && e.date >= "2026-09-18").slice(0, 3);
  return (
    <>
      <HeroSlider />
      <section className="container-page py-20">
        <SectionHeading kicker="Welcome" title="Welcome to Mzoli Meat, Grill & Gardens" body="The Gugulethu-born shisanyama is in the city bowl at 15 Barnet Street, Gardens." />
      </section>
      <section className="container-page pb-20">
        <SectionHeading kicker="From the fire" title="Signature food" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featuredFood.map((item) => <MenuItemCard key={item.id} item={item} />)}</div>
        <div className="mt-8 text-center"><Link href="/menu" className="btn-ghost">Full menu</Link></div>
      </section>
      <section className="bg-charcoal-800 py-20">
        <div className="container-page">
          <SectionHeading kicker="The Mzoli experience" title="Food → Fire → Music → Community" />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map((s, i) => (<li key={s.title} className="rounded-2xl border border-cream/10 p-6"><p className="text-gold">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-3 font-display text-2xl">{s.title}</h3><p className="mt-2 text-sm text-cream/70">{s.body}</p></li>))}</ol>
        </div>
      </section>
      <section className="container-page pb-20">
        <SectionHeading kicker="Diary" title="Upcoming events" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">{upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div>
      </section>
      <EventVideo title="Experience Mzoli's" />
      <section className="container-page py-20">
        <SectionHeading kicker="Look" title="Gallery" />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{galleryImages.slice(0, 8).map((img) => (<div key={img.id} className="relative aspect-square overflow-hidden rounded-xl"><Image src={img.src} alt={img.alt} fill className="object-cover" sizes="25vw" /></div>))}</div>
      </section>
      <section className="border-t border-cream/10 py-20 text-center">
        <h2 className="font-display text-4xl">Come experience Mzoli&apos;s</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="btn-primary">Book a table</Link>
          <a href={site.mapsUrl} className="btn-ghost" target="_blank" rel="noreferrer">Get directions</a>
        </div>
      </section>
    </>
  );
}
