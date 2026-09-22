import { MenuGrid } from "@/components/menu/MenuGrid";
import { menuItems } from "@/data/menu";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Menu",
  path: "/menu",
  description: "Placeholder menu for Mzoli Meat, Grill & Gardens.",
});

export default function MenuPage() {
  return (
    <div className="container-page py-16">
      <p className="section-kicker">Eat</p>
      <h1 className="mt-3 font-display text-5xl">Menu</h1>
      <p className="mt-4 max-w-2xl text-cream/70">
        Official dishes and prices have not been published here. Everything below is structured placeholder data.
      </p>
      <div className="mt-10">
        <MenuGrid items={menuItems} />
      </div>
    </div>
  );
}
