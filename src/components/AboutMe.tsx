const features = [
  { name: 'Currently Learning', description: 'Rust and ASP.NET' },
  { name: 'My Interests', description: 'Video games, programming, problem solving, reading, football, Film' },
  { name:  'Things I Know', description: 'JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS' },
  { name: 'Things I Want to Learn', description: 'Go, Flutter'},
]

export default function AboutMe() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-white-500">
           I'm a full-stack developer with a passion for Learning and building new things. Currently Enrolled at QUT studying Information Technology majoring in Computer Science with a minor in IoT/Mobile Technologies.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-white-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-white-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="col-span-2 row-span-2 bg-transparent rounded-lg shadow-lg overflow-hidden">

            </div>

        </div>
      </div>
    </div>
  )
}