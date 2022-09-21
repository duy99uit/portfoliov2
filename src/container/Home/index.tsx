import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ExpsSection from "@/components/ExpsSection";
import MyModal from "@/components/Modal";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomeContainer() {
  return (
    <div className="bg-white pt-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row  w-full flex-wrap">
        {/* <MyModal /> */}
        <AboutSection />
        <SkillsSection />
        <ExpsSection />
        <ProjectSection />
        <BlogSection />
      </div>
    </div>
  );
}
