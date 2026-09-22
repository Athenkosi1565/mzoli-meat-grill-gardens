import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendVenueEmail, venueInbox } from "@/lib/email";
import type { ContactInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactInput;
    const errors = validateContact(body);
    if (Object.keys(errors).length) return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    const text = [`New contact message`, ``, `Name: ${body.name}`, `Email: ${body.email}`, `Phone: ${body.phone || "Not given"}`, ``, body.message].join("\n");
    const email = await sendVenueEmail({ subject: `Website message — ${body.name}`, text, replyTo: body.email, name: body.name });
    const admin = getSupabaseAdmin();
    if (admin) {
      await admin.from("contact_messages").insert({ name: body.name, email: body.email, phone: body.phone ?? "", message: body.message });
    }
    if (!email.sent) return NextResponse.json({ error: "Could not deliver the email yet. Confirm FormSubmit in the Gmail inbox.", detail: email.error }, { status: 502 });
    return NextResponse.json({ ok: true, emailed: true, to: venueInbox(), message: `Message emailed to ${venueInbox()}.` });
  } catch {
    return NextResponse.json({ error: "Unable to process message" }, { status: 500 });
  }
}
