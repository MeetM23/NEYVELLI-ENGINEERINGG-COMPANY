import Hero from "@/components/home/Hero";
import HighlightsBar from "@/components/home/HighlightsBar";
import CoreServices from "@/components/home/CoreServices";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import ProcessSteps from "@/components/shared/ProcessSteps";
import Industries from "@/components/shared/Industries";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightsBar />
      <CoreServices />
      <AboutPreview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessSteps />
      <Industries />
    </>
  );
}
