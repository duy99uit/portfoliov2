import { nextBlog } from "@/assets";
import { appConfig } from "@/config/appConfig";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonOutline, ButtonPrimary } from "../Button";
import { ButtonNavigation } from "../Button/ButtonPrimary";
import NextImage from "../NextImage";

const Footer = (props: any) => {
  return (
    <footer className="bg-gray-800">
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center">
          <p className="text-2xl  text-white">
            Thanks for visiting my website. Have a nice day !
          </p>

          <div className="flex  mt-4  items-center justify-center">
            <ButtonPrimary>
              <FontAwesomeIcon icon={faDownload} />
              <span className="mx-1">Download CV</span>
            </ButtonPrimary>
          </div>
        </div>
        <div className="mt-6 flex flex-col max-w-4xl mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg md:flex-row ">
          <div className="w-full md:w-2/5 h-48 rounded-t-md md:rounded-l-md md:rounded-t-none overflow-hidden">
            <NextImage src={nextBlog} />
          </div>

          <div className="flex flex-col w-full md:w-3/5  px-4 py-4 bg-gradient-to-r from-purple-500 to-purple-900">
            <h3 className=" text-blue-500 uppercase text-2xl">
              Visit Duy&apos;S Blog
            </h3>
            <p className="my-2 text-base text-white  line-clamp-2">
              This is my offical Blog, used NextJS, Notion and Vercel
              <br /> It&apos;s like a diary for keeping milestones.
            </p>
            <div className="items-start mt-2">
              <ButtonNavigation>
                <span className="mr-2">View now </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </ButtonNavigation>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200 " />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright {new Date().getFullYear()}. Designed by Duy.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {["Blog", "Linkedin"].map((item) => {
              return (
                <a
                  key={item}
                  href="#"
                  className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                  aria-label="Reddit"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
