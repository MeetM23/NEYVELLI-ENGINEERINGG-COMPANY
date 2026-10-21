export default function SectionHeading({ title, subtitle, as: Tag = "h2", light = false, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <Tag className={`text-xl font-extrabold uppercase ${light ? "text-white" : "text-maroon"}`}>
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-2 text-xs ${light ? "text-white/80" : "text-neutral-600"}`}>{subtitle}</p>
      )}
    </div>
  );
}
