import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import TimeLine from "./TimeLine";

export const AboutMe: React.FunctionComponent = () => {
  const { Introduction, features } = useStore(
    useShallow((state) => ({
      Introduction: state.introduction,
      features: state.features,
    }))
  );

  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold text-center" id="about-me-title">
        About Me
      </h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <section
          className="w-full bg-white rounded-lg shadow-md p-6"
          aria-labelledby="introduction-title"
        >
          <h2 className="sr-only" id="introduction-title">
            Introduction
          </h2>
          <p>{Introduction.introduction}</p>
        </section>

        <TimeLine />

        <section
          className="w-full bg-white rounded-lg shadow-md p-6 mt-10 mb-10"
          aria-labelledby="details-title"
        >
          <h2 className="text-2xl font-bold text-center" id="details-title">
            The Details
          </h2>
          <ul className="divide-y divide-gray-200">
            {features.map((feature) => (
              <li key={feature.name} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id={`feature-title-${feature.name}`}
                    >
                      {feature.name}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};
