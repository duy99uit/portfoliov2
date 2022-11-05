import { useEffect, useState } from "react";
import { CardLoading } from "../Skeleton/CardLoading";
import { projects } from "@/config/projectData";
import ProjectBoxV2 from "./ProjectBoxV2";

const ProjectSection = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="bg-white min-h-screen">
      <div className="container px-4 py-8 mx-auto max-w-4xl">
        <div className="text-center">
          <h6 className=" font-thin text-lg text-gray-500">Work</h6>
          <h1 className=" font-bold text-gray-900 text-3xl bg-clip-text mt-2">
            Some of projects I joined
          </h1>
        </div>
        {isLoading ? (
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((items, index) => (
              <CardLoading key={items} />
            ))}
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
            {projects.slice(0, 5).map((items, index) => (
              <ProjectBoxV2 {...items} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectSection;
