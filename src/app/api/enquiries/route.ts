import { NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendVenueEmail, venueInbox } from "@/lib/email";
import type { FunctionEnquiryInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FunctionEnquiryInput;
    const errors = validateEnquiry(body);
    if (Object.keys(errors).length) return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    const text = [`New private function enquiry`, ``, `Name: ${body.name}`, `Email: ${body.email}`, `Phone: ${body.phone}`, `Event type: ${body.eventType}`, `Guests: ${body.guests}`, `Preferred date: ${body.preferredDate}`, `Budget: ${body.budget || "Not given"}`, `Additional info: ${body.additionalInfo || "None"}`].join("\n");
    const email = await sendVenueEmail({ subject: `Function enquiry — ${body.eventType} — ${body.name}`, text, replyTo: body.email, name: body.name });
    const admin = getSupabaseAdmin();
    if (admin) {
      await admin.from("function_enquiries").insert({ name: body.name, email: body.email, phone: body.phone, event_type: body.eventType, guests: body.guests, preferred_date: body.preferredDate, budget: body.budget ?? "", additional_info: body.additionalInfo ?? "", status: "new" });
    }
    if (!email.sent) return NextResponse.json({ error: "Could not deliver the email yet. Confirm FormSubmit in the Gmail inbox.", detail: email.error }, { status: 502 });
    return NextResponse.json({ ok: true, emailed: true, to: venueInbox(), message: `Enquiry emailed to ${venueInbox()}.` });
  } catch {
    return NextResponse.json({ error: "Unable to process enquiry" }, { status: 500 });
  }
}
