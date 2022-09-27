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
          className="py-12 bg-gray-900/95 transition duration-150 ease-in-out z-[100] fixed top-0 right-0 bottom-0 left-0 h-screen justify-center items-center"
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
              className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
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

                <div className="w-full h-48 rounded-t-md overflow-hidden">
                  <NextImage src={props.img} />
                </div>

                <div className="flex props-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden">
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
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900 text-ellipsis ">
                    {props.title}
                  </h3>
                  <p className="text-gray-400 text-md mt-1">{props.desc}</p>
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
