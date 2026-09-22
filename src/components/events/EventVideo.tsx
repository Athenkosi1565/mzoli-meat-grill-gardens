import { site } from "@/data/site";
export function EventVideo({ title = "Experience Mzoli's", facebookUrl = site.facebookVideo }: { title?: string; facebookUrl?: string }) {
  return (
    <section className="container-page py-16">
      <h2 className="mb-6 font-display text-3xl">{title}</h2>
      <div className="overflow-hidden rounded-2xl bg-charcoal-800 p-8">
        <p className="text-cream/70">Watch the official venue video on Facebook.</p>
        <a href={facebookUrl} target="_blank" rel="noreferrer" className="btn-primary mt-5">Play video</a>
      </div>
    </section>
  );
}
