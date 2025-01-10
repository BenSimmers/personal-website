import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

const Skills: React.FunctionComponent = () => {
  const skills = useStore(useShallow((state) => state.skills));

  return (
    <section aria-labelledby="skills-title" className="mt-10">
      <h2
        id="skills-title"
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center"
      >
        My Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="card bg-white rounded-lg shadow-md p-6 text-center"
          >
            <h3 className="mb-2 text-4xl font-bold text-black dark:text-black py-3">
              {skill.title}
            </h3>
            <p className="text-2xl text-gray-600 dark:text-gray-600 py-3">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
