import Image from "next/image";
import { useState } from "react";
import image3 from "@/assets/images/dior/3.jpg";
import image4 from "@/assets/images/dior/diorrr.jpg";
import image5 from "@/assets/images/dior/dior111.jpg";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroSection() {
  return (
    <div className="bg-white pt-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row  w-full flex-wrap">
        <div className="w-100 md:w-2/5 pr-0  md:pr-4">
          <div className="bg-white">
            <div className="bg-gray-100 pb-8 rounded">
              <div className="rounded-t overflow-hidden">
                <Image
                  src={image5}
                  alt="Picture of the author"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>

              <div className="mt-8 px-4">
                <p className="text-sm text-gray-700 uppercase leading-6">
                  NEW IN STORE
                </p>
                <h4 className="my-2 text-lg leading-5 font-bold">
                  Air Jordan 1 Mid Banned
                </h4>
                <p className="font-normal text-base leading-6">
                  All orders will be shipped with DHL Express, including On
                  Demand Delivery service.
                </p>
                <button className="text-sm font-bold text-sky-500 uppercase leading-5 mt-2">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white e-full md:w-3/5">
          <div className="bg-white ml-0 md:pl-4">
            <div className="bg-gray-100 rounded w-full flex flex-row flex-wrap mt-8 md:mt-0 mb-8">
              <div className="rounded-t overflow-hidden w-full md:w-1/2">
                <Image
                  src={image4}
                  alt="Picture of the author"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>

              <div className="mt-8 px-4 w-1/2">
                <p className="text-sm text-gray-700 uppercase leading-6">
                  NEW IN STORE
                </p>
                <h4 className="my-2 text-lg leading-5 font-bold">
                  Air Jordan 1 Mid Banned
                </h4>
                <p className="font-normal text-base leading-6">
                  All orders will be shipped with DHL Express, including On
                  Demand Delivery service.
                </p>
                <button className="text-sm font-bold text-sky-500 uppercase leading-5 mt-2">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="bg-gray-100 rounded w-full flex flex-row-reverse flex-wrap  mb-8">
              <div className="rounded-t overflow-hidden w-full md:w-1/2">
                <Image
                  src={image3}
                  alt="Picture of the author"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  blurDataURL="data:..."
                  placeholder="blur" // Optional blur-up while loading
                />
              </div>

              <div className="mt-8 px-4 w-full md:w-1/2">
                <p className="text-sm text-gray-700 uppercase leading-6">
                  NEW IN STORE
                </p>
                <h4 className="my-2 text-lg leading-5 font-bold">
                  Air Jordan 1 Mid Banned
                </h4>
                <p className="font-normal text-base leading-6">
                  All orders will be shipped with DHL Express, including On
                  Demand Delivery service.
                </p>
                <button className="text-sm font-bold text-sky-500 uppercase leading-5 mt-2">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded">
              <h3 className="text-lg text-gray-700 uppercase leading-8">
                When using an external URL, you must add it to domains in
              </h3>
              <p className="mt-2">
                This section describes the most commonly-used properties of the
                Image component. Find details about more rarely-used properties
                in the Advanced Props section.
              </p>
              <button className="text-sm font-bold text-sky-500 uppercase leading-5 mt-2">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
