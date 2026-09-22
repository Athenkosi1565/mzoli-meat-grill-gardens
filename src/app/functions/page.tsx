import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Private Functions",
  path: "/functions",
  description: "Plan birthdays, corporate events and private functions at Mzoli Meat, Grill & Gardens.",
});

export default function FunctionsPage() {
  const inbox = site.functionsEmail || site.email;
  return (
    <div className="container-page grid gap-12 py-16 lg:grid-cols-2">
      <div>
        <p className="section-kicker">Gather</p>
        <h1 className="mt-3 font-display text-5xl">Private functions</h1>
        <p className="mt-4 text-cream/75">Birthdays, corporate tables, celebrations and group dinners.</p>
        <ul className="mt-6 space-y-2 text-sm text-cream/80">
          <li>Birthdays</li>
          <li>Corporate events</li>
          <li>Celebrations</li>
          <li>Group dinners</li>
          <li>Private functions</li>
        </ul>
        <div className="mt-8 rounded-2xl border border-cream/15 bg-charcoal-800 p-5 text-sm text-cream/75">
          <p className="font-semibold text-cream">Who receives this enquiry?</p>
          <p className="mt-2">
            Quotes are routed to <a className="text-gold underline" href={`mailto:${inbox}`}>{inbox}</a>.
          </p>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}
