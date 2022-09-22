import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ExpsSection from "@/components/ExpsSection";
import MyModal from "@/components/Modal";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomeContainer() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ExpsSection />
      <ProjectSection />
      <BlogSection />
    </>
  );
}
