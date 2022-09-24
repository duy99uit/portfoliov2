import { Links } from "@/config/constant";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCakeCandles,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextImage from "../NextImage";
const AboutSection = (props: any) => {
  return (
    <section className="bg-white min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-right font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-gray-900">
          About Me
        </h1>

        <div className="mt-4 lg:-mx-6 lg:flex lg:items-center">
          <div className="w-full lg:mx-6 lg:w-1/2 rounded-xl  lg:h-96 overflow-hidden">
            <NextImage
              src="https://duy99uit.github.io/img/metatag.jpg"
              objectFit="cover"
            />
          </div>

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h3 className=" text-blue-500 uppercase text-xl">
              Duy&apos;s Profile
            </h3>
            {[
              {
                id: 1,
                content:
                  "With a good sence of aesthetic and creative personality, I really enjoy creating beautifully designed, intuitive, functional, user-friendly and trendy website/app",
              },
              {
                id: 2,
                content:
                  "I focus on user experience and am interested in optimizing product performance to develop products that work correctly, are easy to use, and run smoothly on most devices.",
              },
              {
                id: 3,
                content:
                  "My long-term goal is to become a professional front-end developer",
              },
            ].map((item) => {
              return (
                <p
                  key={item.id}
                  className="mt-3 text-base text-gray-900 md:text-sm"
                >
                  {item.content}
                </p>
              );
            })}

            <div className="grid gap-2 sm:gap-3 grid-cols-2 grid-rows-3 mt-4">
              {[
                { id: 1, content: "Doan The Duy", icon: faUser },
                { id: 2, content: "May 23th 1999", icon: faCakeCandles },
                { id: 3, content: "(+84) 363 003 264", icon: faPhone },
                { id: 4, content: "duy99.uit@gmail.com", icon: faEnvelope },
                {
                  id: 5,
                  content: "Thu Duc, Ho Chi Minh",
                  icon: faLocationDot,
                },
              ].map((item) => {
                return (
                  <div
                    key={item.id}
                    className="px-1 sm:px-2 py-1 flex flex-row flex-wrap items-center rounded bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
                  >
                    <FontAwesomeIcon icon={item.icon} color="#3b82f6" />
                    <span className="ml-1 sm:ml-2 text-sm line-clamp-1">
                      {item.content}
                    </span>
                  </div>
                );
              })}
            </div>

            <h4 className="inline-block mt-3 text-blue-500 underline0">
              SOCIAL LINK
            </h4>
            <div className="flex flex-row flex-wrap mt-3">
              {[
                {
                  id: 1,
                  content: "Doan The Duy",
                  icon: faLinkedin,
                  color: "blue-700",
                  link: Links.linkedin,
                },
                {
                  id: 2,
                  content: "May 23th 1999",
                  icon: faFacebook,
                  color: "blue-500",
                  link: Links.faceBook,
                },
                {
                  id: 3,
                  content: "(+84) 363 003 264",
                  icon: faGithub,
                  color: "gray-900",
                  link: Links.github,
                },
                {
                  id: 4,
                  content: "duy99.uit@gmail.com",
                  icon: faInstagram,
                  color: "pink-400",
                  link: Links.instagram,
                },
              ].map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="px-4 py-1  items-center rounded bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 mr-3 hover:scale-110 transition ease-in-out">
                      <FontAwesomeIcon icon={item.icon} size="lg" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
