import { mapsUrl } from "@/lib/site";

export default function LocationMap() {
  return (
    <div className="min-h-72 overflow-hidden rounded-lg bg-white shadow-xl">
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open location in Google Maps"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/map.jpg"
          alt="Map showing Neyveli Fabrication & Erection, Chennai"
          className="h-full min-h-72 w-full object-cover"
        />
      </a>
    </div>
  );
}
