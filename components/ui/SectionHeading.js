export default function SectionHeading({ title, subtitle, as: Tag = "h2", className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <Tag className="text-xl font-extrabold uppercase text-maroon">{title}</Tag>
      {subtitle && <p className="mt-2 text-xs text-neutral-600">{subtitle}</p>}
    </div>
  );
}
