import { socials } from "@/lib/site";

export default function SocialLinks({ className = "justify-center" }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand-dark transition hover:bg-brand hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d={s.d} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
