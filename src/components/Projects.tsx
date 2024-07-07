import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export default function Projects() {
  const projects = useStore(useShallow((state) => state.projects));

  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        </div>

        <div className="mt-10 lg:ml-40">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      className="text-base leading-6 text-indigo-600 font-semibold hover:text-indigo-500 transition ease-in-out duration-150"
                    >
                      View Project
                    </a>
                    <div className="mb-10" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
