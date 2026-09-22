import type { MenuCategory, MenuItem } from "@/types";
export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "breakfast", label: "Breakfast" }, { id: "beef", label: "Beef" }, { id: "lamb", label: "Lamb" }, { id: "chicken", label: "Chicken" }, { id: "steaks", label: "Steaks" }, { id: "braai", label: "Braai" }, { id: "sides", label: "Sides" }, { id: "drinks", label: "Drinks" },
];
const img = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80";
export const menuItems: MenuItem[] = [
  { id: "bf-01", name: "Braai Breakfast Platter", description: "Placeholder dish.", priceZar: null, image: img, category: "breakfast", available: true, featured: true, placeholder: true },
  { id: "beef-01", name: "Beef Short Rib", description: "Placeholder dish.", priceZar: null, image: img, category: "beef", available: true, featured: true, placeholder: true },
  { id: "lamb-01", name: "Lamb Chops", description: "Placeholder dish.", priceZar: null, image: img, category: "lamb", available: true, featured: true, placeholder: true },
  { id: "ch-01", name: "Flame Chicken", description: "Placeholder dish.", priceZar: null, image: img, category: "chicken", available: true, featured: true, placeholder: true },
  { id: "st-01", name: "Rump Steak", description: "Placeholder dish.", priceZar: null, image: img, category: "steaks", available: true, featured: true, placeholder: true },
  { id: "br-01", name: "Mzoli Mixed Grill", description: "Placeholder dish.", priceZar: null, image: img, category: "braai", available: true, featured: true, placeholder: true },
  { id: "sd-01", name: "Pap & Chakalaka", description: "Placeholder dish.", priceZar: null, image: img, category: "sides", available: true, featured: true, placeholder: true },
  { id: "dr-01", name: "House Coolers", description: "Placeholder item.", priceZar: null, image: img, category: "drinks", available: true, featured: false, placeholder: true },
];
