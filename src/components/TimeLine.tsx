import React from "react";

import { BookOpenIcon } from "@heroicons/react/outline";

import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export default function TimeLine() {

  const timeLineItems = useStore(useShallow((state) => state.timelineItems));

  return(
    <div>
    <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">My Timeline</h2>
    <div style={{paddingTop: 30}}/>
      <ol className="items-center sm:flex outline p-6 rounded shadow bg-blue-500">
        {timeLineItems.map((item, index) => (
          <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8">
              </div>
              <div className="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-700">{item.date}</time>
              <p className="text-base font-normal text-black">{item.content}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

