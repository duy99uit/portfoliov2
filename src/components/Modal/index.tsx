import { ButtonClose } from "@/components/Button";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import NextImage from "../NextImage";
import { ProjectTag } from "../Tag";
const MyModal = (props: any) => {
  const { isOpenModal, closeModal } = props;

  const enableScroll = () => {
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {isOpenModal && (
        <div
          className="py-12 bg-gray-900/95 transition duration-150 ease-in-out z-[100] fixed top-0 right-0 bottom-0 left-0 h-screen flex justify-center items-center"
          id="modal"
          onClick={() => {
            enableScroll();
            closeModal();
          }}
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
              }}
              className="relative py-8 px-5  bg-white shadow-md rounded border border-gray-400"
            >
              <ButtonClose
                onClick={() => {
                  enableScroll();
                  closeModal();
                }}
              />
              <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm cursor-pointer relative overflow-hidden">
                {props.tagName && props.tagType && (
                  <div className="absolute top-0 right-0 z-[1]">
                    <ProjectTag
                      tagName={props.tagName}
                      tagType={props.tagType}
                    />
                  </div>
                )}

                <div className="w-full aspect-[1920/1080] rounded-t-md overflow-hidden">
                  <NextImage src={props.img} ratio={1920 / 1080} />
                </div>

                <div className="flex props-center mt-2 py-2 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
                      <NextImage src={props.authorLogo} />
                    </div>
                  </div>
                  <div className="ml-3">
                    <span className="block text-gray-900">
                      {props.authorName}
                    </span>
                    <span className="block text-gray-400 text-sm">
                      {props.date}
                    </span>
                  </div>
                </div>
                <div className="pt-3 pl-2 max-h-56 overflow-y-scroll">
                  <h3 className="text-xl text-gray-900 text-ellipsis ">
                    {props.title}
                  </h3>
                  <p className="text-gray-400 text-md mt-1">{props.desc}</p>
                  {props?.links?.playStore && props?.links?.playStore && (
                    <p className="text-gray-500 text-base mt-1">
                      Download:{" "}
                      <span className="text-green-500">Play Store</span> -{" "}
                      <span className="text-blue-500">Apple Store</span>
                    </p>
                  )}
                  <p className="text-gray-400 text-md mt-1">
                    Time: {props.time} - Teamsize: {props.teamSize}
                  </p>

                  <p className="text-gray-400 text-md mt-1">
                    Technology: {props.technology}
                  </p>
                  <p className="text-gray-400 text-md mt-1">
                    Role: {props.role}
                  </p>
                  {props?.roleDetail &&
                    props?.roleDetail?.length > 0 &&
                    props.roleDetail.map((item: any, idx: number) => {
                      return (
                        <p
                          key={idx}
                          className="text-gray-400 text-md mt-1 ml-2"
                        >
                          - {item}
                        </p>
                      );
                    })}
                  {props?.features && props?.features?.length > 0 && (
                    <p className="text-gray-400 text-md mt-1">Feature:</p>
                  )}
                  {props?.features &&
                    props?.features?.length > 0 &&
                    props.features.map((item: any, idx: number) => {
                      return (
                        <p
                          key={idx}
                          className="text-gray-400 text-md mt-1 ml-2"
                        >
                          - {item}
                        </p>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
export default MyModal;
