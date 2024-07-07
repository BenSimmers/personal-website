import React from "react";
import { TypeAnimation } from "react-type-animation";


export type SequenceArray = string | number;


export type TitleSequence = {
  sequence: SequenceArray[];
};

export const titleArray: TitleSequence = {
  sequence: [
    `Hi, I'm Ben Simmers`,
    2000,
    `I work as a full stack developer`,
    2000,
    `and a Comp Sci graduate`,
    2000,
  ],
};


const Title = () => {
  return (
    <TypeAnimation
      sequence={titleArray.sequence}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className="text-6xl font-bold text-center"
    />
  );
};

export default Title;
