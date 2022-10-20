import { iconBookmark, iconFlash, iconSetting, iconTarget } from "@/assets";
import React from "react";
import NextImage from "../NextImage";
import Image from "next/image";

export const ExpItem = (props: any) => {
  return (
    <div className="flex flex-col ease-in-out  p-6 space-y-3 bg-gradient-to-r from-blue-700 to-purple-700 transition-colors duration-300 transform rounded-xl hover:to-purple-800 hover:from-blue-800">
      <div className="flex flex-row flex-wrap items-center">
        <div className="flex-none w-10 h-10 rounded-full overflow-hidden">
          <NextImage src={props.logo} />
        </div>
        <div className="ml-4 text-left">
          <h1 className="text-2xl font-semibold capitalize text-white ">
            {props.companyName}
          </h1>
          <p className="text-base text-gray-300">{props.time}</p>
        </div>
      </div>
      <p className="text-gray-100 text-left">Role: {props.role}</p>
      <p className="text-gray-100 text-left">Technology: {props.techs}</p>
      <p className="text-gray-100 text-left">Project: {props.project}</p>
      <p className="text-gray-100 text-left">Description:</p>
      <div className="pl-2">
        {props.detail &&
          props.detail.length > 0 &&
          props.detail.map((item: any, idx: number) => {
            return (
              <p key={idx} className="text-gray-300  text-left text-md">
                {item}
              </p>
            );
          })}
      </div>
    </div>
  );
};
export const ExpItemV2 = (props: any) => {
  console.log("props", props);
  return (
    <div
      className={
        props.idx % 2 === 0
          ? "flex flex-col ease-in-out  p-6 space-y-3 transition-colors duration-300 transform rounded-xl bg-gradient-to-r from-gray-500 to-gray-700 relative overflow-hidden"
          : "flex flex-col ease-in-out  p-6 space-y-3 transition-colors duration-300 transform rounded-xl bg-gradient-to-l from-gray-500 to-gray-700 relative overflow-hidden"
      }
    >
      <div
        className={
          props.idx % 2 === 0
            ? "absolute h-full w-1 bg-gradient-to-t from-green-300 to-green-500 top-0 left-0"
            : "absolute h-full w-1 bg-gradient-to-t from-blue-300 to-blue-500 top-0 right-0"
        }
      ></div>
      <div className="flex flex-row flex-wrap items-start">
        <div className="flex-none w-16 h-16 rounded-full overflow-hidden">
          <NextImage src={props.logo} />
        </div>
        <div className="ml-4 text-left">
          <h1 className="text-2xl font-light text-gray-100 tracking-wide">
            {props.companyName}
          </h1>
          <p className="text-blue-400 text-left">{props.role}</p>
          <p className="text-sm text-gray-300 mt-1 font-medium">{props.time}</p>

          <p className="text-gray-100 text-left mt-4 items-center flex justify-start">
            <span className="translate-y-1 mr-1">
              <Image
                src={iconSetting}
                width={20}
                height={20}
                alt=""
                objectFit="contain"
              />
            </span>
            Technology: {props.techs}
          </p>
          <p className="text-gray-100 text-left items-center flex justify-start">
            <span className="translate-y-1 mr-1">
              <Image
                src={iconBookmark}
                width={20}
                height={20}
                alt=""
                objectFit="contain"
              />
            </span>
            Project: {props.project}
          </p>
          <p className="text-gray-100 text-left items-center flex justify-start mb-1">
            <span className="translate-y-1 mr-1">
              <Image
                src={iconFlash}
                width={20}
                height={20}
                alt=""
                objectFit="contain"
              />
            </span>
            Description:
          </p>
          <div className="pl-6">
            {props.detail &&
              props.detail.length > 0 &&
              props.detail.map((item: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="text-gray-300  text-left text-sm leading-6"
                  >
                    &#x2022; {item}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
