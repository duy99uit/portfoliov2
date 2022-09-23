import AboutSection from "@/components/AboutSection";
import ExpsSection from "@/components/ExpsSection";
import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomeContainer() {
  return (
    <>
      <NavBar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExpsSection />
      <ProjectSection />
    </>
  );
}
