import SectionHeading from "@/components/ui/SectionHeading";
import { values } from "@/lib/data/about";

export default function CoreValues() {
  return (
    <section className="bg-white">
      <div className="section-container py-14">
        <SectionHeading title="Our Core Values" subtitle="The principles behind every project we take up." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg bg-[#fdf7f3] p-6 text-center ring-1 ring-black/5">
              <v.icon className="mx-auto text-brand" size={34} strokeWidth={1.5} />
              <h3 className="mt-3 text-sm font-bold text-maroon">{v.title}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
