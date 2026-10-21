import { stats } from "@/lib/data/about";

export default function StatsBand() {
  return (
    <section className="bg-brand-gradient text-white">
      <div className="section-container grid grid-cols-2 gap-y-6 py-8 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={i > 0 ? "md:border-l md:border-white/30" : ""}>
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="mt-1 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
