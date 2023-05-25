import react from "react";

export const Reading = (): JSX.Element => {
  // const books = {

  //   title: 'Learning React Functional Web Development with React and Redux',
  // }

  const books = [
    {
      title: "Learning React Functional Web Development with React and Redux",
    },
    {
      title: " The C Programming Language",
    },
    {
      title:
        "Design Patterns: Elements of Reusable Object-Oriented Software - Planning to read",
    },
    {
      title: "Zig Language",
    },
    {
      title: "Dioxus Rust Web Framework",
    },
    {
      title: "The Silmarillion",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">Reading</h2>
      <p className="text-2xl text-gray-600 dark:text-gray-600 py-3">
        Books, articles, and other things I'm reading.
      </p>

      {books.map((book) => (
        <div key={book.title} className="text-2xl text-black py-3 outline outline-black mb-10 p-3 mt-5 border rounded-md bg-sky-500/75">
          <p>
            {book.title}
          </p>
        </div>
      ))}
    </div>
  );
};
