import { useState } from "react";
import MyModal from "../Modal";
import NextImage from "../NextImage";
import { ProjectTag } from "../Tag";

const ProjectBox = (props: any) => {
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
        onClick={() => {
          disableScrollBehavior();
          setIsOpenModal(true);
        }}
        className="mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm cursor-pointer relative overflow-hidden bg-gradient-to-r from-white to-white transition ease-in-out hover:from-purple-300 hover:to-purple-500"
      >
        {props.tagName && props.tagType && (
          <div className="absolute top-0 right-0 z-[1]">
            <ProjectTag tagName={props.tagName} tagType={props.tagType} />
          </div>
        )}

        <div className="w-full aspect-[1920/1080] rounded-t-md overflow-hidden">
          <NextImage src={props.img} ratio={1920 / 1080} />
        </div>

        <div className="flex props-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
              <NextImage src={props.authorLogo} />
            </div>
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">{props.authorName}</span>
            <span className="block text-gray-500 text-sm">{props.date}</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900 text-ellipsis line-clamp-1">
            {props.title}
          </h3>
          <p className="text-gray-700 text-md mt-1 line-clamp-2">
            {props.desc}
          </p>
        </div>
      </article>
      <MyModal isOpenModal={isOpenModal} closeModal={closeModal} {...props} />
    </>
  );
};
export default ProjectBox;
