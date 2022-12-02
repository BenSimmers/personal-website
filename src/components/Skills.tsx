import React from "react";
import Card from "./Card";

export default function Skills(props: any) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl" style={{paddingLeft: 17}}>
        My Skills
      </h2>

      <Card
        title="Languages"
        description="Python, Java, C#, C, JavaScript, HTML, CSS, TypeScript, SQL, Assembly, PosGresSQL, SQLite, PHP"
      />

      <Card
        title="Frameworks"
        description="React.js, React Native, Flask, Jinja, Tailwind, Bootstrap, Express.js, Node, Material UI"
      />

      <Card
        title="Tools"
        description="Git, GitHub, Docker, AWS, Figma Azure, Heroku, Linux, Windows, Mac"
      />
    </>
  );
}
