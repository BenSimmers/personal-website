import React from "react";

export const Footer: React.FunctionComponent = () => (
  <footer className="bottom-0">
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span className="self-center text-l font-semibold whitespace-nowrap">
            Ben
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-2 rtl:space-x-reverse">
          <li>
            <a
              href="https://www.instagram.com/ben._.simmers/"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/benjamin-simmers-developer/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/BenSimmers" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-8">
        © Benjamin Simmers {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);
