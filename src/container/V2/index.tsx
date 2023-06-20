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
              <div className=" bg-white mx-2">
                <div className="w-64 h-[32rem] bg-gray-50 rounded-2xl border-2 border-blue-900 flex flex-col p-2 items-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0   flex justify-center items-end -translate-y-2">
                    <div className="h-1 w-16 rounded bg-gray-700"></div>
                  </div>

                  <div className="h-80 w-60 object-contain rounded-t-lg  overflow-hidden relative">
                    <div className="w-full flex justify-center items-center absolute top-0 left-0 right-0 z-10 translate-y-2 ">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <div className="ml-2 w-12 h-2 rounded-md bg-gray-500"></div>
                    </div>
                    <Image
                      src="https://res.cloudinary.com/dxc0m9waq/image/upload/v1666197591/avatar_ezw5cm.jpg"
                      width={240 * 1.1}
                      height={320 * 1.1}
                      priority
                      alt={""}
                    />
                  </div>
                  <div className=" rounded-b-lg bg-gray-100 w-60 px-2 shadow pt-2 pb-3">
                    <h1 className=" text-gray-800 text-xl">
                      Doan The Duy
                      {/* <span className=" text-gray-600 text-xl">
                        , {currYear - 1999}
                      </span> */}
                    </h1>
                    <h4 className="text-sm text-gray-500 mt-1">
                      Mobile Developer at Ho Chi Minh
                    </h4>
                  </div>
                  <div className="flex flex-row justify-center p-2  mt-4">
                    <a href={Links.linkedin} target="_blank" rel="noreferrer">
                      <div
                        className={
                          "w-10 h-10 rounded-full flex bg-blue-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          color="#0ea5e9"
                        />
                      </div>
                    </a>
                    <a href={Links.github} target="_blank" rel="noreferrer">
                      <div
                        className={
                          "w-12 h-12 rounded-full flex bg-purple-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="lg"
                          color="#7e22ce"
                        />
                      </div>
                    </a>
                    <a href={Links.faceBook} target="_blank" rel="noreferrer">
                      <div
                        className={
                          "w-12 h-12 rounded-full flex bg-blue-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          color="#4338ca"
                        />
                      </div>
                    </a>
                    <a href={Links.instagram} target="_blank" rel="noreferrer">
                      <div
                        className={
                          "w-10 h-10 rounded-full flex bg-yellow-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          color="#eab308"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" bg-white mx-2">
                <AppleText text={"Doan The Duy"} />
              </div>
            </div>

            <AppleButton />
          </div>

          <div className="h-screen w-full bg-red-500 min-h-screen"></div>
        </div>
      )}
    </>
  );
}
