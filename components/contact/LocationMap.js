import { mapsUrl } from "@/lib/site";

export default function LocationMap() {
  return (
    <div className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg bg-white shadow-xl">
      <iframe
        title="Neyveli Fabrication & Erection Location Map"
        src="https://maps.google.com/maps?q=Industrial+Estate,+Guindy,+Chennai,+Tamil+Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
        className="h-full min-h-[280px] w-full border-0 flex-1"
        loading="lazy"
        allowFullScreen
      />
      <div className="border-t border-neutral-100 bg-white p-3 text-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-brand hover:underline"
        >
          View on Google Maps &rarr;
        </a>
      </div>
    </div>
  );
}
