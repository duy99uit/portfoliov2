import AboutSection from "@/components/AboutSection";
import IntroSectionV2 from "@/components/IntroSection/IntroV2";
import LoadingScreen from "@/components/loading/LoadingScreen";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import React, { useState, useEffect } from "react";

export default function TestContainer() {
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
        </>
      )}
    </>
  );
}
