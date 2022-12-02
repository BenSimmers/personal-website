import React from "react";

export default function ContactMe(){
  return(
    <>
    <div style={{paddingTop: 30}}/>
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">Contact Me</h2>
      {/* 3 columns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Column 1 */}
        <div className="col-span-1">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Email</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Email me <a href="mailto: ben.simmers2002@outlook.com"> <b>here</b></a>
              </p>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-span-1">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">LinkedIn</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Connect with me <a href="https://www.linkedin.com/in/benjamin-simmers-45385b236/"><b>here</b></a>
              </p>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-span-1">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">GitHub</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Have a look at some projects <a href="https://github.com/BenSimmers"><b>here</b></a>
              </p>
            </div>
          </div>
        </div>
        <div style={{paddingTop: "20px"}}/>
      </div>





    </>
  )
}
