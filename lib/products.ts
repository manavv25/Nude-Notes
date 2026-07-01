export type FragranceNote = {
  name: string;
};

export type ProductTheme = {
  bg: string;           // CSS hex background
  bgLight: string;      // Lighter variant for gradient
  accent: string;       // Accent color (gold, copper, etc.)
  accentMuted: string;  // Muted/subtle accent
  text: string;         // Primary text color
  textMuted: string;    // Muted text color
  glow: string;         // CSS rgba for image glow
  border: string;       // Border color
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  notes: {
    top: FragranceNote[];
    middle: FragranceNote[];
    base: FragranceNote[];
  };
  longevity: string;
  size: string;
  price: number;
  mrp: number;
  imagePath: string;
  theme: ProductTheme;
};

export const INSTAGRAM_URL =
  "https://www.instagram.com/nudenotesperfume/";
export const EMAIL = "nudenotesperfume@gmail.com";
export const BUNDLE_PRICE = 999;
export const PRODUCT_PRICE = 399;
export const PRODUCT_MRP = 799;

export const products: Product[] = [
  {
    id: "bare-birch",
    slug: "bare-birch",
    name: "Bare Birch",
    tagline: "Chypre fresh. Ancient woodland.",
    description:
      "A chypre-fresh and woody fragrance — Bare Birch opens with bright citrus and a burst of black currant, blooms through earthy patchouli and jasmine, and settles into the deep, mossy permanence of birch and cedarwood.",
    notes: {
      top: [
        { name: "Bergamot" },
        { name: "Black Currant" },
        { name: "Apple" },
        { name: "Lemon" },
        { name: "Pink Pepper" },
      ],
      middle: [
        { name: "Patchouli" },
        { name: "Moroccan Jasmine" },
      ],
      base: [
        { name: "Birch" },
        { name: "Musk" },
        { name: "Oak Moss" },
        { name: "Cedarwood" },
        { name: "Ambroxan" },
      ],
    },
    longevity: "6–8 Hours",
    size: "50ml",
    price: PRODUCT_PRICE,
    mrp: PRODUCT_MRP,
    imagePath: "/images/bare-birch.jpg",
    theme: {
      bg: "#2C1014",
      bgLight: "#3D1A1E",
      accent: "#C9A46E",
      accentMuted: "#8B6840",
      text: "#F5EDE0",
      textMuted: "#B8A090",
      glow: "rgba(139, 60, 40, 0.35)",
      border: "rgba(201,164,110,0.25)",
    },
  },
  {
    id: "monolith",
    slug: "monolith",
    name: "Monolith",
    tagline: "Sweet. Spicy. Absolute.",
    description:
      "Sweet and spicy with unapologetic depth — Monolith opens with pink pepper and violet, warms through toffee, cinnamon and sage, then anchors in a rich base of vanilla, amber and tonka bean.",
    notes: {
      top: [
        { name: "Pink Pepper" },
        { name: "Juniper" },
        { name: "Violet" },
      ],
      middle: [
        { name: "Toffee" },
        { name: "Cinnamon" },
        { name: "Lavender" },
        { name: "Sage" },
      ],
      base: [
        { name: "Vanilla" },
        { name: "Amber" },
        { name: "Tonka Bean" },
        { name: "Musk" },
        { name: "Ambroxan" },
      ],
    },
    longevity: "8–10 Hours",
    size: "50ml",
    price: PRODUCT_PRICE,
    mrp: PRODUCT_MRP,
    imagePath: "/images/monolith.jpg",
    theme: {
      bg: "#0A0A0A",
      bgLight: "#151515",
      accent: "#D4AF37",
      accentMuted: "#8B7520",
      text: "#F0EAD6",
      textMuted: "#8A8070",
      glow: "rgba(212, 175, 55, 0.2)",
      border: "rgba(212,175,55,0.2)",
    },
  },
  {
    id: "unfiltered",
    slug: "unfiltered",
    name: "Unfiltered",
    tagline: "Rich. Spicy. Uncut.",
    description:
      "Rich, spicy and sweet — Unfiltered cuts through with sharp lemon and ginger, deepens into smoky cardamom and cade, then lingers in the warm, resinous embrace of tonka bean and vetiver.",
    notes: {
      top: [
        { name: "Lemon" },
        { name: "Ginger" },
      ],
      middle: [
        { name: "Cardamom" },
        { name: "Cade" },
      ],
      base: [
        { name: "Tonka Bean" },
        { name: "Vetiver" },
        { name: "Woody Velvet" },
        { name: "Ambroxan" },
      ],
    },
    longevity: "6–8 Hours",
    size: "50ml",
    price: PRODUCT_PRICE,
    mrp: PRODUCT_MRP,
    imagePath: "/images/unfiltered.jpg",
    theme: {
      bg: "#131D0F",
      bgLight: "#1E2D17",
      accent: "#D4AF37",
      accentMuted: "#7A8A50",
      text: "#EEE8D5",
      textMuted: "#8A9070",
      glow: "rgba(60, 100, 40, 0.4)",
      border: "rgba(212,175,55,0.2)",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
