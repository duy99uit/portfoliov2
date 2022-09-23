import React from "react";
import NextImage from "../NextImage";

export const SkillItem = (props: any) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-700 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
      <div className="flex-none w-24 h-24 rounded overflow-hidden">
        <NextImage src={props.logo} objectFit="contain" />
      </div>

      <h4 className="mt-3 text-base  text-gray-700 capitalize dark:text-white e">
        {props.name}
      </h4>
    </div>
  );
};
