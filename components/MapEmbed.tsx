import { STUDIO } from "@/lib/studio";

export function MapEmbed() {
  const query = encodeURIComponent(STUDIO.fullAddress);
  return (
    <div className="rounded-[20px] overflow-hidden border border-bb-line shadow-md">
      <iframe
        title={`Map to ${STUDIO.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[480px] border-0"
      />
    </div>
  );
}
