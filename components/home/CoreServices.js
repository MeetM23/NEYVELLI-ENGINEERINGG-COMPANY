import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceDetails } from "@/lib/data/services";

export default function CoreServices() {
  return (
    <section id="services" className="section-container scroll-mt-20 py-14">
      <SectionHeading
        title="Our Core Services"
        subtitle="End-to-end engineering solutions tailored to your project needs."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceDetails.slice(0, 4).map((s) => (
          <Link
            key={s.slug}
            href={`/services#${s.slug}`}
            className="group rounded-lg bg-white p-5 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <s.icon className="text-brand" size={30} strokeWidth={1.6} />
            <h3 className="mt-3 text-sm font-bold text-maroon">{s.title}</h3>
            <p className="mt-2 text-[11px] leading-relaxed text-neutral-600">{s.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-brand">
              Learn more
              <ArrowRight size={12} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="inline-block rounded bg-brand-gradient px-8 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
