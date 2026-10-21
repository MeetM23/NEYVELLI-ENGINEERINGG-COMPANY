import Link from "next/link";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-maroon-gradient text-white">
      <div className="section-container py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-[11px] text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        <h1 className="mt-3 text-3xl font-extrabold uppercase sm:text-4xl">{title}</h1>
        <span className="mt-4 block h-1 w-14 rounded bg-brand" />
        {subtitle && <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/85 sm:text-sm">{subtitle}</p>}
      </div>
    </section>
  );
}
