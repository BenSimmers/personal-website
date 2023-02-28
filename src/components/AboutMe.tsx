
import React from "react";

type Features = {
  name: string;
  description: string;
};

const features: Features[] = [
  { name: "Currently Learning", 
    description: "Rust and ASP.NET, F#, Arm Assembly"
  },
  {
    name: "My Interests",
    description: "Games, programming, solving interesting problems, reading, football, film",
  },
  {
    name: "Skills",
    description: "JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS",
  },
  { 
    name: "What I Plan to Learn", 
    description: "Go, Flutter, Swift" 
  },
];

const introduction = "I'm a full-stack web developer from Brisbane, Australia with a passion for learning and building new things. Currently I'm enrolled at QUT while studying a Bachelor of Information Technology, majoring in Computer Science with a minor in IoT/Mobile Technologies.";

export default function AboutMe() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">About Me</h2>
      <p className="mt-4 text-lg text-black rounded outline outline-[3px] p-3 bg-white outline-black ">
        <div style={{paddingTop: "10px"}}/>
        {introduction}
        <div style={{paddingTop: "20px"}}/>
        <iframe className="rounded"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453481.3003842029!2d152.71301028197632!3d-27.381253325856218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1669720558116!5m2!1sen!2sau" height="450" width="100%" style={{border:0}} loading="lazy"></iframe>
      </p>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name} className="p-6 text-center outline outline-[3px] rounded bg-[#726CE5] hover:transition-in-out hover:bg-[#a6a2f5]">
            <h5 className="mb-2 text-3xl font-bold text-black dark:text-black py-3">
              {feature.name}
            </h5>
            <p className="text-3xl text-black sm:text-lg dark:text-black py-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div style={{paddingTop: "20px"}}/>
    </div>
  );
}
