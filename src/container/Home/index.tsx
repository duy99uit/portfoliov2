import AboutSection from "@/components/AboutSection";
import ExpsSection from "@/components/ExpsSection";
import IntroSection from "@/components/IntroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import { useState } from "react";

export default function HomeContainer() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
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
