"use client";
import { FormEvent, useState } from "react";
import type { ReservationInput } from "@/types";
import { validateReservation } from "@/lib/validators";
const empty: ReservationInput = { name: "", email: "", phone: "", guests: 2, date: "", time: "", specialRequest: "" };
export function ReservationForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validateReservation(form);
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/reservations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setStatus("success"); setMessage(data.message); setForm(empty);
    } catch (err) { setStatus("error"); setMessage(err instanceof Error ? err.message : "Something went wrong"); }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input className="input" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      {errors.name ? <p className="text-xs text-ember-400">{errors.name}</p> : null}
      <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input className="input" type="number" min={1} max={40} value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} />
      <input className="input" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input className="input" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <textarea className="input min-h-28" placeholder="Special request" value={form.specialRequest} onChange={(e) => setForm({ ...form, specialRequest: e.target.value })} />
      <button type="submit" className="btn-primary" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Request a table"}</button>
      {status === "success" ? <p className="text-sm text-gold">{message}</p> : null}
      {status === "error" ? <p className="text-sm text-ember-400">{message}</p> : null}
    </form>
  );
}
