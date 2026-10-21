import { contactInfo } from "@/lib/site";

export default function ContactInfo() {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-brand">Get in Touch</p>
      <h1 className="mt-2 text-2xl font-bold leading-snug">
        We are here to support your next project
      </h1>
      <ul className="mt-8 space-y-6">
        {contactInfo.map(({ icon: Icon, lines }) => (
          <li key={lines[0]} className="flex items-start gap-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand">
              <Icon size={16} />
            </span>
            <span className="text-xs leading-relaxed">
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
  );
}
