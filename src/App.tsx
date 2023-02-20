import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import TimeLine from "./components/TimeLine";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/404";
import { useState } from "react";
import Portfolio from "./components/Portfolio";


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-gray-700 drop-shadow-xl text-xl font-bold">
               Ben Simmers
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <a
                  href="/"
                  className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl hover:animate-wiggle"
                >
                  Home
                </a>
                <a
                  href="/portfolio"
                  // className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl"
                  //add a wiggle animation to the link
                  className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl hover:animate-wiggle"

                >
                  Portfolio
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                // className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset ease-in-out duration-150"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl hover:animate-wiggle"
              >
              Home
            </a>
            <a
              href="/portfolio"
              className="ml-4 px-3 py-2 text-gray-600 font-medium rounded-md ease-in-out duration-150 hover:transform hover:scale-110 hover:drop-shadow-3xl hover:animate-wiggle"
              >
              Portfolio
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const Title = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TypeAnimation
          sequence={[
            `Hi, I'm Ben Simmers`,
            2000,
            `I work as a full stack web developer`,
            2000,
            `and study Computer Science`,
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "3em", padding: "10px" }}
        />
      </div>
    </>
  );
};

const InitialPage = () => {
  return (
    <div>
      <main>
        <div>
          <div className="title-card">
            <Title />
          </div>
        </div>
      </main>
    </div>
  );
};

function Home() {
  return (
    <div className="App">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="leading-none">
          <InitialPage />
        </div>
        <div className="AboutMe">
          <div style={{ marginBottom: "50px" }}></div>
          <AboutMe />
        </div>
        <div className="TimeLine">
          <div style={{ marginBottom: "50px" }}></div>

          <TimeLine />
        </div>
        <div className="Skills">
          <div style={{ marginBottom: "50px" }}></div>
          <Skills />
        </div>
        <div className="ContactMe">
          <div style={{ marginBottom: "50px" }}></div>
          <ContactMe />
        </div>
      </main>
    </div>
  );
}

function App() {
  return <Navigation />;
}

export default App;
