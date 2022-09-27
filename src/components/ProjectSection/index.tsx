import { useEffect, useState } from "react";
import { CardLoading } from "../Skeleton/CardLoading";
import { projects } from "@/config/projectData";
import ProjectBox from "./ProjectBox";

const ProjectSection = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="bg-white min-h-screen">
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center">
          <h1 className=" font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-700 to-gray-900">
            Joined Project
          </h1>
        </div>
        {isLoading ? (
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((items) => (
              <CardLoading key={items} />
            ))}
          </div>
        ) : (
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 5).map((items, key) => (
              <ProjectBox {...items} key={key} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectSection;
