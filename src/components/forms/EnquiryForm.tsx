"use client";
import { FormEvent, useState } from "react";
import type { FunctionEnquiryInput } from "@/types";
import { validateEnquiry } from "@/lib/validators";
const empty: FunctionEnquiryInput = { name: "", email: "", phone: "", eventType: "Birthday", guests: 20, preferredDate: "", budget: "", additionalInfo: "" };
export function EnquiryForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validateEnquiry(form);
    if (Object.keys(next).length) { setMessage(Object.values(next)[0]); setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setStatus("success"); setMessage(data.message); setForm(empty);
    } catch (err) { setStatus("error"); setMessage(err instanceof Error ? err.message : "Something went wrong"); }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className="input" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <select className="input" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}><option>Birthday</option><option>Corporate</option><option>Celebration</option><option>Group dinner</option><option>Private function</option></select>
      <input className="input" type="number" min={1} value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} />
      <input className="input" type="date" value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} />
      <textarea className="input min-h-28" placeholder="Additional information" value={form.additionalInfo} onChange={(e) => setForm({ ...form, additionalInfo: e.target.value })} />
      <button type="submit" className="btn-primary" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Request a function quote"}</button>
      {message ? <p className="text-sm text-gold">{message}</p> : null}
    </form>
  );
}
