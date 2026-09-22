import Image from "next/image";
import Link from "next/link";
import type { VenueEvent } from "@/types";
import { formatDate } from "@/lib/utils";

export function EventCard({ event }: { event: VenueEvent }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-charcoal-800 shadow-card">
      <div className="relative aspect-[16/10]"><Image src={event.image} alt={event.title} fill className="object-cover" sizes="50vw" /></div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-gold">{formatDate(event.date)} · {event.startTime}–{event.endTime}</p>
        <h3 className="mt-2 font-display text-2xl">{event.title}</h3>
        <p className="mt-2 text-sm text-cream/70">{event.description}</p>
        <Link href={event.bookingUrl || "/book"} className="btn-primary mt-4 !py-2 text-xs">Book</Link>
      </div>
    </article>
  );
}
