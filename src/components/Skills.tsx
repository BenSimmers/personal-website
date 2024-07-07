import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export const Skills: React.FunctionComponent = () => {
  const skills = useStore(useShallow((state) => state.skills));
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">
        My Skills
      </h2>
      {skills.map((skill) => (
        <>
          <div style={{ paddingTop: 35 }} />
          <div className="card">
            <div className="p-6 text-center">
              <h5 className="mb-2 text-4xl font-bold text-black dark:text-black py-3">
                {skill.title}
              </h5>
              <p className="text-2xl text-gray-600 dark:text-gray-600 py-3">
                {skill.description}
                <div style={{ paddingTop: 25 }} />
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
