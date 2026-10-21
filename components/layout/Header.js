"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Neyveli home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[13px] font-medium text-neutral-800 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`border-b-2 py-1 transition-colors hover:text-brand ${
                l.href === pathname ? "border-brand text-brand" : "border-transparent"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded bg-brand px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-dark sm:inline-block"
          >
            Get a Quote
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t bg-white px-6 py-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm font-medium ${
                l.href === pathname ? "text-brand" : "text-neutral-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
