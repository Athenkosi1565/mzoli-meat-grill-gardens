"use client";
import { FormEvent, useState } from "react";
import type { ContactInput } from "@/types";
import { validateContact } from "@/lib/validators";
export function ContactForm() {
  const [form, setForm] = useState<ContactInput>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validateContact(form);
    if (Object.keys(next).length) { setStatus("error"); setMessage(Object.values(next)[0]); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setStatus("success"); setMessage(data.message); setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) { setStatus("error"); setMessage(err instanceof Error ? err.message : "Something went wrong"); }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input className="input" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <textarea className="input min-h-32" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <button type="submit" className="btn-primary" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send message"}</button>
      {message ? <p className="text-sm text-gold">{message}</p> : null}
    </form>
  );
}
