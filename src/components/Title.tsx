import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Title: React.FunctionComponent = () => (
  <TypeAnimation
    role="heading"
    sequence={[
      `Hi, I'm Ben Simmers`,
      2000,
      `I work as a full stack developer`,
      2000,
      `and a Comp Sci graduate`,
      2000,
    ]}
    wrapper="div"
    cursor={true}
    repeat={Infinity}
    className="text-6xl font-bold text-center"
    aria-label="Animated introduction text"
  />
);
