import { Gem, Leaf, Palette, Scissors, Sparkles, type LucideIcon } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Learning Hub", href: "/learning-hub" },
  { label: "Community", href: "/community" },
];

export type Category = {
  name: string;
  slug: string;
  icon: LucideIcon;
  blurb: string;
};

export const categories: Category[] = [
  { name: "Handloom & Batik", slug: "handloom-batik", icon: Scissors, blurb: "Woven and wax-dyed textiles from Kandy to Kurunegala." },
  { name: "Basketry", slug: "basketry", icon: Leaf, blurb: "Palmyrah, reed and coir baskets made by hand." },
  { name: "Pottery", slug: "pottery", icon: Palette, blurb: "Terracotta and clay ware fired in village kilns." },
  { name: "Jewellery", slug: "jewellery", icon: Gem, blurb: "Silver, brass and gem-set pieces from local ateliers." },
  { name: "Wood carving", slug: "wood-carving", icon: Palette, blurb: "Hand-carved panels, figures and homeware." },
  { name: "Beeralu lace", slug: "beeralu-lace", icon: Scissors, blurb: "Bobbin lace from the southern coast, a 500-year craft." },
  { name: "Masks", slug: "masks", icon: Sparkles, blurb: "Traditional Ambalangoda masks, painted by hand." },
];

export const artisans = [
  {
    name: "Kamala Perera",
    craft: "Handloom weaving",
    location: "Kandy",
    src: "/hero_main.jpg",
    position: "22% 55%",
    zoom: 1.9,
  },
  {
    name: "Nirmala Silva",
    craft: "Painted elephants",
    location: "Galle",
    src: "/hero_main.jpg",
    position: "74% 50%",
    zoom: 1.9,
  },
  {
    name: "Dilani Fernando",
    craft: "Mask & wood carving",
    location: "Ambalangoda",
    src: "/artisan_carver.jpg",
    position: "56% 38%",
    zoom: 1.35,
  },
  {
    name: "Kala Collective",
    craft: "Mixed heritage crafts",
    location: "Matale",
    src: "/hero_main.jpg",
    position: "50% 85%",
    zoom: 1.6,
  },
];

export type Artisan = (typeof artisans)[number];

export const products = [
  {
    name: "Hand Loomed Silk Wrap",
    maker: "by Kamala Perera",
    price: 25500,
    tag: "Bestseller",
    category: "handloom-batik",
    src: "/product_1.jpg",
  },
  {
    name: "Apsara Handwoven Tote",
    maker: "by Sanduni Weaving",
    price: 36000,
    tag: "New",
    category: "handloom-batik",
    src: "/product_2.jpg",
  },
  {
    name: "Coiled Palm Basket",
    maker: "by Soma Dissanayake",
    price: 22500,
    tag: "Eco",
    category: "basketry",
    src: "/product_3.jpg",
  },
];

export type Product = (typeof products)[number];

export const courses = [
  { title: "Pricing your handmade work", lessons: 8, level: "Beginner", language: "Sinhala · English" },
  { title: "Product photography on a phone", lessons: 12, level: "Beginner", language: "Sinhala · Tamil" },
  { title: "Shipping crafts abroad", lessons: 6, level: "Intermediate", language: "English" },
  { title: "Bookkeeping for small businesses", lessons: 10, level: "Beginner", language: "Sinhala · Tamil" },
  { title: "Selling on social media", lessons: 9, level: "Intermediate", language: "Sinhala · English" },
  { title: "Natural dyes & sustainable materials", lessons: 7, level: "Advanced", language: "Sinhala" },
];
