import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/home";

export default function CoreServices() {
  return (
    <section id="services" className="section-container scroll-mt-20 py-14">
      <SectionHeading
        title="Our Core Services"
        subtitle="End-to-end engineering solutions tailored to your project needs."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-lg bg-white p-5 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <s.icon className="text-brand" size={30} strokeWidth={1.6} />
            <h3 className="mt-3 text-sm font-bold text-maroon">{s.title}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
