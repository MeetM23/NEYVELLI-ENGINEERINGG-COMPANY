"use client";

import { useState } from "react";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectFilters, projects } from "@/lib/data/projects";

export default function ProjectGallery() {
  const [active, setActive] = useState(projectFilters[0]);
  const shown =
    active === "All Projects" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="section-container py-12 text-center">
      <SectionHeading
        as="h1"
        title="Our Projects"
        subtitle="A glimpse of our successfully completed projects"
      />

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={`rounded px-4 py-2 text-[11px] font-semibold transition ${
              active === f
                ? "bg-brand text-white"
                : "bg-white text-neutral-700 ring-1 ring-black/10 hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shown.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-lg bg-white text-left shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Photo src={p.image} alt={p.title} className="h-36 w-full" />
            <div className="p-3">
              <h3 className="text-xs font-bold text-maroon">{p.title}</h3>
              <p className="mt-1 text-[11px] text-neutral-500">{p.place}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="bg-brand-gradient mt-8 rounded px-8 py-2.5 text-xs font-semibold text-white transition hover:opacity-90">
        View More Projects
      </button>
    </section>
  );
}
