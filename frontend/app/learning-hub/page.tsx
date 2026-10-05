import type { Metadata } from "next";
import { BookOpen, GraduationCap, Languages, PlayCircle } from "lucide-react";
import PageIntro from "../components/PageIntro";
import { courses } from "../lib/data";

export const metadata: Metadata = {
  title: "Learning Hub — Lanka Women e-Market",
};

const levelColor: Record<string, string> = {
  Beginner: "bg-leaf/15 text-leaf",
  Intermediate: "bg-saffron/15 text-saffron",
  Advanced: "bg-magenta/15 text-magenta",
};

export default function LearningHubPage() {
  return (
    <>
      <PageIntro
        eyebrow="Grow & Learn"
        title="Professional development for artisans"
        description="300+ free courses in Sinhala, Tamil and English — from pricing your work to shipping it across the world."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { icon: BookOpen, label: "300+ courses" },
            { icon: Languages, label: "3 languages" },
            { icon: GraduationCap, label: "Free for sellers" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink"
            >
              <Icon className="h-4 w-4 text-magenta" />
              {label}
            </span>
          ))}
        </div>
      </PageIntro>

      <section className="rounded-t-[48px] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Popular courses
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-[28px] border border-ink/5 bg-cream p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${levelColor[c.level]}`}
                >
                  {c.level}
                </span>
                <h3 className="mt-4 flex-1 font-display text-xl font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-ink/55">
                  {c.lessons} lessons · {c.language}
                </p>
                <button className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink py-2.5 text-sm font-semibold text-white transition hover:bg-magenta">
                  <PlayCircle className="h-4 w-4" />
                  Start learning
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
