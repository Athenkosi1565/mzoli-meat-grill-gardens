import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { ContactInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactInput;
    const errors = validateContact(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin.from("contact_messages").insert({
        name: body.name,
        email: body.email,
        phone: body.phone ?? "",
        message: body.message,
      });
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ ok: true, stored: true, message: "Message received." });
    }
    return NextResponse.json({ ok: true, stored: false, message: "Message accepted in demo mode. Connect Supabase to store contact_messages." });
  } catch {
    return NextResponse.json({ error: "Unable to process message" }, { status: 500 });
  }
}
