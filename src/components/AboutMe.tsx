import React from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";
// type Features = {
//   name: string;
//   description: string;
// };
// export type Introduction = {
//   introduction: string;
//   description: string;
// };

// const Introduction: Introduction = {
//   introduction: "I'm a full-stack web developer from Brisbane, Australia with a passion for learning and building new things. In the tech realm, I dance with TypeScript, serenade React, and juggle Redux among others like it's a circus act. But hey, I also like to keep it old school with some low-level C programming – because who doesn't love a bit of nostalgia mixed with a touch of insanity? Currently, I'm on a quest to conquer the world of Go during my spare moments.",
//   description: "In my non-tech life, I'm a caffeine-fueled spider scaling rock climbing and bouldering walls, occasionally taking leisurely hikes. When I'm not pretending to be a human mountain goat, I'm a laid-back soccer enthusiast, casually playing and passionately watching. As a film buff who almost became a film student, I opted for making sarcastic movie comments instead, I've settled for being a film buff, bringing my critical eye and love for the silver screen to every conversation. I'm just your friendly neighborhood tech guy, building and learning new things.",
// };


// const features: Features[] = [
//   { name: "Currently Learning", description: "Go, Rust" },
//   {
//     name: "My Interests",
//     description:
//       "Games, programming, solving interesting problems, reading, football, film, rock climbing, bouldering",
//   },
//   {
//     name: "Skills",
//     description:
//       "JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS",
//   },
//   {
//     name: "What I Plan to Learn",
//     description: "Flutter, Swift",
//   },
// ];




export default function AboutMe() {
  
  const { Introduction, features } = useStore(useShallow((state) => ({ Introduction: state.introduction, features: state.features })));

  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold text-center">About Me</h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <p>{Introduction.introduction}</p>
          <div className="bg-gray-300 h-px mt-7 mb-7" />
          <p>{Introduction.description}</p>
        </div>

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
}
