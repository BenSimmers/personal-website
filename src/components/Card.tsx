import React from "react";
import { Projects } from "../utils/types";

const Card: React.FunctionComponent<Projects> = (project) => {
  return (
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
            View
          </a>
          <div className="mb-10" />
        </div>
      </div>
    </li>
  );
};

export default Card;