import React from "react";
import { TypeAnimation } from "react-type-animation";
const Title = () => {
  return (
    <TypeAnimation
      sequence={[
        `Hi, I'm Ben Simmers`,
        2000,
        `I work as a full stack developer`,
        2000,
        `and study Computer Science`,
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="text-6xl font-bold text-center"
    />
  );
};

export default Title;
