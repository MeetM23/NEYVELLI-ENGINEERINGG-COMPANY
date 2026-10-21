import { highlights } from "@/lib/data/home";

export default function HighlightsBar() {
  return (
    <div className="section-container relative z-10 -mt-24">
      <div className="bg-brand-gradient grid grid-cols-2 gap-y-4 rounded-lg p-5 text-white shadow-xl md:grid-cols-4">
        {highlights.map((h, i) => (
          <div
            key={h.a}
            className={`flex items-center justify-center gap-3 ${
              i > 0 ? "md:border-l md:border-white/30" : ""
            }`}
          >
            <span className="rounded-md border border-white/60 p-2">
              <h.icon size={20} />
            </span>
            <span className="text-xs font-semibold leading-tight">
              {h.a}
              <br />
              {h.b}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
