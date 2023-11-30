export default function Projects() {
  type Projects = {
    id: number;
    title: string;
    description: string;
    url: string;
  };

  const projects: Projects[] = [
    {
      id: 1,
      title: "Personal Website",
      description: "This website you are on right now!",
      url: "https://bensimmers.dev/",
    },
    {
      id: 2,
      title: "TestLab360",
      description: "The new TestLab360 client website",
      url: "https://www.testlab360.com.au/",
    },
    {
      id: 3,
      title: "VFX Portfolio",
      description: "A portfolio website VFX work as a hobby",
      url: "https://vfx-portfolio.vercel.app/",
    },

    {
      id: 4,
      title: "API development tool",
      description: "A tool to help developers test their API's",
      url: "https://rest-client.vercel.app/",
    },

    {
      id: 5,
      title: "Sudoku",
      description: "Play a game of Sudoku",
      url: "https://sudoku-chi-blush.vercel.app/",
    },

    {
      id: 6,
      title: "Another AI tool",
      description: "AI Image generation tool (expired tool)",
      url: "https://another-ai-tool.vercel.app/",
    },

    {
      id: 7,
      title: "GraphQL File Sender",
      description: "A tool to send files to and from a GraphQL server",
      url: "https://www.npmjs.com/package/graphql-file-sender",
    }


  ];

  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A selection of projects I have worked on.
          </p>
        </div>

        <div className="mt-10 lg:ml-40">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-base leading-6 text-gray-500">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      className="text-base leading-6 text-indigo-600 font-semibold hover:text-indigo-500 transition ease-in-out duration-150"
                    >
                      View Project
                    </a>
                    <div className="mb-10" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:text-center">
          <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            More to come!
          </p>
        </div>
      </main>
    </>
  );
}
