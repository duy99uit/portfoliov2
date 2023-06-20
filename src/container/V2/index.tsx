import AboutSectionV2 from "@/components/AboutSection/AboutSectionV2";
import IntroSectionV2 from "@/components/IntroSection/IntroV2";
import LoadingScreen from "@/components/loading/LoadingScreen";
import ProjectSection from "@/components/ProjectSection";
import ExpSectionV2 from "@/components/SkillsSection/ExpSectionV2";
import { useEffect, useState } from "react";
import Header from "./Header";
import { AppleText } from "../common/AppleText"; // Import the custom CSS file
import { AppleButton } from "../common/AppleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Links } from "@/config/constant";
import Image from "next/image";
import { motion } from "framer-motion";
import { Iphone } from "../common/IPhone";
export default function HomeV2() {
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
        <div className="bg-black relative">
          <Header />
          <div className="h-screen w-full bg-black min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center">
              <div className=" mx-4">
                <Iphone />
              </div>
              <div className=" mx-4 flex flex-col justify-center items-start max-w-2xl">
                <AppleText text={"Doan The Duy"} />
                <h6 className="text-3xl text-white mt-4 mb-8">
                  I really enjoy creating beautifully designed, intuitive,
                  functional and trendy products.
                </h6>
                <AppleButton text="View Github Profile" />
              </div>
            </div>
          </div>

          <div className="h-screen w-full bg-red-500 min-h-screen"></div>
        </div>
      )}
    </>
  );
}
