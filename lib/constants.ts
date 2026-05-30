export const SITE = {
  name: "Inkqova",
  parent: "Custom Printing & Corporate Gifting",
  url: "www.inkqova.in", // display string (no protocol)
  // Canonical origin used by metadata, sitemap, robots, JSON-LD.
  canonical: "https://www.inkqova.in",
  ogImage: "/og.png",
  icon: "/logo-mark.png",
  locale: "en_IN",
  tagline: "Ink Your Brand.",
  // SEO title (50–60 chars) + description (110–160 chars).
  title: "Inkqova | Custom T-Shirt Printing & Corporate Gifting",
  description:
    "Premium custom printing & corporate gifting in India — t-shirts, mugs, diaries, pens & branded merch. Bulk orders, crisp prints, on-time delivery.",
  craftedBy: { name: "Barqova Technologies", href: "https://barqova.com" },
  keywords: [
    "Inkqova",
    "custom t-shirt printing",
    "corporate gifting India",
    "branded merchandise",
    "coffee mug printing",
    "custom diary printing",
    "promotional pens",
    "corporate gifts bulk",
    "company logo t-shirts",
    "custom printed merchandise",
    "employee gifting",
    "branded stationery",
  ],
  phone: "+91 8174 06 8145",
  phoneHref: "tel:+918174068145",
  whatsappHref: "https://wa.me/918174068145",
  email: "hello@inkqova.in",
  emailHref: "mailto:hello@inkqova.in",
  instagram: "@inkqova",
  instagramHref: "https://instagram.com/inkqova",
  // Contact form posts here via a prefilled mailto.
  quoteHref:
    "mailto:hello@inkqova.in?subject=Quote%20Request%20%E2%80%94%20Inkqova",
  address: "Lucknow, Uttar Pradesh, India",
} as const;

// Absolute hrefs ("/#...") so the nav works from any route (e.g. /ecosystem),
// not just the home page.
export const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Products", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Contact", href: "/#contact" },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Orders Delivered" },
  { value: 20, suffix: "+", label: "Brands Served" },
  { value: 72, suffix: "h", label: "Avg. Turnaround" },
  { value: 15, suffix: "+", label: "Product Types" },
];

// Hero ticker + brand keywords
export const TICKER = [
  "T-Shirt Printing",
  "Corporate Gifting",
  "Coffee Mugs",
  "Custom Diaries",
  "Branded Pens",
  "Tote Bags",
  "Drinkware",
  "Caps & Headwear",
  "Notebooks",
  "Tech Gadgets",
];

/**
 * Product categories — the core catalogue.
 * `span` controls the bento grid footprint on large screens.
 */
export const PRODUCTS = [
  {
    title: "Custom T-Shirts",
    blurb:
      "Screen, DTG & DTF printing on premium combed-cotton tees. Team kits, event drops, merch lines.",
    tag: "Apparel",
    icon: "shirt",
    span: "lg:col-span-2 lg:row-span-2",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Corporate Gifting",
    blurb: "Curated welcome kits & festive hampers that feel premium.",
    tag: "Gifting",
    icon: "gift",
    span: "lg:col-span-2",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Coffee Mugs",
    blurb: "Ceramic, magic & travel mugs with edge-to-edge prints.",
    tag: "Drinkware",
    icon: "mug",
    span: "",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=70",
  },
  {
    title: "Diaries & Notebooks",
    blurb: "Debossed leather & hardbound diaries, branded to the page.",
    tag: "Stationery",
    icon: "diary",
    span: "",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=70",
  },
  {
    title: "Pens & Desk",
    blurb: "Metal pens, organisers & desk sets with laser engraving.",
    tag: "Stationery",
    icon: "pen",
    span: "",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=70",
  },
  {
    title: "Gifting Items",
    blurb: "Bottles, bags, tech & eco kits — fully branded, bulk-ready.",
    tag: "Merch",
    icon: "box",
    span: "lg:col-span-1",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=700&q=70",
  },
] as const;

