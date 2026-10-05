import Image from "next/image";
import type { Artisan } from "../lib/data";

export default function ArtisanCard({ a, delay = 0 }: { a: Artisan; delay?: number }) {
  return (
    <div
      className="animate-float rounded-[28px] bg-white p-2.5 shadow-xl shadow-ink/10 transition duration-300 group-hover:-rotate-1 group-hover:shadow-2xl"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-72 overflow-hidden rounded-[22px]">
        <div
          className="absolute inset-0"
          style={{ transform: `scale(${a.zoom})`, transformOrigin: a.position }}
        >
          <Image
            src={a.src}
            alt={`${a.name}, ${a.craft}`}
            fill
            sizes="(min-width: 768px) 40vw, 480px"
            className="object-cover transition duration-500 group-hover:scale-105"
            style={{ objectPosition: a.position }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
        <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-ink">
          {a.location}
        </span>
        <div className="absolute inset-x-4 bottom-4 text-white">
          <h3 className="font-display text-lg font-bold leading-tight">{a.name}</h3>
          <p className="text-sm text-white/80">{a.craft}</p>
        </div>
      </div>
    </div>
  );
}
