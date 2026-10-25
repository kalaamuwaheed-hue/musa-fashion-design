import { business, defaultOrderMessage, navigation, whatsappLink } from "@/data/site";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-black text-white/70">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-gold font-display text-sm font-semibold tracking-widest text-gold">
                MFD
              </span>
              <span className="font-display text-lg font-semibold tracking-[0.14em] text-white">
                MUSA FASHION DESIGN
              </span>
            </div>
            <p className="mt-5 font-display text-lg italic text-gold-light">
              &ldquo;{business.slogan}&rdquo;
            </p>
            <p className="mt-4 max-w-sm text-[0.88rem] leading-relaxed text-white/45">
              Luxury Hausa men&rsquo;s fashion, traditional tailoring and
              custom-made clothing in {business.city}, {business.state}, Nigeria.
            </p>
            <a
              href={whatsappLink(defaultOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9rem] text-white/60 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a
                  href={`tel:${business.phoneTel}`}
                  className="text-[0.9rem] text-white/65 transition-colors hover:text-gold"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a
                  href={`mailto:${business.email}`}
                  className="break-all text-[0.9rem] text-white/65 transition-colors hover:text-gold"
                >
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span className="text-[0.9rem] leading-relaxed text-white/65">
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[0.78rem] text-white/40">{business.copyright}</p>
          <p className="text-[0.7rem] text-white/25">
            Campaign photography produced for {business.abbr} presentation · Reference imagery via
            Pexels (free to use) · {business.state}, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
