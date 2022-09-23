import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import { ButtonPrimary } from "@/components/Button";
import ExpsSection from "@/components/ExpsSection";
import IntroSection from "@/components/IntroSection";
import MyModal from "@/components/Modal";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import { useState } from "react";

export default function HomeContainer() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <MyModal
        isOpenModal={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      />
      <div className="w-full flex justify-center py-12" id="button">
        <ButtonPrimary
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Open Modal
        </ButtonPrimary>
      </div>
      {/* <NavBar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ExpsSection />
      <ProjectSection />
      <BlogSection /> */}
      <ProjectSection />
    </>
  );
}
