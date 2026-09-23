export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" role="img">
      <defs>
        <linearGradient id="mz-ring" x1="8" y1="4" x2="42" y2="44">
          <stop offset="0%" stopColor="#E8C36A" />
          <stop offset="55%" stopColor="#C45C26" />
          <stop offset="100%" stopColor="#8B2E12" />
        </linearGradient>
        <linearGradient id="mz-flame" x1="24" y1="8" x2="24" y2="28">
          <stop offset="0%" stopColor="#F4EDE3" />
          <stop offset="100%" stopColor="#E8C36A" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#1A1410" stroke="url(#mz-ring)" strokeWidth="2.5" />
      <path d="M24 11c2.2 3.2 3.4 5.4 3.4 8.1 0 2.1-1.4 3.6-3.4 3.6s-3.4-1.5-3.4-3.6C20.6 16.4 21.8 14.2 24 11Z" fill="url(#mz-flame)" />
      <path d="M14.5 36V20.2h3.2l4.1 9.4 2.2-5.2V20.2H27v15.8h-3.1l-.1-9.7-3.7 9.7h-2.2l-3.3-9.7V36H14.5Zm19.2 0-3.6-15.8h3.4L35.4 30l1.9-9.8h3.3L36.8 36h-3.1Z" fill="#F4EDE3" />
    </svg>
  );
}
