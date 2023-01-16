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
        // height: "100vh",

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
    {/* <p className="text" style={{marginBottom: "5px"}}>Scroll down to learn more about me</p> */}


    </>
  );
};

const InitialPage = () => {
  return (
    <div >
      <main className="">
        <div>
        <div className="title-card">
          <Title />
        </div>
        </div>
      </main>
    </div>
  );
};




function App() {
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

export default App;
