import { imageFor } from "@/data/images";
import { business, whatsappLink } from "@/data/site";
import { ArrowRightIcon } from "./Icons";

const discussMessage =
  "Hello Musa Fashion Design. I would like to discuss a custom design with you. Please let me know how we can work together.";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container-lux">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="eyebrow text-gold-deep">About {business.abbr}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
              CRAFTED WITH PASSION.
              <span className="block text-gold-deep">DESIGNED FOR YOU.</span>
            </h2>

            <div className="mt-7 space-y-5 text-[0.98rem] leading-[1.85] text-ink/70">
              <p>
                Musa Fashion Design is dedicated to creating elegant, well-fitted
                Hausa traditional clothing and contemporary men&rsquo;s fashion.
              </p>
              <p>
                Our focus is on thoughtful design, quality tailoring, beautiful
                finishing, and personal style.
              </p>
              <p>
                From everyday kaftans to outfits for weddings, Eid celebrations,
                Friday prayers, and special occasions, we help customers bring
                their fashion ideas to life.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Eid Celebrations", "Weddings", "Friday Prayers", "Naming Ceremonies"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-line bg-white px-3.5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink/65"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <a
              href={whatsappLink(discussMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-ink px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Discuss Your Design
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Photography */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-gold/60 sm:block" />
              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-gold/60 sm:block" />

              <figure className="relative overflow-hidden bg-charcoal">
                <img
                  src={imageFor("about")}
                  alt="Young Nigerian man in an ivory embroidered traditional Hausa outfit with matching cap"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1122}
                  height={1402}
                />
              </figure>

              {/* Reference style board supplied by the brand */}
              <figure className="relative -mt-10 ml-auto w-[52%] max-w-[240px] border-4 border-cream bg-white shadow-lux sm:-mt-12">
                <img
                  src={imageFor("lookbook")}
                  alt="Musa Fashion Design style board showing a coordinated green senator outfit with Hausa cap, sunglasses and accessories"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={736}
                  height={981}
                />
                <figcaption className="bg-ink px-3 py-2 text-[0.55rem] font-medium uppercase tracking-[0.18em] text-gold">
                  The MFD Signature Look
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