// How it works
export const PROCESS = [
  {
    step: "01",
    title: "Share the Brief",
    blurb:
      "Tell us the product, quantity & deadline. Drop your logo — we handle the rest.",
    icon: "brief",
  },
  {
    step: "02",
    title: "Design & Mockup",
    blurb:
      "Our studio sends print-ready mockups so you see the result before we ink it.",
    icon: "design",
  },
  {
    step: "03",
    title: "Production & QC",
    blurb:
      "Calibrated machines, colour-matched prints and a piece-by-piece quality check.",
    icon: "print",
  },
  {
    step: "04",
    title: "Pack & Deliver",
    blurb:
      "Gift-grade packing and tracked delivery across India — on the date we promised.",
    icon: "deliver",
  },
] as const;

// Why choose Inkqova
export const FEATURES = [
  {
    title: "Crisp, Lasting Prints",
    blurb:
      "Fade-resistant inks and tight colour calibration so your brand stays sharp wash after wash.",
    icon: "spark",
  },
  {
    title: "Bulk Without the Wait",
    blurb:
      "In-house machines mean we scale from 25 to 25,000 units without blowing the deadline.",
    icon: "bolt",
  },
  {
    title: "One Vendor, Everything",
    blurb:
      "Apparel, drinkware, stationery & gifting under one roof — one PO, one point of contact.",
    icon: "layers",
  },
  {
    title: "Gift-Grade Finishing",
    blurb:
      "Premium packaging and presentation that makes a ₹200 item feel like a ₹2,000 gift.",
    icon: "ribbon",
  },
];

// Capability strip — honest, no fabricated client names.
export const CAPABILITIES = [
  "Screen Printing",
  "DTF & DTG",
  "Sublimation",
  "Laser Engraving",
  "Embroidery",
  "UV Printing",
  "Vinyl & Heat-Press",
  "Debossing",
  "Bulk Orders",
  "Pan-India Delivery",
];

// Showcase gallery — Unsplash placeholders (swap with real shoot photos)
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const SHOWCASE = [
  { src: U("1576566588028-4147f3842f27"), caption: "Event Tees", rotate: -3 },
  { src: U("1577937927133-66ef06acdf18"), caption: "Branded Mugs", rotate: 2 },
  { src: U("1606107557195-0e29a4b5b4aa"), caption: "Welcome Kits", rotate: -2 },
  { src: U("1544816155-12df9643f363"), caption: "Custom Diaries", rotate: 3 },
  { src: U("1586075010923-2dd4570fb338"), caption: "Drinkware", rotate: -3 },
  { src: U("1591561954557-26941169b49e"), caption: "Tote Bags", rotate: 2 },
];

/**
 * Ecosystem — the family of brands Inkqova belongs to.
 * NOTE: sibling-brand blurbs are placeholders — adjust to real positioning.
 */
export const ECOSYSTEM = {
  parent: "Infinity Ventures",
  intro:
    "Inkqova is part of Infinity Ventures — a small ecosystem of independent brands that share craft, standards, and people.",
  brands: [
    {
      name: "Barqova",
      domain: "barqova.com",
      url: "https://barqova.com",
      blurb: "The creative studio and engineering craft behind the ecosystem.",
      current: false,
    },
    {
      name: "Barq Media",
      domain: "barqmedia.in",
      url: "https://barqmedia.in",
      blurb: "Content systems, cinematic reels, and brand strategy.",
      current: false,
    },
    {
      name: "Matrix Events",
      domain: "matrixevent.in",
      url: "https://www.matrixevent.in",
      blurb: "Events, experiences, and on-ground production.",
      current: false,
    },
    {
      name: "Inkqova",
      domain: "inkqova.in",
      url: "https://www.inkqova.in",
      blurb: "Custom printing & corporate gifting — apparel, drinkware, stationery.",
      current: true,
    },
  ],
  note: "Barqova Technologies is registered separately but operates within the same ecosystem.",
} as const;
