import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a1612] text-white">
      <Photo
        src="/img/hero.jpg"
        alt="Steel structure under construction"
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[75%_30%] [mask-image:linear-gradient(to_right,transparent_0%,#000_45%)] md:w-[72%] md:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.5)_20%,#000_55%)]"
      />
      {/* keeps the headline readable on small screens, soft shade at the bottom for the highlights bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/80 to-transparent md:from-[#1a1612]/30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1a1612]/70 to-transparent" />
      <div className="section-container relative pb-36 pt-16 sm:pt-20">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">
          Building the Future
        </p>
        <h1 className="mt-3 max-w-xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
          Engineering Excellence in Every Structure
        </h1>
        <p className="mt-5 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
          We deliver high-quality Fabrication, Erection, Steel Structure and Manpower Supply
          services for Industrial, Commercial and Civil Projects across India.
        </p>
        <Link
          href="/services"
          className="mt-7 inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-xs font-semibold transition hover:bg-brand-dark"
        >
          Our Services <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
