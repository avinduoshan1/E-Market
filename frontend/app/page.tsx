import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  GraduationCap,
  Leaf,
  Play,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import ArtisanCard from "./components/ArtisanCard";
import ProductCard from "./components/ProductCard";
import { artisans, categories, courses, products } from "./lib/data";

function SearchBar() {
  return (
    <form
      role="search"
      action="/products"
      className="glass flex w-full max-w-xl flex-col gap-1 rounded-3xl p-2 sm:flex-row sm:items-center sm:rounded-full"
    >
      <label className="relative flex items-center sm:w-44 sm:shrink-0">
        <span className="sr-only">Category</span>
        <select
          name="category"
          className="w-full cursor-pointer appearance-none rounded-full bg-transparent py-2.5 pl-4 pr-9 text-sm font-medium text-ink outline-none focus:bg-white/60"
          defaultValue=""
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-ink/50" />
      </label>
      <span className="hidden h-6 w-px bg-ink/15 sm:block" />
      <label className="flex flex-1 items-center gap-2 px-4">
        <Search className="h-4 w-4 shrink-0 text-ink/50" />
        <span className="sr-only">Search products</span>
        <input
          name="q"
          type="search"
          placeholder="Search batik, baskets, lace…"
          className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-ink/45"
        />
      </label>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-magenta/30 transition hover:bg-magenta-dark"
      >
        Search
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-2">
        {/* Copy */}
        <div className="lg:col-span-7 lg:self-start">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-ink/80">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-white">
              <Leaf className="h-3 w-3" />
            </span>
            Handmade in Sri Lanka · 1,200+ women-led shops
          </span>

          <h1 className="mt-4 font-display text-[2.8rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl xl:text-[5.4rem]">
            Empowering Sri Lankan{" "}
            <span className="text-gradient-brand pr-2 italic">Women</span>
            <br className="hidden sm:block" /> Entrepreneurs
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Discover unique handcrafted goods and support talented artisans from across the
            island. Every purchase goes directly to women-led enterprises keeping heritage
            crafts alive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-ink py-3.5 pl-6 pr-2 text-sm font-semibold text-white shadow-xl shadow-ink/20 transition hover:bg-magenta"
            >
              Explore Products
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/community"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              <Play className="h-4 w-4 fill-saffron text-saffron" />
              Meet the makers
            </Link>
          </div>

          <div className="mt-10">
            <SearchBar />
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px_200px_48px_200px] shadow-2xl shadow-magenta/20 ring-8 ring-white/60">
            <Image
              src="/hero_main.jpg"
              alt="Two Sri Lankan women artisans weaving and painting crafts"
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_40%]"
            />
          </div>

          {/* Floating rating card */}
          <div className="glass animate-float absolute -left-4 top-10 bg-white/85 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turmeric/90">
              <Star className="h-5 w-5 fill-white text-white" />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-ink">4.9</p>
              <p className="text-xs text-ink/60">18k happy buyers</p>
            </div>
          </div>

          {/* Floating circle */}
          <div
            className="animate-float absolute -bottom-8 -left-2 h-32 w-32 overflow-hidden rounded-full border-[6px] border-cream shadow-xl sm:-left-12 sm:h-40 sm:w-40"
            style={{ animationDelay: "1.5s" }}
          >
            <Image
              src="/artisan_carver.jpg"
              alt="Woman artisan carving a traditional wooden mask"
              fill
              sizes="160px"
              className="object-cover object-[56%_38%] scale-125"
            />
          </div>

          {/* Floating order chip */}
          <div
            className="glass animate-float absolute -right-2 bottom-16 bg-white/85 rounded-2xl px-4 py-3 sm:-right-6"
            style={{ animationDelay: "3s" }}
          >
            <p className="flex items-center gap-1.5 text-xs font-semibold text-leaf">
              <BadgeCheck className="h-4 w-4" /> Fair-trade verified
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">92% goes to the maker</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Artisans() {
  return (
    <section className="relative px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
              The makers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Hands behind every piece
            </h2>
          </div>
          <Link
            href="/community"
            className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white"
          >
            All artisans <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x gap-5 overflow-x-auto px-4 pb-10 pt-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {artisans.map((a, i) => (
            <article
              key={a.name}
              className={`group w-64 shrink-0 snap-start md:w-auto ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <ArtisanCard a={a} delay={i * 0.8} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningHub() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-[32px] bg-ink p-7 text-white">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-magenta/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-saffron/40 blur-3xl" />

      <div className="relative">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turmeric text-ink">
          <GraduationCap className="h-6 w-6" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
          Grow &amp; Learn
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
          Professional development for artisans
        </h3>
        <p className="mt-3 text-sm text-white/65">
          300+ free courses in Sinhala, Tamil and English.
        </p>

        <ul className="mt-6 space-y-2.5">
          {courses.slice(0, 3).map((c) => (
            <li
              key={c.title}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white/8 px-4 py-3 ring-1 ring-white/10"
            >
              <span className="text-sm font-medium">{c.title}</span>
              <span className="shrink-0 text-xs text-white/50">{c.lessons} lessons</span>
            </li>
          ))}
        </ul>

        <Link
          href="/learning-hub"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-ink transition hover:bg-turmeric"
        >
          Visit Learning Hub <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

function Featured() {
  return (
    <section className="rounded-t-[48px] bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-magenta">
              Shop by craft
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Featured Products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink/60 hover:text-ink"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category chips */}
        <div className="no-scrollbar -mx-4 mt-8 flex gap-2.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white"
          >
            <Sparkles className="h-4 w-4" />
            All crafts
          </Link>
          {categories.map(({ name, slug, icon: Icon }) => (
            <Link
              key={slug}
              href={`/products?category=${slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sand/70 px-4 py-2.5 text-sm font-medium text-ink/80 transition hover:bg-turmeric/40 hover:text-ink"
            >
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
          <LearningHub />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Artisans />
      <Featured />
    </>
  );
}
