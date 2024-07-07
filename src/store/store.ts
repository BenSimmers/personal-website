import { create } from "zustand";
import { content } from "./index";

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

export type Skills = {
  title: string;
  description: string;
};


type TimeLineItems = {
  title: string;
  date: string;
  content: string;
};


export type SequenceArray = string | number;

export type TitleSequence = {
  sequence: SequenceArray[];
};

export type Introduction = {
  introduction: string;
  description: string;
};




export type Store = {
  features: Features[];
  projects: Projects[];
  skills: Skills[];
  timelineItems: TimeLineItems[];
  titleArray: TitleSequence;
  introduction: Introduction;
  setFeatures: (features: Features[]) => void;
  setProjects: (projects: Projects[]) => void;
  setSkills: (skills: Skills[]) => void;
  setTimelineItems: (timelineItems: TimeLineItems[]) => void;
  setTitleArray: (titleArray: TitleSequence) => void;
  setIntroduction: (introduction: Introduction) => void;
};

export const useStore = create<Store>((set) => ({
  features: content.features,
  projects: content.projects,
  skills: content.skills,
  timelineItems: content.timeLineItems,
  titleArray: content.titleArray,
  introduction: content.Introduction,
  setFeatures: (features) => set({ features }),
  setProjects: (projects) => set({ projects }),
  setSkills: (skills) => set({ skills }),
  setTimelineItems: (timelineItems) => set({ timelineItems }),
  setTitleArray: (titleArray) => set({ titleArray }),
  setIntroduction: (introduction) => set({ introduction }),
}));