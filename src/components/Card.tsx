import React from "react";

export default function Card(props: any) {
  return (
    <>
      <div className="card">
        <div className="p-5 text-center">
        <h5 className="mb-2 text-4xl font-bold text-black dark:text-black py-3">
          {props.title}
        </h5>
        <p className=" text-gray-400 dark:text-gray-400 py-3 ">
          {props.description}
        </p>
        </div>
      </div>
    </>
  );
}
