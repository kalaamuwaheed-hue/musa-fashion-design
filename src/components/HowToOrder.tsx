import { defaultOrderMessage, steps, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-white py-20 lg:py-28">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">Simple &amp; Direct</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
            YOUR STYLE. YOUR CHOICE. <span className="text-gold-deep">YOUR OUTFIT.</span>
          </h2>
          <div className="mx-auto mt-7 h-px w-16 bg-gold" />
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gold/25 lg:block"
          />
          {steps.map((step) => (
            <li key={step.number} className="relative text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center border border-gold bg-cream font-display text-2xl font-semibold text-gold-deep">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink lg:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <a
            href={whatsappLink(defaultOrderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 bg-gold px-10 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-gold sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Start Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
