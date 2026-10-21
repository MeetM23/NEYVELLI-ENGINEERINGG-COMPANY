import SectionHeading from "@/components/ui/SectionHeading";
import { expertise } from "@/lib/data/about";

export default function Expertise() {
  return (
    <section className="section-container py-12">
      <SectionHeading title="Our Expertise" />
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {expertise.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-3 ${
              i > 0 ? "lg:border-l lg:border-neutral-200" : ""
            }`}
          >
            <Icon className="text-brand" size={34} strokeWidth={1.5} />
            <span className="text-xs font-semibold text-maroon">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
