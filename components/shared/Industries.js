import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/services";

export default function Industries() {
  return (
    <section className="bg-white">
      <div className="section-container py-14">
        <SectionHeading title="Industries We Serve" subtitle="Trusted by plants, factories and builders across sectors." />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-lg bg-[#fdf7f3] p-5 text-center ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="text-brand" size={30} strokeWidth={1.6} />
              <span className="text-[11px] font-semibold text-maroon">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
