import React from "react";

export const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/benjamin-simmers2002/",
    },
    {
      name: "Github",
      url: "https://github.com/BenSimmers",
    },
  ];

  return (
    <footer className="bottom-0">
      <div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-l font-semibold whitespace-nowrap">
              Ben
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-x-2 rtl:space-x-reverse">
            {links.map((link) => (
              <li key={link.url}>
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-8">
          © {currentYear} Benjamin Simmers
        </span>
      </div>
    </footer>
  );
};

export default Footer;
