import { defaultOrderMessage, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(defaultOrderMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full bg-gold px-4 py-3.5 text-ink shadow-lux transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light sm:bottom-6 sm:right-6 sm:px-5"
      style={{ paddingBottom: "max(0.875rem, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:inline">
        Order Now
      </span>
    </a>
  );
}
