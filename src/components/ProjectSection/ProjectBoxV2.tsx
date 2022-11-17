import { useState } from "react";
import MyModal from "../Modal";
import NextImage from "../NextImage";
import { ProjectTag } from "../Tag";
import Image from "next/image";

const ProjectBoxV2 = (props: any) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const disableScrollBehavior = () => {
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <article
        className={
          props.index % 2 === 0
            ? " mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative overflow-hidden bg-gradient-to-b from-purple-300 to-white transition ease-in-out flex flex-col sm:flex-row"
            : " mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative overflow-hidden bg-gradient-to-b from-violet-400 to-white transition ease-in-out  flex flex-col sm:flex-row-reverse"
        }
      >
        {props.tagName && props.tagType && (
          <div
            className={
              props.index % 2 === 0
                ? "absolute top-0 left-0 z-[1]"
                : "absolute top-0 right-0 z-[1]"
            }
          >
            <ProjectTag
              tagName={props.tagName}
              tagType={props.tagType}
              position={props.index % 2 === 0 ? "left" : "right"}
            />
          </div>
        )}

        <div className="w-full sm:w-1/3 h-96 sm:h-auto rounded-t-md overflow-hidden">
          <div className="w-full h-full relative">
            <Image src={props.img} layout="fill" objectFit="cover" alt={""} />
          </div>
        </div>
        {/* <div className="w-1/3  bg-gray-300 "></div> */}

        <div className="w-full sm:w-2/3">
          <div className="flex props-center mt-2 pt-3 ml-4 mr-2">
            <div className="flex-none w-10 h-10 rounded-full">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
                <NextImage src={props.authorLogo} />
              </div>
            </div>
            <div className="ml-3">
              <h6 className="block text-gray-800 text-base font-medium">
                {props.projectName}
              </h6>
              <span className="block text-gray-600 text-sm">
                {props.projectCategory}{" "}
                <span className="ml-3">&#x2022; {`  ${props.time}`}</span>
              </span>
            </div>
          </div>
          <div className="pt-3 ml-4 mr-2 mb-3">
            <p className="text-gray-700 text-md mt-1 line-clamp-3">
              {props.desc}
            </p>
            {props?.links?.playStore && props?.links?.playStore && (
              <p className="text-gray-500 text-base mt-1">
                Download: <span className="text-green-500">Play Store</span> -{" "}
                <span className="text-blue-500">Apple Store</span>
              </p>
            )}
            {props?.links?.website && (
              <p className="text-gray-500 text-base mt-1">
                Website:
                <a
                  href={props?.links?.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base ml-2 text-blue-500"
                >
                  Demo
                </a>
              </p>
            )}
            <p className="text-gray-500 text-md mt-4 mb-1">
              <span className="text-gray-700">Role:</span> {props.role}
              <span className="ml-4">
                <span className="text-gray-700">Teamsize:</span>{" "}
                {props.teamSize}
              </span>
            </p>
            {props?.roleDetail && props?.roleDetail?.length > 0 && (
              <p className="text-gray-700 text-md">Reponsibilities:</p>
            )}
            {props?.roleDetail &&
              props?.roleDetail?.length > 0 &&
              props.roleDetail.map((item: any, idx: number) => {
                return (
                  <p key={idx} className="text-gray-500 text-sm ml-2">
                    &#x2022; {item}
                  </p>
                );
              })}

            {props?.technology && props?.technology?.length > 0 && (
              <div className="mt-2 flex flex-row flex-wrap justify-start items-center">
                {props.technology.map((item: any, idx: number) => {
                  return (
                    <span
                      key={idx}
                      className="text-white text-xs mr-2 px-2 py-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded mb-2 sm:mb-0"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </article>
      {/* <MyModal isOpenModal={isOpenModal} closeModal={closeModal} {...props} /> */}
    </>
  );
};
export default ProjectBoxV2;
