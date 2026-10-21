import { Check } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { strengths } from "@/lib/data/about";

export default function AboutIntro() {
  return (
    <section className="bg-white">
      <div className="section-container grid items-start gap-8 py-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase text-brand">About Us</p>
          <h1 className="mt-2 text-2xl font-extrabold uppercase leading-tight text-maroon sm:text-3xl">
            Built on Experience.
            <br />
            Driven by Commitment.
          </h1>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-neutral-700">
            Neyveli is a trusted name in the field of Fabrication, Erection and Industrial
            Services. With years of experience and a skilled team, we have successfully executed
            projects across various sectors through e-tendering.
          </p>
          <ul className="mt-6 space-y-3">
            {strengths.map((p) => (
              <li key={p} className="flex items-center gap-3 text-xs font-medium">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg lg:h-80">
          <Photo
            src="/img/about.jpg"
            alt="Crane lifting steel on a construction site"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
