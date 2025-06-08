import { AcademicCapIcon, BookOpenIcon, DesktopComputerIcon, OfficeBuildingIcon } from "@heroicons/react/outline";

export const content = {
  titleArray: {
    sequence: [
      `Hi, I'm Ben Simmers`,
      2000,
      `I work as a full stack developer`,
      2000,
      `and a Comp Sci graduate`,
      2000,
    ],
  },
  Introduction: {
    introduction: "I’m a full-stack web developer from Brisbane, Australia, skilled in TypeScript, C#, React, and Redux, and currently learning Go. I also have experience with low-level C programming. Outside of tech, I enjoy rock climbing, hiking, playing soccer, and watching films.",
  },
  features: [
    { name: "Currently Learning", description: "Kubernetes, Rust" },
    {
      name: "My Interests",
      description:
        "Games, programming, solving interesting problems, reading, football, film, rock climbing, bouldering",
    },
    {
      name: "Skills",
      description:
        "JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS",
    },
  ],

  timeLineItems: [
    {
      title: "Began studying Computer Science",
      date: "March 2021 - December 2023",
      content: "Bachelors degree of Information Technology majoring in Computer Science and IoT mobile technologies at the Queensland University of Technology.",
      icon: <BookOpenIcon className="w-2.5 h-2.5 text-blue-800" />
      ,
    },
    {
      title: "Software Developer",
      date: "June 2022 - March 2024",
      content: "Junior developer and UX designer at TestLab360. Contributing and maintaining full stack applications with various technologies in the construction/LIMS industry.",
      icon: <OfficeBuildingIcon className="w-2.5 h-2.5 text-blue-800" />,
    },
    {
      title: "Volunteer Software Developer",
      date: "March 2023 - November 2023",
      content: "Apart of the QUT Capstone project, developing a full stack application for a real-world client in the health industry.",
      icon: <DesktopComputerIcon className="w-2.5 h-2.5 text-blue-800" />
    },
    {
      title: "Graduated from QUT",
      date: "December 2023",
      content: "Graduated with a Bachelor of Information Technology majoring in Computer Science and minor IoT mobile technologies, with Distinction.",
      icon: <AcademicCapIcon className="w-2.5 h-2.5 text-blue-800" />
    },
    {
      title: "Software Developer",
      date: "April 2024 - Present",
      content: "Software developer at Technology One, Contributing and maintaining full stack applications with various technologies in the higher education sector.",
      icon: <OfficeBuildingIcon className="w-2.5 h-2.5 text-blue-800" />
    }
  ],

  skills: [
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
  ],
}
