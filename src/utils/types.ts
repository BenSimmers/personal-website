/**
 * @description: Types for the project
 * @type: Types
 * @exports: Features, Projects, Skills, TimeLineItems, TitleSequence, Introduction, NavLink, NavProps
 */

type Features = {
  name: string;
  description: string;
};

type Projects = {
  id: number;
  title: string;
  description: string;
  url: string;
};

type Skills = {
  title: string;
  description: string;
};

type TimeLineItems = {
  title: string;
  date: string;
  content: string;
};

type SequenceArray = string | number;

type TitleSequence = {
  sequence: SequenceArray[];
};

type Introduction = {
  introduction: string;
};

type NavLink = {
  to: string;
  direction?: "up" | "down" | "left" | "right";
  color: string;
  text: string;
};

type NavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
  Features,
  Projects,
  Skills,
  TimeLineItems,
  TitleSequence,
  Introduction,
  NavLink,
  NavProps,
};
