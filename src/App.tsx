import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
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
    <p className="text">Scroll down to see more...</p>

    </>
  );
};

function App() {
  return (
    <div className="App">
      <div className="leading-none">
        <Title />
      </div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
