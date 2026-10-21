export default function Photo({ src, alt = "", className = "" }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />;
}
