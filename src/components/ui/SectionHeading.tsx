export function SectionHeading({ kicker, title, body }: { kicker?: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      <h2 className="mt-3 font-display text-3xl text-cream sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-cream/75">{body}</p> : null}
    </div>
  );
}
