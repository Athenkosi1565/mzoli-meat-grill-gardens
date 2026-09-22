import { NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { FunctionEnquiryInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FunctionEnquiryInput;
    const errors = validateEnquiry(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin.from("function_enquiries").insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        event_type: body.eventType,
        guests: body.guests,
        preferred_date: body.preferredDate,
        budget: body.budget ?? "",
        additional_info: body.additionalInfo ?? "",
        status: "new",
      });
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ ok: true, stored: true, message: "Enquiry received. A coordinator will follow up with a quote." });
    }
    return NextResponse.json({ ok: true, stored: false, message: "Enquiry accepted in demo mode. Connect Supabase to store function_enquiries." });
  } catch {
    return NextResponse.json({ error: "Unable to process enquiry" }, { status: 500 });
  }
}
