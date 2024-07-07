import React from "react";

import { BookOpenIcon } from "@heroicons/react/outline";

import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export const TimeLine: React.FunctionComponent = () => {
  const timeLineItems = useStore(useShallow((state) => state.timelineItems));

  return (
      <div className="w-full bg-white rounded-lg shadow-md p-10 mt-10" id="timeline" aria-labelledby="timeline">
        <ol className="relative border-s border-black">
          {timeLineItems.map((item, index) => (
            <li key={index} className="ms-6 first:mt-0 mt-10" id="timeline-item" aria-labelledby="timeline-item">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-slate-400">
                <BookOpenIcon className="w-2.5 h-2.5 text-blue-800" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900" id="timeline-title" aria-labelledby="timeline-title">
                {item.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400" dateTime={item.date} aria-label="Date">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-500" id="timeline-content" aria-labelledby="timeline-content">
                {item.content}
              </p>
            </li>
          ))}
        </ol>
      </div>
  );
}
