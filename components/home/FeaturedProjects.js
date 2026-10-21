import Link from "next/link";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="section-container py-14">
      <SectionHeading
        title="Featured Projects"
        subtitle="A few of the projects we have delivered for leading names."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.slice(0, 4).map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Photo src={p.image} alt={p.title} className="h-36 w-full" />
            <div className="p-3">
              <h3 className="text-xs font-bold text-maroon">{p.title}</h3>
              <p className="mt-1 text-[11px] text-neutral-500">{p.place}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-block rounded bg-brand-gradient px-8 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
