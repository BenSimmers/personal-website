const features = [
  { name: 'Currently Learning', description: 'Rust and ASP.NET' },
  { name: 'My Interests', description: 'Video games, programming, problem solving, reading, football, Film' },
  { name:  'Skills', description: 'JavaScript, TypeScript, Python, C#, C, HTML, CSS, Docker, Git, SQL, React, Express, PostgreSQL, AWS' },
  { name: 'What I Want to Learn', description: 'Go, Flutter, Swift'},
]

export default function AboutMe() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-white-500">
           I'm a full-stack developer from <b>Brisbane Australia</b> with a passion for Learning and building new things. Currently Enrolled at QUT studying Information Technology majoring in Computer Science with a minor in IoT/Mobile Technologies.
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
                Where I'm From
                <iframe className="rounded"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453481.3003842029!2d152.71301028197632!3d-27.381253325856218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1669720558116!5m2!1sen!2sau" width="600" height="450"  loading="lazy" >


                </iframe>
            </div>

        </div>
      </div>
    </div>
  )
}