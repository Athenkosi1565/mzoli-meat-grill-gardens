import { site } from "@/data/site";

export function venueInbox() {
  return process.env.NOTIFY_EMAIL || process.env.BOOKINGS_EMAIL || site.bookingsEmail || site.email;
}

export async function sendVenueEmail(opts: { subject: string; text: string; replyTo?: string; name?: string }) {
  const to = venueInbox();
  if (!to) return { sent: false, error: "No venue email configured" };

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "Mzoli's Website <onboarding@resend.dev>",
        to: [to],
        subject: opts.subject,
        text: opts.text,
        reply_to: opts.replyTo,
      }),
    });
    if (!res.ok) return { sent: false, error: await res.text() };
    return { sent: true };
  }

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: opts.subject,
      _template: "box",
      _captcha: "false",
      name: opts.name || "Website guest",
      email: opts.replyTo || to,
      message: opts.text,
    }),
  });
  if (!res.ok) return { sent: false, error: await res.text() };
  return { sent: true };
}
