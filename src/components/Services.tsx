import { imageFor } from "@/data/images";
import { services, whatsappLink } from "@/data/site";
import { ArrowRightIcon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">What We Make</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
            OUR SERVICES
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-ink/60">
            Every piece is cut, stitched and finished to order. Choose the style
            you love and we will tailor it to your measurements.
          </p>
          <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="group flex flex-col border border-line bg-cream transition-colors duration-300 hover:border-gold/70"
            >
              <div className="zoomable relative aspect-[4/5] overflow-hidden bg-charcoal">
                <img
                  src={imageFor(service.image)}
                  alt={`${service.title} by Musa Fashion Design`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1122}
                  height={1402}
                />
                <span className="absolute left-0 top-0 bg-ink/85 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="font-display text-xl font-semibold leading-snug text-ink lg:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink/60">
                  {service.description}
                </p>

                <a
                  href={whatsappLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 border-t border-line pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-deep"
                >
                  Discuss This Style
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
