import { Eye, Target } from "lucide-react";
import { mission, vision } from "@/lib/data/about";

const cards = [
  { icon: Target, title: "Our Mission", text: mission },
  { icon: Eye, title: "Our Vision", text: vision },
];

export default function MissionVision() {
  return (
    <section className="section-container grid gap-6 py-14 md:grid-cols-2">
      {cards.map((c) => (
        <div key={c.title} className="rounded-lg bg-white p-7 shadow-md ring-1 ring-black/5">
          <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-gradient text-white">
            <c.icon size={24} />
          </span>
          <h2 className="mt-4 text-lg font-extrabold uppercase text-maroon">{c.title}</h2>
          <p className="mt-3 text-xs leading-relaxed text-neutral-700 sm:text-sm">{c.text}</p>
        </div>
      ))}
    </section>
  );
}
