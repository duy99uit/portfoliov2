import AboutSection from "@/components/AboutSection";
import IntroSection from "@/components/IntroSection";
import LoadingScreen from "@/components/loading/LoadingScreen";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import React, { useState, useEffect } from "react";

export default function HomeContainer() {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoadingPage ? (
        <LoadingScreen />
      ) : (
        <>
          <NavBar />
          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
        </>
      )}
    </>
  );
}
