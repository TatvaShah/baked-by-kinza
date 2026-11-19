import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Baked by Kinza",
  tagline: "Cakes, cupcakes and gourmet cookies in Mississauga and Oakville, with eggless options on request.",
  category: "Cakes, cupcakes and cookies",
  schemaType: "Bakery",
  area: "Mississauga and Oakville, ON",
  siteUrl: "https://baked-by-kinza-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#dc827b" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Baking in Mississauga and Oakville",
    headline: "Themed cakes, cupcakes and gourmet cookies",
    subhead: "Baked by Kinza makes custom cakes, cupcakes and gourmet cookies in Mississauga and Oakville, with eggless options on request. The kitchen is food handler certified. Order through the order form, or send an Instagram message.",
    images: [
      { src: "/images/post-3.jpg", alt: "A dinosaur themed birthday cake from Baked by Kinza", width: 1080, height: 1300 },
      { src: "/images/post-4.jpg", alt: "A two-tier safari themed first birthday cake from Baked by Kinza", width: 1080, height: 1411 },
      { src: "/images/post-5.jpg", alt: "A Gabby's Dollhouse birthday cake from Baked by Kinza", width: 1080, height: 1433 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Custom themed cakes",
    "Gourmet cookies, including a holiday box",
    "Eggless options on request",
    "Food handler certified",
  ],

  about: {
    title: "Welcome to Baked by Kinza",
    body: [
      "Baked by Kinza makes cakes, cupcakes and gourmet cookies in Mississauga and Oakville, baked fresh, with eggless options on request. The kitchen is food handler certified. Recent cakes have included a dinosaur themed birthday cake, a two-tier safari first birthday cake, a Gabby's Dollhouse cake, a teddy bear first birthday cake, and a strawberry shortcake.",
      "Gourmet cookie flavours posted include chocolate chip, maple pecan, Biscoff, almond croissant, midnight melt, and cookies and cream. A November 14 post offered a holiday cookie box of 6 gourmet cookies for $25, regularly $30, with pickup and delivery on December 20. Order through the order form, or send an Instagram message.",
    ],
    image: { src: "/images/post-3.jpg", alt: "A dinosaur themed birthday cake from Baked by Kinza", width: 1080, height: 1300 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Order through the form or Instagram for a quote. A holiday cookie box was posted at $25 for 6 cookies.",
    groups: [
      {
        title: "Cakes and cupcakes",
        items: [
          { name: "Custom themed cakes", description: "Posted work has included dinosaur, safari, Gabby's Dollhouse and teddy bear cakes." },
          { name: "Cupcakes" },
          { name: "Eggless options", description: "Available on request, as posted." },
        ],
      },
      {
        title: "Cookies",
        items: [
          { name: "Gourmet cookies", description: "Posted flavours include chocolate chip, maple pecan, Biscoff, almond croissant, midnight melt, and cookies and cream." },
          { name: "Holiday cookie box", description: "A November 14 post offered 6 gourmet cookies for $25, regularly $30, with pickup and delivery on December 20." },
        ],
      },
    ],
    footnote: "The kitchen is food handler certified. Based in Mississauga and Oakville.",
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-3.jpg", width: 1080, height: 1300, alt: "A dinosaur themed birthday cake from Baked by Kinza", caption: "A dinosaur themed cake", href: "https://www.instagram.com/p/DfOF-3ARXiM/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1411, alt: "A two-tier safari themed first birthday cake from Baked by Kinza", caption: "A safari first birthday cake", href: "https://www.instagram.com/p/De9SPCohIla/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1433, alt: "A Gabby's Dollhouse birthday cake from Baked by Kinza", caption: "A Gabby's Dollhouse cake", href: "https://www.instagram.com/p/De5ibUtBrh_/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1436, alt: "A teddy bear first birthday cake with clouds from Baked by Kinza", caption: "A teddy bear cake", href: "https://www.instagram.com/p/DewfZFXhpno/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1438, alt: "A strawberry shortcake from Baked by Kinza", caption: "A strawberry shortcake", href: "https://www.instagram.com/p/DeXzh-4nD7j/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1334, alt: "A holiday box of six gourmet cookies from Baked by Kinza", caption: "A holiday cookie box", href: "https://www.instagram.com/p/DfudoO_JAwX/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "bakedbykinza",
    embeds: ["https://www.instagram.com/p/DfOF-3ARXiM/", "https://www.instagram.com/p/De9SPCohIla/", "https://www.instagram.com/p/DfudoO_JAwX/"],
  },

  order: {
    label: "How to order",
    title: "Place an order",
    intro: "Order through the order form, or send an Instagram message. Baked by Kinza serves Mississauga and Oakville.",
    headerCtaLabel: "Order now",
    dmMessage: "Hi Baked by Kinza! I would like to order.\nDate needed:\nCake, cupcakes or cookies:\nEggless:",
    links: [
      { label: "Order now", href: "https://forms.gle/uB7TQyuYwmJVS3A38" },
      { label: "Message on Instagram", href: "https://ig.me/m/bakedbykinza" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Use the order form, or send an Instagram message." },
    { q: "Do you offer eggless options?", a: "Yes. Eggless options are available on request, as posted." },
    { q: "Where are you based?", a: "Baked by Kinza is based in Mississauga and Oakville." },
    { q: "Is there a holiday cookie box?", a: "A November 14 post offered a box of 6 gourmet cookies for $25, regularly $30, with pickup and delivery on December 20." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga and Oakville, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/bakedbykinza/" },
    ],
  },

  seo: {
    title: "Baked by Kinza | Cakes and gourmet cookies in Mississauga and Oakville",
    description: "Custom cakes, cupcakes and gourmet cookies in Mississauga and Oakville, with eggless options on request. Food handler certified. Order through the form or Instagram DM.",
    keywords: ["Baked by Kinza", "Mississauga cakes", "Oakville cookies", "eggless cakes Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
