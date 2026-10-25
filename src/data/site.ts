/**
 * Musa Fashion Design — site content.
 * ------------------------------------------------------------------
 * EDIT THIS FILE to update business details, gallery items and copy.
 * Image files live in `src/assets/img/` and are imported in `src/data/images.ts`.
 */

export const business = {
  name: "Musa Fashion Design",
  abbr: "MFD",
  slogan: "Wear Your Confidence.",
  phoneDisplay: "07040773767",
  phoneTel: "+2347040773767",
  whatsappDisplay: "07040773767",
  whatsappNumber: "2347040773767",
  email: "musamuhammad3767@gmail.com",
  addressLine1: "Madalisa Gwadangaji Plaza, Opposite Mama Ruke",
  addressLine2: "Birnin Kebbi, Kebbi State, Nigeria",
  city: "Birnin Kebbi",
  state: "Kebbi State",
  country: "Nigeria",
  copyright: "© 2026 Musa Fashion Design. All Rights Reserved.",
} as const;

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultOrderMessage =
  "Hello Musa Fashion Design. I found your website and would like to order a traditional outfit. Please show me your available designs and explain the ordering process.";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceKey =
  | "kaftan"
  | "jallabiya"
  | "custom"
  | "senator"
  | "ceremonial"
  | "matching";

export interface Service {
  id: ServiceKey;
  title: string;
  description: string;
  image: string;
  /** Message prefilled in WhatsApp when the customer taps "Discuss this style". */
  message: string;
}

export const services: Service[] = [
  {
    id: "kaftan",
    title: "Luxury Hausa Kaftans",
    description:
      "Beautiful traditional kaftans with refined embroidery, excellent fit, and premium finishing.",
    image: "gallery-black-kaftan",
    message:
      "Hello Musa Fashion Design. I am interested in a luxury Hausa kaftan. Please share your available designs, fabrics and pricing.",
  },
  {
    id: "jallabiya",
    title: "Premium Jallabiyas",
    description:
      "Comfortable and elegant jallabiyas designed for everyday wear and special occasions.",
    image: "gallery-cream-jallabiya",
    message:
      "Hello Musa Fashion Design. I am interested in a premium jallabiya. Please show me the designs, fabrics and pricing available.",
  },
  {
    id: "custom",
    title: "Custom Tailoring",
    description:
      "Custom-made clothing based on each customer's preferred design, fabric, and measurements.",
    image: "gallery-fullbody",
    message:
      "Hello Musa Fashion Design. I would like to discuss a custom-made outfit. Can we talk about my measurements, fabric and design preferences?",
  },
  {
    id: "senator",
    title: "Senator Outfits",
    description:
      "Modern traditional outfits combining elegance, comfort, and excellent tailoring.",
    image: "gallery-navy-senator",
    message:
      "Hello Musa Fashion Design. I am interested in a modern senator outfit. Please share your designs and how ordering works.",
  },
  {
    id: "ceremonial",
    title: "Wedding & Ceremonial Wear",
    description:
      "Distinctive outfits for weddings, Eid celebrations, naming ceremonies, and other special occasions.",
    image: "gallery-burgundy",
    message:
      "Hello Musa Fashion Design. I need an outfit for a wedding or ceremony. Please share designs suitable for the occasion and the ordering process.",
  },
  {
    id: "matching",
    title: "Matching Traditional Outfits",
    description:
      "Coordinated shirts, trousers, caps, and other traditional fashion pieces.",
    image: "gallery-emerald",
    message:
      "Hello Musa Fashion Design. I am interested in a matching traditional outfit with cap and trousers. Please share available sets.",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  /** Tailwind aspect class for editorial variety. */
  aspect: string;
  /** Position of the focal point inside the frame. */
  position?: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "white-kaftan",
    title: "Ivory Embroidered Kaftan",
    caption: "Pure white kaftan with fine tonal embroidery and a matching Hausa cap.",
    image: "gallery-white-kaftan",
    aspect: "aspect-[3/4]",
  },
  {
    id: "black-kaftan",
    title: "Signature Black Kaftan",
    caption: "Deep black kaftan finished with subtle silver threadwork.",
    image: "gallery-black-kaftan",
    aspect: "aspect-[4/5]"
  },
  {
    id: "emerald",
    title: "Emerald Two-Piece",
    caption: "Emerald green kaftan and trousers, cut clean and worn with a matching cap.",
    image: "gallery-emerald",
    aspect: "aspect-[3/4]",
  },
  {
    id: "navy-senator",
    title: "Navy Senator Outfit",
    caption: "Modern navy senator set with a sharp collar and tailored trousers.",
    image: "gallery-navy-senator",
    aspect: "aspect-[1/1]"
  },
  {
    id: "cream-jallabiya",
    title: "Cream Jallabiya",
    caption: "Relaxed cream jallabiya for everyday wear and quiet occasions.",
    image: "gallery-cream-jallabiya",
    aspect: "aspect-[4/5]"
  },
  {
    id: "burgundy",
    title: "Burgundy Occasion Set",
    caption: "Deep burgundy two-piece made for weddings and evening celebrations.",
    image: "gallery-burgundy",
    aspect: "aspect-[3/4]",
  },
  {
    id: "embroidery",
    title: "Embroidery Detail",
    caption: "Close study of hand-finished embroidery, plackets and premium fabric weave.",
    image: "gallery-embroidery",
    aspect: "aspect-[4/5]"
  },
  {
    id: "fullbody",
    title: "Full Look, Head to Toe",
    caption: "Chocolate brown two-piece with matching cap, shown complete.",
    image: "gallery-fullbody",
    aspect: "aspect-[3/4]",
  },
  {
    id: "everyday",
    title: "Everyday Traditional Wear",
    caption: "Light everyday two-piece worn the Hausa way, with a woven Hausa cap.",
    image: "everyday",
    aspect: "aspect-[4/5]"
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: "craft" | "style" | "culture" | "service";
}

export const features: Feature[] = [
  {
    title: "Quality Craftsmanship",
    description:
      "Careful attention to stitching, finishing, fit, and clothing details.",
    icon: "craft",
  },
  {
    title: "Personal Style",
    description:
      "Outfits designed around the customer's taste, preferred colors, and desired look.",
    icon: "style",
  },
  {
    title: "Cultural Elegance",
    description:
      "Traditional Hausa fashion presented with a refined, contemporary touch.",
    icon: "culture",
  },
  {
    title: "Personal Customer Service",
    description:
      "Direct communication to discuss designs, measurements, quotations, and orders.",
    icon: "service",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Send a WhatsApp message or call to discuss your clothing needs.",
  },
  {
    number: "02",
    title: "Choose Your Design",
    description:
      "Select the outfit type, fabric, color, and preferred style.",
  },
  {
    number: "03",
    title: "Discuss Measurements and Price",
    description:
      "Confirm measurements, pricing, and the expected completion date with the business.",
  },
  {
    number: "04",
    title: "Arrange Your Outfit",
    description:
      "Discuss fitting, collection, and other arrangements directly with the tailor.",
  },
];

export const outfitOptions = [
  "Luxury Hausa Kaftan",
  "Premium Jallabiya",
  "Custom Tailoring",
  "Senator Outfit",
  "Wedding / Ceremonial Wear",
  "Matching Traditional Outfit",
  "Other / Not sure yet",
] as const;
