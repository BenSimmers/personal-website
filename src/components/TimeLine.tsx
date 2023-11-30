import React from "react";

import { BookOpenIcon } from "@heroicons/react/outline";

export default function TimeLine() {

  type TimeLineItems = {
    title: string;
    date: string;
    content: string;
  };

  const timeLineItems : TimeLineItems[] = [
    {
      title: "Duty Manager & Retail Assistant",
      date: "May 2020 - January 2023",
      content: "Stock management, cash register management includes balancing end of day trade. Customer Service,Training new staff Manager Duties",
    },
    {
      title: "Began studying Computer Science",
      date: "March 2021 - Present",
      content: "Bachelors degree of Information Technology majoring in Computer Science and IoT mobile technologies at the Queensland University of Technology."
    },
    {
      title: "Working as a Full Stack Developer",
      date: "June 2022 - Present",
      content: "Junior developer and UX designer at TestLab360. Contributing and maintaining full stack applications with various technologies"
    },
  ];
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

