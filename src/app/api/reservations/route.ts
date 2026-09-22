import { NextResponse } from "next/server";
import { validateReservation } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendVenueEmail, venueInbox } from "@/lib/email";
import type { ReservationInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationInput;
    const errors = validateReservation(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }
    const text = [`New table request`, ``, `Name: ${body.name}`, `Email: ${body.email}`, `Phone: ${body.phone}`, `Guests: ${body.guests}`, `Date: ${body.date}`, `Time: ${body.time}`, `Special request: ${body.specialRequest || "None"}`].join("\n");
    const email = await sendVenueEmail({ subject: `Table request — ${body.name} — ${body.date} ${body.time}`, text, replyTo: body.email, name: body.name });
    const admin = getSupabaseAdmin();
    if (admin) {
      await admin.from("reservations").insert({ name: body.name, email: body.email, phone: body.phone, guests: body.guests, date: body.date, time: body.time, special_request: body.specialRequest ?? "", status: "pending" });
    }
    if (!email.sent) return NextResponse.json({ error: "Could not deliver the email yet. Confirm FormSubmit in Upliftingstar@gmail.com.", detail: email.error }, { status: 502 });
    return NextResponse.json({ ok: true, emailed: true, to: venueInbox(), message: `Request emailed to ${venueInbox()}. Not a confirmed table until the venue replies.` });
  } catch {
    return NextResponse.json({ error: "Unable to process reservation" }, { status: 500 });
  }
}
