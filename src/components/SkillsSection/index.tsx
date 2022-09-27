import { expData } from "@/config/expData";
import { ExpItem } from "./ExpItem";
import { skillData } from "@/config/skillData";
import { SkillItem } from "./SkillItem";

const SkillsSection = (props: any) => {
  return (
    <section className="bg-gray-900  w-full">
      <div className="container px-4 py-8 mx-auto">
        <h1 className=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-gray-900">
          Worrk Experiences
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-6   md:grid-cols-2 xl:grid-cols-2">
          {expData.map((item) => {
            return <ExpItem key={item.id} {...item} />;
          })}
        </div>
        <h1 className=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-gray-900 mt-6">
          <span className="text-blue-500">Technologies & Tools I used</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-6 md:grid-cols-4 xl:grid-cols-8">
          {skillData.map((item) => {
            return <SkillItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
