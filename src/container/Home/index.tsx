import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ExpsSection from "@/components/ExpsSection";
import IntroSection from "@/components/IntroSection";
import MyModal from "@/components/Modal";
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
      <BlogSection />
    </>
  );
}
