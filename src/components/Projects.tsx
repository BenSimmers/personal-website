import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import Card from "./Card";
import { type Projects as ProjectType } from "../utils/types";
import { SkeletonCard } from "./SkeletonCard";

export const Projects: React.FunctionComponent = () => {
  const projects: ProjectType[] = useStore(
    useShallow((state) => state.projects)
  );

  const renderItems = (projects: ProjectType[]): JSX.Element[] => {
    const items = projects.length
      ? projects
      : Array.from({ length: 4 }).map(() => null);

    return items.map((item, i) => (
      <div
        key={item ? item.id : i}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
      >
        {item ? (
          <Card
            title={item.title}
            description={item.description}
            link={item.url}
          />
        ) : (
          <SkeletonCard num={6} />
        )}
      </div>
    ));
  };
  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl font-bold text-center">Notable Projects</h1>
        </div>
        <div className="mt-10 flex flex-row flex-wrap -mx-2">
          {renderItems(projects)}
        </div>
      </main>
    </>
  );
};

export default Projects;
