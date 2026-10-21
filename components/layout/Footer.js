import Link from "next/link";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import { serviceDetails } from "@/lib/data/services";
import { contactInfo, footerLinks, navLinks, siteConfig } from "@/lib/site";

const headingClass = "text-sm font-bold uppercase tracking-wide text-white";
const linkClass = "transition hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="bg-maroon-gradient text-xs text-white/85">
      {/* CTA strip */}
      <div className="border-b border-white/15">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-lg font-extrabold uppercase text-white">
              Building Structures, Building Trust.
            </h2>
            <p className="mt-1 text-white/80">
              Have a project in mind? Let&apos;s talk about how we can help.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded bg-brand px-6 py-2.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="section-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.3fr]">
        <div>
          <Link href="/" aria-label="Neyveli home" className="inline-block rounded-lg bg-white px-3 py-2">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed">
            {siteConfig.name} delivers high-quality fabrication, erection, steel structure and
            manpower supply services for industrial and commercial projects across India.
          </p>
          <SocialLinks className="mt-5 justify-start" />
        </div>

        <nav aria-label="Quick links">
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={headingClass}>Our Services</h3>
          <ul className="mt-4 space-y-2.5">
            {serviceDetails.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Contact Us</h3>
          <ul className="mt-4 space-y-4">
            {contactInfo.map(({ icon: Icon, lines }) => (
              <li key={lines[0]} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Icon size={13} />
                </span>
                <span className="leading-relaxed">
                  {lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-maroon-deep">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          <p>
            © {siteConfig.year} {siteConfig.name}. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-3">
            {footerLinks.map((l, i) => (
              <li key={l.label} className="flex items-center gap-3">
                {i > 0 && <span className="h-3 w-px bg-white/40" aria-hidden="true" />}
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
