import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
import { TimeLine } from "./TimeLine";

export const AboutMe: React.FunctionComponent = () => {
  const { Introduction, features } = useStore(
    useShallow((state) => ({
      Introduction: state.introduction,
      features: state.features,
    }))
  );

  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold text-center">About Me</h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <p>{Introduction.introduction}</p>
          <div className="bg-gray-300 h-px mt-7 mb-7" />
          <p>{Introduction.description}</p>
        </div>

        <TimeLine />

        <div className="w-full bg-white rounded-lg shadow-md p-6 mt-10 mb-10">
          <ul className="divide-y divide-gray-200">
            {features.map((feature) => (
              <li key={feature.name} className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
