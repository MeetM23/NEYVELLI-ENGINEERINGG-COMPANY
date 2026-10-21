import AboutIntro from "@/components/about/AboutIntro";
import StatsBand from "@/components/about/StatsBand";
import Expertise from "@/components/about/Expertise";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <StatsBand />
      <Expertise />
    </>
  );
}
