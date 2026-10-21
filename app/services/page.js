import PageBanner from "@/components/ui/PageBanner";
import ServiceDetail from "@/components/services/ServiceDetail";
import ProcessSteps from "@/components/shared/ProcessSteps";
import Industries from "@/components/shared/Industries";
import { serviceDetails } from "@/lib/data/services";

export const metadata = {
  title: "Services",
  description:
    "Fabrication & erection, steel structures, equipment erection, manpower supply and e-tender project support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="End-to-end fabrication, erection and manpower solutions for industrial and commercial projects."
      />
      {serviceDetails.map((s, i) => (
        <ServiceDetail key={s.slug} service={s} index={i} />
      ))}
      <ProcessSteps />
      <Industries />
    </>
  );
}
