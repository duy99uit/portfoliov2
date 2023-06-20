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

          <div className="py-24 w-full bg-black flex  justify-center items-center">
            <div className="w-2/5  rounded-2xl relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
              <div className="top-0 left-0 right-0 z-10 bg-gray-800 px-4 py-2 absolute justify-start item-start flex flex-row">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="pt-10 px-6 py-6">
                <h6 className="text-xl text-gray-500">{`// Technologies & Tools I used`}</h6>
                <h6 className="text-2xl text-blue-500 mt-4">{`Program Languages:`}</h6>
                <ul className="ml-4">
                  <li>
                    <p className="text-lg text-white">&#x2022; Typescript</p>
                  </li>
                  <li>
                    <p className="text-lg text-white">&#x2022; Javascript</p>
                  </li>
                </ul>
                <h6 className="text-2xl text-green-500 mt-2">{`Framework & Library: `}</h6>
                <ul className="ml-4">
                  <li>
                    <p className="text-lg text-white">&#x2022; React Native</p>
                  </li>
                  <li>
                    <p className="text-lg text-white">&#x2022; Next JS</p>
                  </li>
                  <li>
                    <p className="text-lg text-white">&#x2022; React JS</p>
                  </li>
                </ul>
                <h6 className="text-2xl text-purple-500 mt-2">{`Other Knowledge: `}</h6>
                <ul className="ml-4">
                  <li>
                    <p className="text-lg text-white">
                      &#x2022; UI Framework: MUI, TailwindCSS, Ant Design
                    </p>
                  </li>
                  <li>
                    <p className="text-lg text-white">
                      &#x2022; Source code management: GIT, Sourcetree
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <AboutSectionV2 />
          <ProjectSection />
          <ExpSectionV2 />
        </div>
      )}
    </>
  );
}
