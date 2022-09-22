import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleLine,
  faMobileAndroid,
  faTabletAndroid,
  faUser,
  faCakeCandles,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Links } from "@/config/constant";
const AboutSection = (props: any) => {
  return (
    <section className="bg-white min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl text-right ">
          About Me
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src="https://duy99uit.github.io/img/metatag.jpg"
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h3 className=" text-blue-500 uppercase text-xl">
              Duy&apos;s Profile
            </h3>

            {/* <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline  md:text-3xl"
            >
              All the features you want to know
            </a> */}

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

            <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4">
              {[
                { id: 1, content: "Doan The Duy", icon: faUser },
                { id: 2, content: "May 23th 1999", icon: faCakeCandles },
                { id: 3, content: "(+84) 363 003 264", icon: faPhone },
                { id: 4, content: "duy99.uit@gmail.com", icon: faEnvelope },
                {
                  id: 5,
                  content: "Thu Duc, Ho Chi Minh City",
                  icon: faLocationDot,
                },
              ].map((item) => {
                return (
                  <div
                    key={item.id}
                    className="px-4 py-1  items-center rounded bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
                  >
                    <FontAwesomeIcon icon={item.icon} color="#3b82f6" />
                    <span className="ml-2 text-sm">{item.content}</span>
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
                      {/* <FontAwesomeIcon icon={item.icon} color="#3b82f6" /> */}
                      <FontAwesomeIcon icon={item.icon} size="lg" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Amelia. Anderson
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
