import { menuItems } from "@/data/menu";
import { events } from "@/data/events";
import { galleryImages } from "@/data/gallery";
import { getSupabaseBrowser } from "@/lib/supabase";
import type { GalleryImage, MenuItem, VenueEvent } from "@/types";

export async function loadMenu(): Promise<MenuItem[]> {
  const sb = getSupabaseBrowser();
  if (!sb) return menuItems;
  const { data, error } = await sb.from("menu_items").select("*");
  if (error || !data) return menuItems;
  return data as MenuItem[];
}

export async function loadEvents(): Promise<VenueEvent[]> {
  const sb = getSupabaseBrowser();
  if (!sb) return events;
  const { data, error } = await sb.from("events").select("*").eq("published", true);
  if (error || !data) return events;
  return data as VenueEvent[];
}

export async function loadGallery(): Promise<GalleryImage[]> {
  const sb = getSupabaseBrowser();
  if (!sb) return galleryImages;
  const { data, error } = await sb.from("gallery_images").select("*");
  if (error || !data) return galleryImages;
  return data as GalleryImage[];
}
