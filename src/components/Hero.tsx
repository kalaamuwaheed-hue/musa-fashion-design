import { imageFor } from "@/data/images";
import { business } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

const WHATSAPP_DIRECT = "https://wa.me/2347040773767";

export default function Hero() {
  return (
    <section id="home" className="relative bg-ink text-white">
      <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Photography */}
        <div className="relative lg:order-2 lg:pt-20">
          <div className="relative h-[58vh] min-h-[400px] overflow-hidden sm:h-[64vh] lg:h-auto lg:min-h-0 lg:aspect-[4/5]">
            <img
              src={imageFor("hero")}
              alt="Young Nigerian man wearing a tailored black luxury Hausa kaftan with gold embroidery and a matching Hausa cap"
              className="absolute inset-0 h-full w-full object-cover object-[50%_16%] lg:object-center"
              width={1122}
              height={1402}
              fetchPriority="high"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink via-ink/40 to-transparent lg:hidden" />
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-ink to-transparent lg:block" />

            <div className="absolute bottom-5 left-5 hidden items-center gap-3 border border-white/20 bg-ink/50 px-4 py-2.5 backdrop-blur-sm lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/85">
                Signature Black Kaftan · MFD
              </span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="relative flex items-center lg:order-1">
          <div className="container-lux pb-16 pt-14 lg:py-24 lg:pl-14 lg:pr-10 xl:pl-20">
            <p className="eyebrow text-gold">{business.name} · {business.city}</p>

            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[0.02em] text-white sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem]">
              MUSA FASHION
              <span className="block text-gold">DESIGN</span>
            </h1>

            <div className="my-7 h-px w-20 bg-gold/70" />

            <p className="font-display text-xl italic tracking-wide text-gold-light sm:text-2xl lg:text-[1.75rem]">
              &ldquo;{business.slogan}&rdquo;
            </p>

            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-white/75 sm:text-lg">
              Luxury Hausa Fashion. Exceptional Craftsmanship. A Perfect Fit.
            </p>

            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/55">
              Discover beautifully tailored traditional clothing designed to
              celebrate your identity, elevate your style, and express your
              confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
              >
                Explore Our Collection
              </a>
              <a
                href={WHATSAPP_DIRECT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/35 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>

            <p className="mt-9 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/35">
              Kaftans · Jallabiyas · Senator Outfits · Custom Tailoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
