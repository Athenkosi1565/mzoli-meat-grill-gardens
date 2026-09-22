import type { ContactInput, FunctionEnquiryInput, ReservationInput } from "@/types";

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateReservation(input: ReservationInput) {
  const errors: Record<string, string> = {};
  if (!input.name?.trim()) errors.name = "Name is required";
  if (!isEmail(input.email)) errors.email = "A valid email is required";
  if (!input.phone?.trim() || input.phone.trim().length < 8) errors.phone = "A valid phone number is required";
  if (!input.guests || input.guests < 1 || input.guests > 40) errors.guests = "Guests must be between 1 and 40";
  if (!input.date) errors.date = "Date is required";
  if (!input.time) errors.time = "Time is required";
  return errors;
}

export function validateEnquiry(input: FunctionEnquiryInput) {
  const errors: Record<string, string> = {};
  if (!input.name?.trim()) errors.name = "Name is required";
  if (!isEmail(input.email)) errors.email = "A valid email is required";
  if (!input.phone?.trim()) errors.phone = "Phone is required";
  if (!input.eventType?.trim()) errors.eventType = "Event type is required";
  if (!input.guests || input.guests < 1) errors.guests = "Guest number is required";
  if (!input.preferredDate) errors.preferredDate = "Preferred date is required";
  return errors;
}

export function validateContact(input: ContactInput) {
  const errors: Record<string, string> = {};
  if (!input.name?.trim()) errors.name = "Name is required";
  if (!isEmail(input.email)) errors.email = "A valid email is required";
  if (!input.message?.trim() || input.message.trim().length < 10) errors.message = "Please write a short message";
  return errors;
}
