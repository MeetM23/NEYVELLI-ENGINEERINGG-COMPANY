import Link from "next/link";
import { Check } from "lucide-react";
import Photo from "@/components/ui/Photo";
import { strengths, stats } from "@/lib/data/about";

export default function AboutPreview() {
  return (
    <section className="bg-white">
      <div className="section-container grid items-center gap-10 py-14 lg:grid-cols-2">
        <div className="relative">
          <Photo
            src="/img/about.jpg"
            alt="Crane lifting steel on a construction site"
            className="h-72 w-full rounded-lg shadow-lg sm:h-96"
          />
          <div className="bg-brand-gradient absolute -bottom-5 right-4 rounded-lg px-6 py-4 text-center text-white shadow-xl">
            <div className="text-3xl font-extrabold">{stats[0].value}</div>
            <div className="text-[11px]">{stats[0].label}</div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase text-brand">Who We Are</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase leading-tight text-maroon">
            Built on Experience. Driven by Commitment.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-neutral-700 sm:text-sm">
            Neyveli Fabrication &amp; Erection is a trusted engineering partner for industrial and
            commercial projects. From the first drawing to the final handover, our skilled team
            focuses on safe, precise and on-time execution, so you can focus on your business.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex items-center gap-3 text-xs font-medium">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-7 inline-block rounded bg-brand px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
