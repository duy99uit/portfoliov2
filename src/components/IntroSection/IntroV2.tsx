import { Links, resource } from "@/config/constant";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import NextImage from "../NextImage";
import { motion, AnimatePresence } from "framer-motion";

const IntroSectionV2 = (props: any) => {
  const currYear = new Date().getFullYear();
  return (
    <section className="bg-gray-900 min-h-screen items-center justify-center flex">
      <div className="container flex flex-col  md:flex-row items-center justify-center px-4 py-12 mx-auto ">
        <div className="flex justify-center items-center h-screen md:h-96 p-4">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.75 }}
              exit={{ opacity: 0 }}
              className="w-64 h-[32rem] bg-gray-50 rounded-2xl border-2 border-blue-900 flex flex-col p-2 items-center relative overflow-hidden"
            >
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
                  layout="responsive"
                  objectFit="cover"
                  alt={""}
                />
              </div>
              <div className=" rounded-b-lg bg-gray-100 w-60 px-2 shadow pt-2 pb-3">
                <h1 className=" text-gray-800 text-xl">
                  Doan The Duy
                  <span className=" text-gray-600 text-xl">
                    , {currYear - 1999}
                  </span>
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
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          <div className="flex justify-center md:items-start flex-col w-full md:w-1/2 h-screen md:h-96 p-4 ">
            <motion.div
              key={"hhh"}
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.75 }}
              exit={{ opacity: 0 }}
            >
              <h1 className=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 ">
                My name is Doan The Duy
              </h1>
              <p className=" mt-4  text-white max-w-md  text-lg">
                I really enjoy creating beautifully designed, intuitive,
                functional and trendy products.
              </p>

              <p className="mt-8 text-xl text-gray-300 ">Technology I know</p>
              <div className="flex flex-row flex-wrap justify-center items-cente mt-4"></div>

              <div className="grid gap-4  grid-cols-2 grid-rows-2 mt-2">
                <div className="flex justify-center items-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-600 min-w-36 px-2 py-3 text-white  transition ease-in-out">
                  <div className="flex-none w-8 h-8 rounded overflow-hidden">
                    <NextImage src={resource.React} objectFit="contain" />
                  </div>

                  <h4 className="ml-2 text-white">React Native</h4>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-600 min-w-36 px-2 py-3 text-white  transition ease-in-out">
                  <div className="flex-none w-8 h-8 rounded overflow-hidden">
                    <NextImage src={resource.Typescript} objectFit="contain" />
                  </div>

                  <h4 className="ml-2 text-white">Typescript</h4>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-600 min-w-36 px-2 py-3 text-white  transition ease-in-out">
                  <div className="flex-none w-8 h-8 rounded overflow-hidden">
                    <NextImage src={resource.Javascript} objectFit="contain" />
                  </div>

                  <h4 className="ml-2 text-white">Javascript</h4>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-600 min-w-36 px-2 py-3 text-white  transition ease-in-out">
                  <div className="flex-none w-8 h-8 rounded overflow-hidden">
                    <NextImage src={resource["Next JS"]} objectFit="contain" />
                  </div>

                  <h4 className="ml-2 text-white">Next JS</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};
export default IntroSectionV2;
