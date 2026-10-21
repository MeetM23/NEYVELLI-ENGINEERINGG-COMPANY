import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data/services";

export default function ProcessSteps() {
  return (
    <section className="section-container py-14">
      <SectionHeading title="How We Work" subtitle="A simple, transparent process from first call to final handover." />
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-white shadow-md">
              <s.icon size={24} />
            </div>
            <span className="absolute -top-2 left-1/2 ml-3 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-bold text-maroon shadow ring-1 ring-black/10">
              {i + 1}
            </span>
            <h3 className="mt-4 text-sm font-bold text-maroon">{s.title}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
