import SectionHeading from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/data/about";

export default function WhyChooseUs() {
  return (
    <section className="bg-maroon-gradient text-white">
      <div className="section-container py-14">
        <SectionHeading
          light
          title="Why Choose Neyveli"
          subtitle="What you can count on when we take up your project."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <div key={w.title} className="flex gap-4 rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand">
                <w.icon size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold">{w.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-white/80">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
