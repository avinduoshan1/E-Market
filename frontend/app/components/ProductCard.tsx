import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "../lib/data";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col rounded-[28px] border border-ink/5 bg-white p-3 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
      <div className="relative aspect-square overflow-hidden rounded-[22px] bg-sand">
        <span className="absolute left-3 top-3 z-10 rounded-full bg-magenta px-3 py-1 text-[11px] font-semibold text-white">
          {p.tag}
        </span>
        <button
          aria-label={`Save ${p.name}`}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink/70 backdrop-blur transition hover:text-magenta"
        >
          <Heart className="h-4 w-4" />
        </button>
        <Image
          src={p.src}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-ink">{p.name}</h3>
          <span className="shrink-0 font-bold tabular-nums text-ink">
            LKR {p.price.toLocaleString("en-LK")}
          </span>
        </div>
        <p className="mt-1 text-sm text-ink/55">{p.maker}</p>
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
