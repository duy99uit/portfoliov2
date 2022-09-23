import { expData } from "./expData";
import { ExpItem } from "./ExpItem";

const SkillsSection = (props: any) => {
  return (
    <section className="bg-gray-900  w-full">
      <div className="container py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-left">
          My Experiences <span className="text-blue-500">& skill</span>
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-4 xl:mt-12  md:grid-cols-2 xl:grid-cols-2">
          {expData.map((item) => {
            return <ExpItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
