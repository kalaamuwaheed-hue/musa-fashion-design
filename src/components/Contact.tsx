import { useState } from "react";
import {
  business,
  defaultOrderMessage,
  outfitOptions,
  whatsappLink,
} from "@/data/site";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [outfit, setOutfit] = useState<string>(outfitOptions[0]);
  const [message, setMessage] = useState("");
  const [sentLink, setSentLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text =
      `Hello Musa Fashion Design.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Desired outfit: ${outfit}\n\n` +
      `${message || "I would like to discuss this outfit and receive a quotation."}`;
    const link = whatsappLink(text);
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-ink py-20 text-white lg:py-28">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold">Visit the Shop · Order Anywhere</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.85rem]">
              LET&rsquo;S CREATE SOMETHING <span className="text-gold">EXCEPTIONAL.</span>
            </h2>
            <div className="mt-7 h-px w-16 bg-gold/70" />

            <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-white/60">
              Visit the shop to browse fabrics and discuss your design in person,
              or reach us directly by phone, WhatsApp or email. We respond to
              every enquiry personally.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                  <PhoneIcon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/40">
                    Phone
                  </span>
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="mt-1 block text-lg text-white transition-colors hover:text-gold"
                  >
                    {business.phoneDisplay}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/40">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappLink(defaultOrderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg text-white transition-colors hover:text-gold"
                  >
                    {business.whatsappDisplay}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                  <MailIcon className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/40">
                    Email
                  </span>
                  <a
                    href={`mailto:${business.email}`}
                    className="mt-1 block break-all text-lg text-white transition-colors hover:text-gold"
                  >
                    {business.email}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                  <PinIcon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/40">
                    Shop Address
                  </span>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-white/80">
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </p>
                  <a
                    href="https://www.openstreetmap.org/search?query=Madalisa%20Gwadangaji%20Plaza%2C%20Opposite%20Mama%20Ruke%2C%20Birnin%20Kebbi%2C%20Kebbi%20State%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
                  >
                    Find the shop on map
                  </a>
                </span>
              </li>
            </ul>

            <a
              href={whatsappLink(defaultOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream p-6 text-ink shadow-lux sm:p-9 lg:p-10">
              <h3 className="font-display text-2xl font-semibold sm:text-[1.75rem]">
                Send an enquiry
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink/60">
                Fill in the form and we will prepare your message for WhatsApp.
                Your details are not stored on this website — they are only used
                to open the chat with us.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ink/50">
                      Your name
                    </span>
                    <input
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Musa Muhammad"
                      className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ink/50">
                      Phone number
                    </span>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 08012345678"
                      className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ink/50">
                    Desired outfit
                  </span>
                  <select
                    name="outfit"
                    value={outfit}
                    onChange={(e) => setOutfit(e.target.value)}
                    className="mt-2 w-full appearance-none border border-line bg-white bg-[length:12px] bg-[right_1rem_center] bg-no-repeat px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors focus:border-gold"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23101010' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    {outfitOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-ink/50">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the fabric, colour, occasion and your measurements."
                    className="mt-2 w-full resize-none border border-line bg-white px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink sm:w-auto"
                >
                  Send via WhatsApp
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                {sentLink && (
                  <p className="border-l-2 border-gold bg-ivory px-4 py-3 text-[0.82rem] leading-relaxed text-ink/70">
                    Your message is ready in WhatsApp. If the chat did not open,
                    tap{" "}
                    <a
                      href={sentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gold-deep underline underline-offset-2"
                    >
                      here
                    </a>{" "}
                    to open it and tap send.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
