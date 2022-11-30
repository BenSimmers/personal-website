


export default function Skills(){
  return(
    <>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">My Skills</h2>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md text-black">
                    Languages
                </div>

                <div className="flex flex-col items-center justify-between mt-5">
                    <p className="mt-2 text-sm text-gray-500">
                        Python, Java, C#, C, JavaScript, HTML, CSS, TypeScript, SQL, Assembly
                    </p>
                </div>
            </div>

            <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg ">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md text-black">
                    Frameworks
                </div>
                
                <div className="flex flex-col items-center justify-between mt-5">
                    <p className="mt-2 text-sm text-gray-500">
                    React, Flask, Jinja, Tailwind, Bootstrap, Express, Node, Material UI
                    </p>
                </div>
            </div>



                <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-md text-black">
                    Tools


                    </div>
                    <div className="flex flex-col items-center justify-between mt-5">
                        <p className="mt-2 text-sm text-gray-500">
                        Git, GitHub, Docker, AWS, Heroku, MongoDB, MySQL, PostgreSQL, SQLite, Linux, Windows, Mac
                        </p>

                    </div>
                </div>

            
        </div>
    </>
  )
}