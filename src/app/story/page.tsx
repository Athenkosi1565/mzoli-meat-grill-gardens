import { timeline } from "@/data/story";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Story",
  path: "/story",
  description: "The history of Mzoli’s — from Gugulethu in 2003 to Gardens in 2026.",
});

export default function StoryPage() {
  return (
    <div className="container-page py-16">
      <p className="section-kicker">Legacy</p>
      <h1 className="mt-3 font-display text-5xl">Our story</h1>
      <p className="mt-6 max-w-3xl text-lg text-cream/75">
        Mzoli’s began as a Gugulethu butchery and shisanyama founded by Edwin “Mzoli” Ngcawuzele.
        The original venue closed in 2021. In 2026 the family opened a new chapter in Gardens.
      </p>
      <ol className="mt-16 space-y-10 border-l border-gold/40 pl-8">
        {timeline.map((item) => (
          <li key={item.year} className="relative">
            <span className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-gold" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{item.year}</p>
            <h2 className="mt-2 font-display text-3xl">{item.title}</h2>
            <p className="mt-3 max-w-2xl text-cream/75">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
