import type { Metadata } from "next";
import { CalendarDays, MapPin, MessageCircle, Users } from "lucide-react";
import ArtisanCard from "../components/ArtisanCard";
import PageIntro from "../components/PageIntro";
import { artisans } from "../lib/data";

export const metadata: Metadata = {
  title: "Community — Lanka Women e-Market",
};

const events = [
  { title: "Kandy makers' meetup", date: "18 Oct 2026", place: "Kandy City Centre" },
  { title: "Online: Photographing your products", date: "25 Oct 2026", place: "Zoom" },
  { title: "Galle craft fair", date: "8 Nov 2026", place: "Galle Fort" },
];

export default function CommunityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Community"
        title="A network of women who make"
        description="Meet the artisans behind every piece, swap ideas with other sellers and join meetups across the island."
      />

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Meet the makers
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artisans.map((a, i) => (
              <article key={a.name} className="group">
                <ArtisanCard a={a} delay={i * 0.8} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-t-[48px] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              Upcoming events
            </h2>
            <ul className="mt-8 space-y-4">
              {events.map((e) => (
                <li
                  key={e.title}
                  className="flex flex-col gap-3 rounded-[24px] border border-ink/5 bg-cream p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-ink">{e.title}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/55">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" /> {e.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {e.place}
                      </span>
                    </p>
                  </div>
                  <button className="rounded-full border border-ink/15 px-5 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-white">
                    RSVP
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative overflow-hidden rounded-[32px] bg-ink p-7 text-white">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-magenta/50 blur-3xl" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turmeric text-ink">
                <Users className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight">
                Join the seller community
              </h3>
              <p className="mt-3 text-sm text-white/65">
                Ask questions, share wins and learn from 1,200+ women-led shops.
              </p>
              <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-ink transition hover:bg-turmeric">
                <MessageCircle className="h-4 w-4" />
                Join the forum
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
