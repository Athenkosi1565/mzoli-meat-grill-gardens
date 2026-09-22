import { NextResponse } from "next/server";
import { validateReservation } from "@/lib/validators";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { ReservationInput } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationInput;
    const errors = validateReservation(body);
    if (Object.keys(errors).length) {
      return NextResponse.json({ error: "Validation failed", errors }, { status: 400 });
    }
    const admin = getSupabaseAdmin();
    if (admin) {
      const { error } = await admin.from("reservations").insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        guests: body.guests,
        date: body.date,
        time: body.time,
        special_request: body.specialRequest ?? "",
        status: "pending",
      });
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({
        ok: true,
        stored: true,
        message: "Request received. We will confirm by email or phone — this is not a confirmed booking yet.",
      });
    }
    return NextResponse.json({
      ok: true,
      stored: false,
      message: "Request accepted locally. Connect Supabase to store bookings. This is not a confirmed table.",
    });
  } catch {
    return NextResponse.json({ error: "Unable to process reservation" }, { status: 500 });
  }
}
