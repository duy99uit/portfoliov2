import { Links } from "@/config/constant";
import React, { useState } from "react";

export const ButtonPrimary = (props: any) => {
  const { children } = props;
  return (
    <button
      className="flex flex-row items-center justify-center focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-500 rounded text-white px-8 py-2 text-sm"
      {...props}
    >
      {children}
    </button>
  );
};
export const ButtonOutline = (props: any) => {
  const { children } = props;
  return (
    <button
      className="flex flex-row items-center justify-center focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-500 hover:bg-gray-300 border rounded px-8 py-2 text-sm border-gray-400"
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonNavigation = (props: any) => {
  const { children } = props;
  return (
    <a href={Links.duyBlog} target="_blank" rel="noreferrer" className="flex">
      <div
        className="flex flex-row items-center justify-center text-white ease-in-out hover:text-blue-300  text-lg"
        {...props}
      >
        {children}
      </div>
    </a>
  );
};

export const ButtonClose = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Close"
        className="icon icon-tabler icon-tabler-x"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1={18} y1={6} x2={6} y2={18} />
        <line x1={6} y1={6} x2={18} y2={18} />
      </svg>
    </div>
  );
};
