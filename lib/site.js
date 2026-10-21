import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const siteConfig = {
  name: "Neyveli Fabrication & Erection",
  shortName: "Neyveli",
  description:
    "Fabrication, erection, steel structure, equipment erection and manpower supply for industrial and commercial projects across India.",
  year: 2024,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export const contactInfo = [
  { icon: Phone, lines: ["+91 94444 12345", "+91 94444 67890"] },
  { icon: Mail, lines: ["info@neyvelifeb.com", "projects@neyvelifeb.com"] },
  {
    icon: MapPin,
    lines: ["No. 123, Industrial Estate,", "Guindy, Chennai - 600032,", "Tamil Nadu, India"],
  },
  { icon: Clock, lines: ["Mon - Sat: 9:00 AM - 6:00 PM"] },
];

export const mapsUrl = "https://www.google.com/maps?q=Guindy,Chennai,Tamil+Nadu";

export const socials = [
  { label: "Facebook", href: "#", d: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z" },
  {
    label: "LinkedIn",
    href: "#",
    d: "M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 5h4v1.5c.6-1 1.9-1.8 3.5-1.8 3 0 3.5 2 3.5 4.6V20h-4v-5.6c0-1.3 0-2.4-1.5-2.4S15 13 15 14.3V20h-4z",
  },
  {
    label: "Twitter",
    href: "#",
    d: "M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.7 4.8a4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.6 3.2 4a4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.3 11.4 11.4 0 0 0 8.2 20c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2.3-2.1z",
  },
  {
    label: "YouTube",
    href: "#",
    d: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.200C2 8.8 2 12 2 12s0 3.2.4 4.800a2.5 2.5 0 0 0 1.8 1.800C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.800c.4-1.6.4-4.8.4-4.800s0-3.2-.4-4.800zM10 15V9l5 3z",
  },
];
