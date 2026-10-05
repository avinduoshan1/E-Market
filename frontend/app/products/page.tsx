import type { Metadata } from "next";
import Link from "next/link";
import { PackageOpen, Search, Sparkles } from "lucide-react";
import PageIntro from "../components/PageIntro";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../lib/data";

export const metadata: Metadata = {
  title: "Products — Lanka Women e-Market",
};

export default async function ProductsPage(props: PageProps<"/products">) {
  const searchParams = await props.searchParams;
  const category = typeof searchParams.category === "string" ? searchParams.category : "";
  const q = typeof searchParams.q === "string" ? searchParams.q.trim() : "";

  const active = categories.find((c) => c.slug === category);
  const results = products.filter(
    (p) =>
      (!active || p.category === active.slug) &&
      (!q || `${p.name} ${p.maker}`.toLowerCase().includes(q.toLowerCase())),
  );

  const chip = (selected: boolean) =>
    `inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
      selected ? "bg-ink text-white" : "bg-white/70 text-ink/80 hover:bg-turmeric/40 hover:text-ink"
    }`;

  return (
    <>
      <PageIntro
        eyebrow="Shop"
        title={active ? active.name : "All handmade products"}
        description={
          active
            ? active.blurb
            : "Every piece is made by a woman-led enterprise in Sri Lanka and shipped straight from her workshop."
        }
      >
        <form
          role="search"
          action="/products"
          className="glass mt-8 flex max-w-xl items-center gap-2 rounded-full p-2"
        >
          {active && <input type="hidden" name="category" value={active.slug} />}
          <label className="flex flex-1 items-center gap-2 px-4">
            <Search className="h-4 w-4 shrink-0 text-ink/50" />
            <span className="sr-only">Search products</span>
            <input
              name="q"
              type="search"
              defaultValue={q}
              placeholder="Search batik, baskets, lace…"
              className="w-full bg-transparent py-2.5 text-sm text-ink outline-none placeholder:text-ink/45"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-magenta/30 transition hover:bg-magenta-dark"
          >
            Search
          </button>
        </form>

        <div className="no-scrollbar -mx-4 mt-6 flex gap-2.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          <Link href="/products" className={chip(!active)}>
            <Sparkles className="h-4 w-4" />
            All crafts
          </Link>
          {categories.map(({ name, slug, icon: Icon }) => (
            <Link key={slug} href={`/products?category=${slug}`} className={chip(active?.slug === slug)}>
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          ))}
        </div>
      </PageIntro>

      <section className="rounded-t-[48px] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-ink/55">
            {results.length} {results.length === 1 ? "product" : "products"}
            {q && <> for “{q}”</>}
          </p>

          {results.length > 0 ? (
            <div className="mt-6 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((p) => (
                <ProductCard key={p.name} p={p} />
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center rounded-[32px] bg-sand/50 px-6 py-16 text-center">
              <PackageOpen className="h-10 w-10 text-saffron" />
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                New pieces coming soon
              </h2>
              <p className="mt-2 max-w-md text-sm text-ink/60">
                Our makers are listing new work every week. Try another category or browse
                everything.
              </p>
              <Link
                href="/products"
                className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-magenta"
              >
                View all products
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
