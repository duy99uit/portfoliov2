import AboutSectionV2 from "@/components/AboutSection/AboutSectionV2";
import IntroSectionV2 from "@/components/IntroSection/IntroV2";
import LoadingScreen from "@/components/loading/LoadingScreen";
import ProjectSection from "@/components/ProjectSection";
import ExpSectionV2 from "@/components/SkillsSection/ExpSectionV2";
import { useEffect, useState } from "react";
import Header from "./Header";
import { AppleText } from "../common/AppleText"; // Import the custom CSS file
import { AppleButton, LinkedinButton } from "../common/AppleButton";
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
import { SectionHeading } from "../common/SectionHeading";
import { faRocket, faUsers, faClock } from "@fortawesome/free-solid-svg-icons";
import { expData } from "@/config/expData";
import { projects } from "@/config/projectData";

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
          <div className="min-h-screen w-full bg-black  flex justify-center items-center sm:h-screen">
            <div className="container mx-auto flex justify-center items-center flex-col sm:flex-row">
              <div className="mx-4 pt-24 pb-4 sm:pt-0 sm:pb-0 min-h-screen sm:min-h-0">
                <Iphone />
              </div>
              <div className="mx-4 flex flex-col justify-center items-start max-w-2xl">
                <AppleText text={"Doan The Duy"} />
                <h6 className="text-3xl text-white mt-4 mb-8">
                  I really enjoy creating beautifully designed, intuitive,
                  functional and trendy products.
                </h6>
                <AppleButton text="View Github Profile" />
              </div>
            </div>
          </div>

          <div className="py-8 md:py-24 container px-4 sm:px-0 sm:mx-auto bg-black flex flex-col sm:flex-row justify-between items-start">
            <div className="w-full sm:w-1/2  sm:p-10 sm:pt-4  rounded-2xl relative bg-gradient-to-b flex flex-col justify-start items-start">
              <SectionHeading text="About Me." />
              <h6 className="text-2xl text-white mt-8 mb-8">
                I focus on user experience and am interested in optimizing
                product performance to develop products that work correctly, are
                easy to use, and run smoothly on most devices.
              </h6>
              <div className="flex justify-start items-center flex-row">
                <AppleButton text="Get My Resume" />
                <div className="ml-4">
                  <LinkedinButton text="Linkedin" />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mt-8 sm:mt-0 rounded-2xl relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
              <div className="top-0 left-0 right-0 z-10 bg-gray-800 px-4 py-2 absolute justify-start item-start flex flex-row">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-10">
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
          <div className="w-full bg-gradient-to-b from-black to-gray-900 py-8 min-h-screen h-auto px-4 sm:px-0">
            <div className="container w-full mx-auto flex flex-col">
              <div className="text-right mb-4">
                <SectionHeading text="Experiences." />
              </div>
              {expData.map((item, index) => {
                const _position = index % 2 !== 0 ? "ml-auto" : "mr-auto";
                return (
                  <div
                    key={item.id}
                    className={`w-full lg:w-4/5 ${_position} my-4 px-0 lg:px-4`}
                  >
                    <div className="p-[1px] bg-gradient-to-b from-gray-900 hover:from-blue-300 to-gray-800 hover:to-blue-500 rounded-3xl transition-colors duration-300 ">
                      <div className="bg-gradient-to-b from-black to-gray-900 w-full h-full rounded-3xl p-4 md:p-8 ">
                        <div className="flex flex-row justify-start items-center">
                          <div className="h-[100px] w-[100px] rounded-full  bg-gradient-to-b from-blue-300 to-blue-500 p-[2px]">
                            <div className="w-24 h-24 rounded-full">
                              <img
                                className="w-full h-full object-cover rounded-full"
                                src={item.logo}
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="p-2 ml-2 sm:ml-4">
                            <h6 className="text-white text-2xl sm:text-3xl font-medium mb-1">
                              {item.companyName}
                            </h6>
                            <p className="text-blue-500 text-lg sm:text-xl">
                              {item.role}
                            </p>
                            <div className="flex flex-row justify-start items-center mt-2">
                              <p className="text-sm text-white px-2 py-1 rounded-xl bg-gradient-to-b from-blue-500 to-blue-400 block">
                                {item.time}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mt-4 border-t border-gray-900 p-2 sm:p-4">
                          <h6 className="text-lg sm:text-xl text-gray-100 ">
                            Projects:
                            <span className="text-blue-300 ml-4 text-lg sm:text-xl">
                              {item.project}
                            </span>
                          </h6>
                          <h6 className="text-base sm:text-lg text-gray-300 font-semibold mt-1">
                            Technologies:
                            <span className=" ml-4 text-base sm:text-lg">
                              {item.techs}
                            </span>
                          </h6>
                          <h6 className=" text-base sm:text-xl text-white  mt-2">
                            <FontAwesomeIcon
                              icon={faRocket}
                              size="sm"
                              color={"rgba(243 ,244 ,246,0.9)"}
                            />{" "}
                            Contributions:
                          </h6>
                          <div className="ml-6">
                            {item?.detail?.map((_detail) => {
                              return (
                                <p
                                  key={_detail}
                                  className="text-base sm:text-lg text-gray-400 font-light mt-1"
                                >
                                  &#x2022; {_detail}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <section
            id="scroll-section"
            className="w-full bg-gradient-to-b from-gray-900 to-black py-8 min-h-screen h-auto px-4 sm:px-0"
          >
            <div className="container w-full mx-auto flex flex-col">
              <div className="text-center">
                <SectionHeading text="Recent Project." />
                <div className="flex flex-row flex-wrap justify-start items-center w-full mt-6">
                  {projects.map((item) => {
                    return (
                      <div
                        key={item.title}
                        className="w-full sm:w-1/2 lg:w-1/2 px-0 py-2 sm:p-2"
                      >
                        <div className="p-[1px] bg-gray-800 hover:bg-gray-700 rounded-2xl ">
                          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden ">
                            <div className="h-48 w-full "></div>
                            <div className=" w-full bg-gradient-to-b from-black to-black hover:from-black hover:to-gray-800 p-4 text-left">
                              <h6 className="text-2xl text-white font-semibold text-left">
                                {item.title}
                                <span className="text-sm pl-2 text-sky-500 inline-block">
                                  &#x2022; {item.projectCategory}
                                </span>
                              </h6>
                              <p className="text-base text-gray-500  text-left mt-3">
                                {item.desc}
                              </p>

                              <div className="mt-1">
                                <span className="text-base font-light text-blue-500">
                                  <FontAwesomeIcon
                                    style={{ marginRight: 12 }}
                                    icon={faClock}
                                    size="sm"
                                    color={"rgba(243 ,244 ,246,0.9)"}
                                  />

                                  {item.time}
                                </span>
                                <span className="text-base font-light text-blue-500 ml-8">
                                  <FontAwesomeIcon
                                    style={{ marginRight: 12 }}
                                    icon={faUsers}
                                    size="sm"
                                    color={"rgba(243 ,244 ,246,0.9)"}
                                  />

                                  {`Teamsize: ${item.teamSize}`}
                                </span>
                              </div>
                              <div className="mt-4 flex justify-start items-center flex-wrap">
                                {item.technology.map((technology) => {
                                  return (
                                    <div
                                      key={technology}
                                      className="py-1 px-3 bg-gradient-to-br from-blue-500 to-blue-400 ml-3 rounded-lg mb-3"
                                    >
                                      <p className="text-base text-white ">
                                        {technology}
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* <ProjectSection /> */}
        </div>
      )}
    </>
  );
}
