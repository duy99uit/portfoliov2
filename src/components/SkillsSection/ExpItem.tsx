import React from "react";
import NextImage from "../NextImage";

export const ExpItem = (props: any) => {
  return (
    <div className="flex flex-col ease-in-out  p-6 space-y-3 bg-gradient-to-r from-blue-700 to-purple-700 transition-colors duration-300 transform rounded-xl hover:to-purple-800 hover:from-blue-800">
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex-none w-10 h-10 rounded-full overflow-hidden">
          <NextImage src={props.logo} />
        </div>
        <div className="ml-4 text-left">
          <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white ">
            {props.companyName}
          </h1>
          <p className="text-base text-gray-500">{props.time}</p>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-300 text-left">
        Role: {props.role}
      </p>
      <p className="text-gray-500 dark:text-gray-300 text-left">
        Technology: {props.techs}
      </p>
      <p className="text-gray-500 dark:text-gray-300 text-left">
        Project: {props.project}
      </p>
      <p className="text-gray-500 dark:text-gray-300 text-left">Description:</p>
      <div className="pl-2">
        {props.detail &&
          props.detail.length > 0 &&
          props.detail.map((item: any, idx: number) => {
            return (
              <p key={idx} className="text-gray-400  text-left text-md">
                {item}
              </p>
            );
          })}
      </div>
    </div>
  );
};
