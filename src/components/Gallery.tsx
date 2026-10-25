import { useState } from "react";
import { imageFor } from "@/data/images";
import { gallery, whatsappLink } from "@/data/site";
import Lightbox from "./Lightbox";
import { ExpandIcon, WhatsAppIcon } from "./Icons";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-ink py-20 text-white lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">The Collection</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.85rem]">
            OUR STYLE. <span className="text-gold">YOUR STATEMENT.</span>
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-white/55">
            A lookbook of traditional Nigerian menswear — kaftans, jallabiyas,
            senator sets and embroidered pieces, each one tailored and finished
            by hand.
          </p>
          <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <figure key={item.id} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden bg-charcoal text-left"
                aria-label={`Open larger view of ${item.title}`}
              >
                <img
                  src={imageFor(item.image)}
                  alt={`${item.title} — ${item.caption}`}
                  className={cnAspect(item.aspect)}
                  loading="lazy"
                  decoding="async"
                  width={1122}
                  height={1402}
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35" />
                <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-2 items-center justify-center border border-white/40 bg-ink/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ExpandIcon className="h-4 w-4" />
                </span>
              </button>
              <figcaption className="mt-3">
                <p className="font-display text-base text-gold-light">{item.title}</p>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-white/45">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border border-white/10 bg-white/[0.03] p-7 text-center sm:p-9">
          <p className="font-display text-xl text-white sm:text-2xl">
            Love a look? We can tailor it to you.
          </p>
          <p className="max-w-xl text-[0.9rem] leading-relaxed text-white/50">
            Send us a message with the style you have in mind and we will share
            available fabrics, options and a quotation for your measurements.
          </p>
          <a
            href={whatsappLink(
              "Hello Musa Fashion Design. I saw your gallery and would like to discuss ordering one of these styles."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 bg-gold px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Request This Style
          </a>
          <p className="pt-1 text-[0.7rem] italic text-white/30">
            Gallery images are style references. Ask us for current availability.
          </p>
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={gallery}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </section>
  );
}

/** Aspect class helper so the data file stays free of Tailwind syntax errors. */
function cnAspect(aspect: string): string {
  return `h-full w-full object-cover ${aspect}`;
}
