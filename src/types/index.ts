export type MenuCategory = "breakfast" | "beef" | "lamb" | "chicken" | "steaks" | "braai" | "sides" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceZar: number | null;
  image: string;
  category: MenuCategory;
  available: boolean;
  featured: boolean;
  placeholder: boolean;
}

export type EventCategory = "music" | "braai" | "community" | "private" | "seasonal";

export interface VenueEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  image: string;
  category: EventCategory;
  location: string;
  bookingUrl?: string;
  featured: boolean;
  published: boolean;
  videoUrl?: string;
}

export type GalleryCategory = "food" | "restaurant" | "braai" | "events" | "music" | "people" | "atmosphere";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export interface ReservationInput {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  specialRequest?: string;
}

export type ReservationStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface FunctionEnquiryInput {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: number;
  preferredDate: string;
  budget?: string;
  additionalInfo?: string;
}

export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
