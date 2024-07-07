export type Features = {
  name: string;
  description: string;
};

export type Projects = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type Skills = {
  title: string;
  description: string;
};


export type TimeLineItems = {
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
