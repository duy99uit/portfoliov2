import { nextBlog } from "@/assets";
import { appConfig } from "@/config/appConfig";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonOutline, ButtonPrimary } from "../Button";
import { ButtonNavigation } from "../Button/ButtonPrimary";
import NextImage from "../NextImage";

const Footer = (props: any) => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <a
            href="#"
            className="text-2xl font-bold text-gray-800  hover:text-gray-700 dark:hover:text-gray-300"
          >
            Brand
          </a>

          <p className="max-w-md mx-auto mt-2 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <ButtonPrimary>
              <FontAwesomeIcon icon={faDownload} />
              <span className="mx-1">View Demo</span>
            </ButtonPrimary>
            <ButtonOutline>Get started</ButtonOutline>
          </div>
        </div>
        <div className="mt-6 flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row ">
          <div className="ư-full sm:w-2/5 h-48 rounded-t-md overflow-hidden">
            <NextImage src={nextBlog} />
          </div>

          <div className=" flex flex-col  md:w-1/2 px-4 py-2">
            <h3 className=" text-blue-500 uppercase text-xl">
              DUY&apos;S BLOG
            </h3>
            <p className="my-2 text-base text-gray-900 md:text-sm line-clamp-2">
              Secion description content here Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Asperiores placeat aliquam ab maxime
              possimus voluptates aperiam illo sed soluta corporis molestiae,
              ducimus fuga voluptatem reiciendis unde dicta nihil neque non.
            </p>
            <div className="items-start mt-2">
              <ButtonNavigation>
                <span className="mr-2">See more </span>
                <FontAwesomeIcon icon={faArrowRight} />
              </ButtonNavigation>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200 " />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
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
