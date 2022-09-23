import AboutSection from "@/components/AboutSection";
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
      <ProjectSection />
    </>
  );
}
