import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="bg-maroon-gradient text-white">
      <div className="section-container grid gap-8 py-12 lg:grid-cols-[1fr_1.1fr_1fr]">
        <ContactInfo />
        <ContactForm />
        <LocationMap />
      </div>
    </section>
  );
}
