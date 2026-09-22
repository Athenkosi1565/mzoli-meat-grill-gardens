import { EventCard } from "@/components/events/EventCard";
import { EventVideo } from "@/components/events/EventVideo";
import { events } from "@/data/events";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Events",
  path: "/events",
  description: "Upcoming and past events at Mzoli Meat, Grill & Gardens.",
});

export default function EventsPage() {
  const today = "2026-09-18";
  const upcoming = events.filter((e) => e.published && e.date >= today);
  const past = events.filter((e) => e.published && e.date < today);
  return (
    <div className="py-16">
      <div className="container-page">
        <p className="section-kicker">Diary</p>
        <h1 className="mt-3 font-display text-5xl">Events</h1>
        <h2 className="mt-12 font-display text-3xl">Upcoming</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <h2 className="mt-16 font-display text-3xl">Past</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {past.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <EventVideo title="Experience Mzoli's" />
    </div>
  );
}
