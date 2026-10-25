import heroImg from "@/assets/img/hero.jpg";
import aboutImg from "@/assets/img/about.jpg";
import lookbookImg from "@/assets/img/owner-lookbook.jpg";
import whiteKaftanImg from "@/assets/img/gallery-white-kaftan.jpg";
import blackKaftanImg from "@/assets/img/gallery-black-kaftan.jpg";
import emeraldImg from "@/assets/img/gallery-emerald.jpg";
import navySenatorImg from "@/assets/img/gallery-navy-senator.jpg";
import creamJallabiyaImg from "@/assets/img/gallery-cream-jallabiya.jpg";
import burgundyImg from "@/assets/img/gallery-burgundy.jpg";
import embroideryImg from "@/assets/img/gallery-embroidery.jpg";
import fullbodyImg from "@/assets/img/gallery-fullbody.jpg";
import everydayImg from "@/assets/img/31985757.jpg";

/**
 * Central image registry.
 * Replace any file in `src/assets/img/` with your own photograph of the
 * same name and the whole site updates automatically.
 */
export const images: Record<string, string> = {
  hero: heroImg,
  about: aboutImg,
  lookbook: lookbookImg,
  "gallery-white-kaftan": whiteKaftanImg,
  "gallery-black-kaftan": blackKaftanImg,
  "gallery-emerald": emeraldImg,
  "gallery-navy-senator": navySenatorImg,
  "gallery-cream-jallabiya": creamJallabiyaImg,
  "gallery-burgundy": burgundyImg,
  "gallery-embroidery": embroideryImg,
  "gallery-fullbody": fullbodyImg,
  everyday: everydayImg,
};

export function imageFor(key: string): string {
  return images[key] ?? images.hero;
}
