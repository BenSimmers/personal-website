import React from "react";
import { WavyLink } from "react-wavy-transitions";
import type { NavLink, NavProps } from "./types";

const navLinks: NavLink[] = [
  { to: "/", color: "#FFBC42", text: "Home" },
  { to: "/about", direction: "up", color: "#73D2DE", text: "About" },
  { to: "/portfolio", direction: "up", color: "#73D2DE", text: "Portfolio" },
  { to: "/contact", color: "#C7EFCF", text: "Contact" },
];

const MenuIcon: React.FunctionComponent = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Nav: React.FunctionComponent<NavProps> = ({ isOpen, setIsOpen }) => (
  <nav>
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <a href="/" className="text-gray-700 drop-shadow-xl text-xl font-bold">
          Ben Simmers
        </a>
      </div>
      <div className="hidden md:block">
        <div className="flex items-center space-x-4">
          {navLinks.map(({ to, direction, color, text }) => (
            <WavyLink
              key={to}
              to={to}
              direction={direction}
              duration={1000}
              color={color}
              className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl hover:animate-wiggle"
            >
              {text}
            </WavyLink>
          ))}
        </div>
      </div>
      <div className="-mr-2 flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset ease-in-out duration-150"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
    <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 space-x-3">
        {navLinks.map(({ to, direction, color, text }) => (
          <WavyLink key={to} to={to} direction={direction} color={color}>
            {text}
          </WavyLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;