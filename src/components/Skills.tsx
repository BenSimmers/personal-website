import React from "react";



export default function Skills(props: any) {
  const skills = [
    {
      title: "Languages",
      description: "Python, Java, C#, C, JavaScript, HTML, CSS, TypeScript, SQL, PostGreSQL, SQLite",
    },
    {
      title: "Frameworks",
      description: "React.js, React Native, Flask, Jinja, Tailwind CSS, Bootstrap, Express.js, Node, Material UI",
    },
    {
      title: "Tools",
      description: "Git, GitHub, Docker, AWS, Figma, Azure, Heroku, Linux, Windows, Mac",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">My Skills</h2>
      {skills.map((skill) => (
        <>
        <div style={{ paddingTop: 35 }} />
        <div className="card">
          <div className="p-6 text-center">
            <h5 className="mb-2 text-4xl font-bold text-black dark:text-black py-3">
              {skill.title}
            </h5>
            <p className="text-2xl text-gray-600 dark:text-gray-600 py-3">
              {skill.description}
              <div style={{ paddingTop: 25 }} />
            </p>
          </div>
        </div>
        </>
      ))}
    </>
  );
}
