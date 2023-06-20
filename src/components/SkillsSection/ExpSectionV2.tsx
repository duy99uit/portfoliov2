import { iconFire } from "@/assets";
import { expData } from "@/config/expData";
import Image from "next/image";
import { ExpItemV2 } from "./ExpItem";

const ExpSectionV2 = (props: any) => {
  return (
    <section className="bg-black w-full min-h-screen">
      <div className="container px-4 py-8 mx-auto max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={iconFire}
              width={32}
              height={32}
              alt=""
              objectFit="contain"
            />
            <h1 className=" font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Work Experiences
            </h1>
            <Image
              src={iconFire}
              width={32}
              height={32}
              alt=""
              objectFit="contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4 ">
          {expData.map((item, idx) => {
            return <ExpItemV2 key={item.id} idx={idx} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ExpSectionV2;
