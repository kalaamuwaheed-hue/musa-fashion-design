import { features } from "@/data/site";
import { CraftIcon, CultureIcon, ServiceIcon, StyleIcon } from "./Icons";

const iconMap = {
  craft: CraftIcon,
  style: StyleIcon,
  culture: CultureIcon,
  service: ServiceIcon,
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-ivory py-20 lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">Why Choose {`Musa Fashion Design`}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
            DETAILS THAT <span className="text-gold-deep">DEFINE EXCELLENCE.</span>
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <article
                key={feature.title}
                className="group border border-line bg-white p-7 text-center transition-colors duration-300 hover:border-gold/70 lg:p-8"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold-deep transition-colors duration-300 group-hover:bg-ink group-hover:text-gold">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-ink lg:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/60">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
