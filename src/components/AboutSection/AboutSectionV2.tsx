import { iconAbout, iconGift, iconPhone, iconPin, iconSend } from "@/assets";
import { appSetting } from "@/config/appConfig";
import { skillData } from "@/config/skillData";
import Image from "next/image";
import { SkillItemV2 } from "../SkillsSection/SkillItem";
const AboutSectionV2 = (props: any) => {
  return (
    <section className="bg-white min-h-screen">
      <div className="container px-4 py-12 mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 bg-gray-900/10  p-4 rounded-2xl md:h-auto mt-8 md:mt-0">
          <a href="" target="_blank" rel="noreferrer">
            <div className="flex flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-2 rounded-xl w-48">
              <p className=" text-white">Download Resume</p>
            </div>
          </a>

          <h6 className="text-gray-700 text-lg mt-4 mb-2">
            Technologies & Tools I used
          </h6>
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {skillData.map((item) => {
              return <SkillItemV2 key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="relative">
          <div className="ml-4 w-64 h-[32rem] bg-gray-50 rounded-2xl border-2 border-gray-500 flex flex-col p-2 items-center relative overflow-hidden">
            <div className="h-full w-60 object-contain rounded-2xl  overflow-hidden relative bg-gray-800">
              <div className="w-full flex justify-center items-center absolute top-0 left-0 right-0 z-10 translate-y-1 ">
                <div className="ml-2 w-16 h-4 rounded-lg bg-gray-800"></div>
              </div>
              <div className="w-full h-[12rem] rounded-2xl bg-gradient-to-r from-blue-400 to-blue-700 overflow-hidden">
                <Image
                  src={iconAbout}
                  width={240 * 1.1}
                  height={160 * 1.1}
                  alt=""
                  objectFit="contain"
                />
              </div>
              <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40 flex flex-col justify-end">
                <div className="w-full flex  justify-center items-center">
                  <div className="h-1 w-12 rounded bg-gray-300 mb-1"></div>
                </div>
                <div className="h-[22rem] w-full bg-gradient-to-tr from-gray-900 to-gray-600 rounded-t-xl">
                  <h2 className="text-xl text-gray-100 font-medium p-2 pt-4">
                    {"My Profile"}
                  </h2>
                  <p className="p-2 pt-2 text-sm font-thin text-gray-300">
                    I focus on user experience and am interested in optimizing
                    product performance to develop products that work correctly,
                    are easy to use, and run smoothly on most devices.
                  </p>

                  {appSetting.isShowPrivateInfo && (
                    <div className="px-2 pt-4 flex flex-row flex-wrap pb-4">
                      <div className="p-1 py-2 rounded-lg bg-gradient-to-r from-blue-300 to-blue-600 flex flex-row justify-center items-center mr-2 mb-2">
                        <Image src={iconSend} width="20" height="20" alt="" />
                        <h4 className="ml-2 text-sm text-gray-100">
                          duy99.uit@gmail.com
                        </h4>
                      </div>

                      <div className="p-1 py-2 rounded-lg bg-gradient-to-r from-purple-200 to-purple-600 flex flex-row justify-center items-center mr-1 mb-2">
                        <Image src={iconPhone} width="20" height="20" alt="" />
                        <h4 className="ml-2 text-sm text-gray-100">
                          0363 003 264
                        </h4>
                      </div>
                      <div className="p-1 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-violet-700 flex flex-row justify-center items-center mr-2 mb-2">
                        <Image src={iconGift} width="20" height="20" alt="" />
                        <h4 className="ml-1 text-sm text-gray-100">
                          May 23th 1999
                        </h4>
                      </div>
                      <div className="p-1 py-2 rounded-lg bg-gradient-to-r from-purple-200 to-purple-600 flex flex-row justify-center items-center mr-1 mb-2">
                        <Image src={iconPin} width="20" height="20" alt="" />
                        <h4 className="ml-1 text-sm text-gray-100">Thu Duc</h4>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionV2;
