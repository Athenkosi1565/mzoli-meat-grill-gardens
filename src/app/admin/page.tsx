import { pageMetadata } from "@/lib/seo";
import { isSupabaseConfigured } from "@/lib/supabase";

export const metadata = pageMetadata({ title: "Admin", path: "/admin" });

export default function AdminPage() {
  const connected = isSupabaseConfigured();
  return (
    <div className="container-page max-w-3xl py-16">
      <p className="section-kicker">Back of house</p>
      <h1 className="mt-3 font-display text-5xl">Admin dashboard</h1>
      <p className="mt-4 text-cream/70">Architecture shell. Connect Supabase Auth before public use.</p>
      <p className="mt-4 text-sm text-gold">Supabase {connected ? "connected." : "not configured — local data."}</p>
    </div>
  );
}
