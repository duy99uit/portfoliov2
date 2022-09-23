import { useState } from "react";
import MyModal from "../Modal";
import Image from "next/image";
import NextImage from "../NextImage";

const ProjectBox = (props: any) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <article
        onClick={() => {
          // setIsOpenModal(true);
        }}
        className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm cursor-pointer"
      >
        <div className="w-full h-48 rounded-t-md overflow-hidden">
          {/* <Image
            src={props.img}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={props.title}
          /> */}
          <NextImage src={props.img} />
        </div>

        <div className="flex props-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden">
              <NextImage src={props.authorLogo} />
            </div>
            {/* <img
              src={props.authorLogo}
             
              alt={props.authorName}
            /> */}
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">{props.authorName}</span>
            <span className="block text-gray-400 text-sm">{props.date}</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{props.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{props.desc}</p>
        </div>
        <MyModal
          isOpenModal={isOpenModal}
          onClose={() => {
            setIsOpenModal(false);
          }}
        />
      </article>
    </>
  );
};
export default ProjectBox;
