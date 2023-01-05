import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

import { TypeAnimation } from "react-type-animation";

import { BrowserRouter, Route, Link } from "react-router-dom";

const Title = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93vh",
        padding: 5,
      }}
    >
      <TypeAnimation
        sequence={[
          `Hi, I'm Ben Simmers`,
          2000, // Waits 2s

          `I work as a full stack web developer`,
          2000, // Waits 2s
          `and studying Computer Science at QUT`,
          2000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "4em", padding: 5 }}
      />
    </div>
    <p className="text" style={{marginBottom: "5px"}}>Scroll down to learn more about me</p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="leading-none">
          <Title />
        </div>
        <div className="AboutMe">
          <AboutMe />
        </div>
        <div className="Skills">
          <Skills />
        </div>
        <div className="ContactMe">
          <ContactMe />
        </div>
      </main>
    </div>
  );
}

export default App;
