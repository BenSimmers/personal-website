import { create } from "zustand";
import type {
  Features,
  Skills,
  TimeLineItems,
  TitleSequence,
  Introduction,
} from "../utils/types";
import { content } from ".";

export type Store = {
  features: Features[];
  skills: Skills[];
  timelineItems: TimeLineItems[];
  titleArray: TitleSequence;
  introduction: Introduction;
  setFeatures: (features: Features[]) => void;
  setSkills: (skills: Skills[]) => void;
  setTimelineItems: (timelineItems: TimeLineItems[]) => void;
  setTitleArray: (titleArray: TitleSequence) => void;
  setIntroduction: (introduction: Introduction) => void;
};

export const useStore = create<Store>((set) => ({
  features: content.features,
  skills: content.skills,
  timelineItems: content.timeLineItems,
  titleArray: content.titleArray,
  introduction: content.Introduction,
  setFeatures: (features) => set({ features }),
  setSkills: (skills) => set({ skills }),
  setTimelineItems: (timelineItems) => set({ timelineItems }),
  setTitleArray: (titleArray) => set({ titleArray }),
  setIntroduction: (introduction) => set({ introduction }),
}));
