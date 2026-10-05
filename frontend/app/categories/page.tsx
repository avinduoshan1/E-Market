import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { categories, products } from "../lib/data";

export const metadata: Metadata = {
  title: "Categories — Lanka Women e-Market",
};

const accents = ["bg-magenta", "bg-saffron", "bg-turmeric", "bg-leaf"];

export default function CategoriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Categories"
        title="Shop by heritage craft"
        description="From Beeralu lace on the southern coast to handloom in the hill country — explore the crafts our makers keep alive."
      />

      <section className="rounded-t-[48px] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, slug, icon: Icon, blurb }, i) => {
            const count = products.filter((p) => p.category === slug).length;
            return (
              <Link
                key={slug}
                href={`/products?category=${slug}`}
                className="group flex flex-col rounded-[28px] border border-ink/5 bg-cream p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${accents[i % accents.length]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-ink" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">{name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{blurb}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                  {count > 0 ? `${count} ${count === 1 ? "product" : "products"}` : "Coming soon"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
