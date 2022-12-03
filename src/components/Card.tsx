import React from "react";

export default function Card(props: any) {
  return (
    <>
      <div style={{paddingTop: 20}}/>
      <div className="w-full p-4 text-center bg-gray-800  border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-white dark:text-white">
          {props.title}
        </h5>
        <p className="mb-5 text-base text-gray-400 sm:text-lg dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </>
  );
}
