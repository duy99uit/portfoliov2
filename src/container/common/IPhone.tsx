import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBolt,
  faLocationDot,
  faRotateLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Iphone = (props: { text?: string; size?: number }) => {
  return (
    <div className="w-72 h-[36rem] bg-gray-700 rounded-2xl border-2 border-gray-800 flex flex-col p-1 items-center relative overflow-hidden shadow-lg">
      <div className="absolute bottom-0 left-0 right-0   flex justify-center items-end -translate-y-2">
        <div className="h-1 w-16 rounded bg-gray-400"></div>
      </div>

      <div className="h-[36rem] w-full object-contain rounded-t-lg  overflow-hidden relative">
        <div className="w-full flex justify-center items-center absolute top-0 left-0 right-0 z-10 translate-y-2 ">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <div className="ml-2 w-12 h-2 rounded-md bg-gray-800"></div>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dxc0m9waq/image/upload/v1666197591/avatar_ezw5cm.jpg"
          alt="Image"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 z-10 bg-gradient-to-b from-transparent to-black px-2 pb-2 justify-end items-end flex-col flex">
        <div className="w-full">
          <div className="h-24 p-2 flex justify-end flex-col">
            <div className="flex flex-row justify-start items-center">
              <span className="p-1 bg-green-500 mb-1 rounded-full text-sm text-gray-100">
                2 years exp
              </span>
            </div>

            <h6 className="text-2xl  text-white mb-1 font-medium">
              Mobile Developer
            </h6>
            <p className="text-base text-gray-100 ">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                color={"rgba(243 ,244 ,246,0.9)"}
              />{" "}
              Live in TP.HCM
            </p>
          </div>
          <div className="pb-2 pt-3 w-full justify-center items-center flex flex-row">
            {[
              {
                id: 1,
                name: 1,
                bg: "border-yellow-400",
                icon: faRotateLeft,
                color: "#facc15",
              },
              {
                id: 2,
                name: 2,
                bg: "border-red-400",
                icon: faXmark,
                color: "#f87171",
              },
              {
                id: 3,
                name: 3,
                bg: "border-blue-400",
                icon: faStar,
                color: "#60a5fa",
              },
              {
                id: 4,
                name: 4,
                bg: "border-green-400",
                icon: faHeart,
                color: "#4ade80",
              },
              {
                id: 5,
                name: 5,
                bg: "border-violet-400",
                icon: faBolt,
                color: "#a78bfa",
              },
            ].map((item, index) => {
              const _w = item.id === 2 || item.id === 4 ? "w-10" : "w-8";
              const _h = item.id === 2 || item.id === 4 ? "h-10" : "h-8";
              return (
                <div
                  key={item.id}
                  className={`${_w} ${_h} border-2 ${item.bg} rounded-full flex justify-center items-center mx-1`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    size={item.id === 2 || item.id === 4 ? "lg" : "sm"}
                    color={item.color}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row justify-center p-2  mt-4">
        <a href={Links.linkedin} target="_blank" rel="noreferrer">
          <div
            className={
              "w-10 h-10 rounded-full flex bg-blue-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
            }
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0ea5e9" />
          </div>
        </a>
        <a href={Links.github} target="_blank" rel="noreferrer">
          <div
            className={
              "w-12 h-12 rounded-full flex bg-purple-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
            }
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="#7e22ce" />
          </div>
        </a>
        <a href={Links.faceBook} target="_blank" rel="noreferrer">
          <div
            className={
              "w-12 h-12 rounded-full flex bg-blue-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
            }
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" color="#4338ca" />
          </div>
        </a>
        <a href={Links.instagram} target="_blank" rel="noreferrer">
          <div
            className={
              "w-10 h-10 rounded-full flex bg-yellow-100 mx-1 shadow-sm shadow-gray-500/50 justify-center items-center"
            }
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" color="#eab308" />
          </div>
        </a>
      </div> */}
    </div>
  );
};
