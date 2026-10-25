import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { business, navigation, whatsappLink } from "@/data/site";
import { defaultOrderMessage } from "@/data/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-line shadow-[0_10px_30px_-24px_rgba(16,16,16,0.6)]"
          : "bg-cream/85 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container-lux">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="#home" className="group flex items-center gap-3" aria-label="Musa Fashion Design home">
            <span className="flex h-10 w-10 items-center justify-center border border-gold bg-ink font-display text-sm font-semibold tracking-widest text-gold transition-colors group-hover:bg-gold group-hover:text-ink lg:h-11 lg:w-11">
              MFD
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[0.95rem] font-semibold tracking-[0.14em] text-ink lg:text-base">
                MUSA FASHION DESIGN
              </span>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold-deep">
                Birnin Kebbi · Nigeria
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors",
                  active === item.href ? "text-gold-deep" : "text-ink/70 hover:text-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                    active === item.href ? "w-full" : "w-0"
                  )}
                />
              </a>
            ))}
            <a
              href={whatsappLink(defaultOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Order Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-gold hover:text-gold-deep lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer (outside the header so fixed positioning uses the viewport) */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <nav
          aria-label="Mobile"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-ink text-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 lg:h-20">
            <span className="font-display text-sm font-semibold tracking-[0.18em] text-gold">
              MUSA FASHION DESIGN
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/5 py-4 font-display text-2xl text-white/90 transition-colors hover:text-gold"
                  >
                    <span className="text-[0.65rem] font-sans font-medium tracking-[0.2em] text-gold/70">
                      0{i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(defaultOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order Now on WhatsApp
            </a>

            <div className="mt-6 space-y-2 text-sm text-white/60">
              <a href={`tel:${business.phoneTel}`} className="block hover:text-gold">
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="block break-all hover:text-gold"
              >
                {business.email}
              </a>
              <p className="pt-2 text-xs leading-relaxed text-white/45">
                {business.addressLine1}, {business.addressLine2}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
