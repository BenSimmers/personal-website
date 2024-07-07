import { create } from "zustand";
import { content } from "./index";
import type {
  Features,
  Projects,
  Skills,
  TimeLineItems,
  TitleSequence,
  Introduction,
} from "../utils/types";

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
