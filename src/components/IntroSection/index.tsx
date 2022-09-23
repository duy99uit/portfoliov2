import Tag from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleLine,
  faMobileAndroid,
  faTabletAndroid,
} from "@fortawesome/free-solid-svg-icons";
import NextImage from "../NextImage";

const IntroSection = (props: any) => {
  return (
    <section className="bg-gray-900 min-h-screen items-center justify-center flex">
      <div className="container flex flex-col items-center justify-center px-4 py-12 mx-auto ">
        <div className="flex justify-center mb-8 mt-4 sm:mt-0 ">
          <div className="h-28 w-28  flex-shrink-0 object-cover rounded-full border-4 border-gray-500 overflow-hidden">
            <NextImage src="https://duy99uit.github.io/img/duyduy.jpg" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-6  xl:mt-0">
          <h2 className="text-2xl  tracking-tight text-blue-700 font-medium text-center">
            Hi, My Name Is Doan The Duy
          </h2>

          <p className="block mt-4  text-white  max-w-2xl text-center">
            I&apos;m a <span className="text-blue-700">Mobile Developer</span>{" "}
            living in Ho Chi Minh City. I really enjoy creating beautifully
            designed, intuitive, functional and trendy products.
          </p>
          <p className="mt-5 mb-1 text-xl text-gray-300 font-medium">
            Technology I know{" "}
          </p>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {["React Native", "TypeScript", "Javascript"].map((item) => {
              return (
                <div key={item} className="mx-1 mb-2">
                  <Tag tagName={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
