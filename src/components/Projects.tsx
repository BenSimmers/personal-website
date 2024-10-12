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
              <Card key={project.id} {...project} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Projects;