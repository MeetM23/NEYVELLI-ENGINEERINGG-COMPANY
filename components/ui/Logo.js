export default function Logo({ size = "md", className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/img/logo.png"
      alt="Neyveli Fabrication & Erection"
      className={`w-auto mix-blend-multiply ${size === "lg" ? "h-40" : "h-12"} ${className}`}
    />
  );
}
