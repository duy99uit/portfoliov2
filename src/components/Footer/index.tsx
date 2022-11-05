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
