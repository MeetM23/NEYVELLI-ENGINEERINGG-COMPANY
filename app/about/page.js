import AboutIntro from "@/components/about/AboutIntro";
import StatsBand from "@/components/about/StatsBand";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Expertise from "@/components/about/Expertise";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <StatsBand />
      <MissionVision />
      <CoreValues />
      <Expertise />
      <WhyChooseUs />
    </>
  );
}
