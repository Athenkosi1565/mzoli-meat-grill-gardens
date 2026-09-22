import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  path: "/gallery",
  description: "Food, fire, music and atmosphere at Mzoli Meat, Grill & Gardens.",
});

export default function GalleryPage() {
  return (
    <div className="container-page py-16">
      <p className="section-kicker">Look</p>
      <h1 className="mt-3 font-display text-5xl">Gallery</h1>
      <div className="mt-10">
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
