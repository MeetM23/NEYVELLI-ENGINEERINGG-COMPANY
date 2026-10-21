import Link from "next/link";
import { Check } from "lucide-react";
import Photo from "@/components/ui/Photo";

export default function ServiceDetail({ service, index }) {
  const reversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <article
      id={service.slug}
      className={`scroll-mt-24 ${index % 2 === 0 ? "bg-white" : "bg-[#fdf7f3]"}`}
    >
      <div className="section-container grid items-center gap-10 py-14 lg:grid-cols-2">
        <div className={`overflow-hidden rounded-lg shadow-lg ${reversed ? "lg:order-2" : ""}`}>
          <Photo src={service.image} alt={service.title} className="h-64 w-full sm:h-80" />
        </div>

        <div>
          <span className="inline-grid h-12 w-12 place-items-center rounded-md bg-brand-gradient text-white">
            <Icon size={24} />
          </span>
          <h2 className="mt-4 text-2xl font-extrabold uppercase text-maroon">{service.title}</h2>
          <p className="mt-3 text-xs leading-relaxed text-neutral-700 sm:text-sm">
            {service.description}
          </p>

          {service.subServices && (
            <div className="mt-4 flex flex-wrap gap-2">
              {service.subServices.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand-dark"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          <ul className="mt-5 space-y-2.5">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-xs font-medium text-neutral-800">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
