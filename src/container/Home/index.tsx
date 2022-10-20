import AboutSection from "@/components/AboutSection";
import AboutSectionV2 from "@/components/AboutSection/AboutSectionV2";
import IntroSection from "@/components/IntroSection";
import IntroSectionV2 from "@/components/IntroSection/IntroV2";
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
          {/* <NavBar /> */}
          <IntroSectionV2 />
          <AboutSectionV2 />
          {/* <AboutSection /> */}
          <SkillsSection />
          <ProjectSection />
        </>
      )}
    </>
  );
}
