# Musa Fashion Design — Website

A mobile-first, luxury menswear website for **Musa Fashion Design (MFD)**, Birnin Kebbi, Kebbi State, Nigeria.
Built with React + TypeScript + Vite + Tailwind CSS v4, and bundled into a single fast-loading `dist/index.html`.

---

## Business information (as shown on the site)

| Field | Value |
| --- | --- |
| Name | Musa Fashion Design (MFD) |
| Phone | 07040773767 — `tel:+2347040773767` |
| WhatsApp | 07040773767 — `https://wa.me/2347040773767` |
| Email | musamuhammad3767@gmail.com |
| Address | Madalisa Gwadangaji Plaza, Opposite Mama Ruke, Birnin Kebbi, Kebbi State, Nigeria |

All of these live in **one file**: `src/data/site.ts`.

---

## How to edit the site

### 1. Change any text, contact detail or section copy
Open `src/data/site.ts`. Everything is plain English:

- `business` — name, slogan, phone, WhatsApp, email, address, copyright
- `navigation` — the menu items
- `services` — the six service cards (title, description, image, WhatsApp message)
- `gallery` — the lookbook items (title, caption, image, aspect ratio)
- `features` — the four "Why choose" cards
- `steps` — the four "How to order" steps
- `outfitOptions` — the dropdown list in the contact form

### 2. Replace the photographs with your own work
1. Put your new photo in `src/assets/img/` (for example `my-kaftan.jpg`).
   The original high-resolution files are kept in `public/images/`.
2. Open `src/data/images.ts` and point the key to your file:
   ```ts
   "gallery-black-kaftan": myKaftanImg,
   ```
3. Reference that key from `src/data/site.ts`.

File names currently in use: `hero`, `about`, `lookbook`, `gallery-white-kaftan`,
`gallery-black-kaftan`, `gallery-emerald`, `gallery-navy-senator`,
`gallery-cream-jallabiya`, `gallery-burgundy`, `gallery-embroidery`,
`gallery-fullbody`, `everyday`.

> Tip: name files with lowercase letters and hyphens. Any `.jpg` / `.png` works.

### 3. Change colours or fonts
`src/index.css` holds the brand tokens:

```css
--color-ink: #101010;      /* deep black */
--color-gold: #c8a45d;     /* luxury gold */
--color-ivory: #f5f0e6;    /* warm ivory */
--color-charcoal: #242424; /* dark charcoal */
--font-display: "Playfair Display";  /* headings */
--font-sans: "Jost";                 /* body + labels */
```

### 4. Page title & SEO description
`index.html` — `<title>`, `<meta name="description">`, Open Graph tags and the
`ClothingStore` JSON-LD block.

---

## Sections

1. **Home** — split hero: brand headline + campaign photograph
2. **About** — "Crafted with passion. Designed for you." + style board
3. **Our Services** — six service cards, each with its own WhatsApp enquiry
4. **Gallery** — "Our style. Your statement." lookbook with full-screen viewer
5. **Why Choose Musa Fashion Design** — four feature cards
6. **How to Order** — four steps + "Start Your Order"
7. **Contact** — clickable phone / WhatsApp / email, shop address, map search
   link and an enquiry form that prepares the message for WhatsApp
8. **Footer** — premium black footer with gold accents

---

## Notes on honesty & functionality

- **The contact form does not fake a submission.** It has no backend, so it
  composes the customer's details into a WhatsApp message and opens WhatsApp
  (with a fallback link if the popup is blocked). Nothing is stored.
- **No invented claims.** No years of experience, awards, reviews or statistics
  appear anywhere on the site.
- **Gallery images are presented as style references**, since finished work
  photography of the shop's own outfits was not supplied. Replace them with
  your own photographs as described above.
- **The map** is a link that searches the written address on OpenStreetMap —
  no coordinates were invented, and no unverified pin is shown.
- Photography credits are printed in the footer.

---

## Commands

```bash
npm install       # install dependencies
npm run dev       # local development server
npm run build     # production build -> dist/index.html
npm run preview   # preview the production build
```

### Optional dev tools (in `scripts/`)

```bash
node scripts/optimize-images.mjs   # compress + resize public/images/ -> src/assets/img
node scripts/audit.mjs             # check for broken images / mobile overflow
node scripts/shoot.mjs             # desktop + mobile screenshots (needs playwright)
```

`scripts/optimize-images.mjs` keeps every photograph light (1000px wide,
~62% quality) so the site loads quickly on mobile data.
