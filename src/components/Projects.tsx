import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import Card from "./Card";

export const Projects: React.FunctionComponent = () => {
  const projects = useStore(useShallow((state) => state.projects));

  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl font-bold text-center">Notable Projects</h1>
        </div>

        <div className="mt-10 lg:ml-40">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {projects.map((project) => (
              <Card
                item={project}
                renderTitle={(project) => project.title}
                renderDescription={(project) => project.description}
                renderLink={(project) =>
                  project.url ? (
                    <a
                      className="text-base leading-6 text-indigo-600 font-semibold hover:text-indigo-500 transition ease-in-out duration-150"
                      href={project.url}
                    >
                      View
                    </a>
                  ) : null
                }
                key={project.id}
                {...project}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
