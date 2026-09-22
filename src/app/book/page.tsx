import { ReservationForm } from "@/components/forms/ReservationForm";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Book a table", path: "/book" });
export default function BookPage() {
  const inbox = site.bookingsEmail || site.email;
  return (
    <div className="container-page max-w-3xl py-16">
      <p className="section-kicker">Reserve</p>
      <h1 className="mt-3 font-display text-5xl">Book a table</h1>
      <p className="mt-4 text-cream/70">Requests go to {inbox}. A table is confirmed only when the venue replies.</p>
      <div className="mt-10"><ReservationForm /></div>
    </div>
  );
}
