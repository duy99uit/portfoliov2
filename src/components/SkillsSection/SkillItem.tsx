import React from "react";
import NextImage from "../NextImage";

export const SkillItem = (props: any) => {
  return (
    <div className="flex flex-col items-center p-2 sm:p-4 bg-gradient-to-r transition-colors duration-300 transform cursor-pointer rounded-xl  group  hover:to-purple-800 hover:from-blue-800">
      <div className="flex-none w-24 h-24 rounded overflow-hidden">
        <NextImage src={props.logo} objectFit="contain" />
      </div>

      <h4 className="mt-2 sm:mt-3 text-base  capitalize text-white">
        {props.name}
      </h4>
    </div>
  );
};
