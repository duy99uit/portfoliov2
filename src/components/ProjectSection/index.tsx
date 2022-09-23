import { useEffect, useState } from "react";
import { CardLoading } from "../Skeleton/CardLoading";
import { posts } from "./fakeData";
import ProjectBox from "./ProjectBox";

const ProjectSection = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
        <p className="mt-3 text-gray-500">
          Blogs that are loved by the community. Updated every hour.
        </p>
      </div>
      {isLoading ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((items) => (
            <CardLoading key={items} />
          ))}
        </div>
      ) : (
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((items, key) => (
            <ProjectBox {...items} key={key} />
          ))}
        </div>
      )}
    </section>
  );
};
export default ProjectSection;
