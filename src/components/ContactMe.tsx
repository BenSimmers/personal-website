import React from "react";
import "../../src/App.css";

export default function ContactMe() {
  return (
    <>
      <div style={{ paddingTop: 30 }} />
      <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-5xl">
        Contact Me
      </h2>
      <div style={{ paddingTop: 30 }} />
      {/* 3 columns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Column 1 */}
        <div className="col-span-1">
          <a href="https://github.com/BenSimmers" className="button-contact">
            Github
          </a>
        </div>
        {/* Column 2 */}
        <div className="col-span-1">
          <a
            href="https://www.linkedin.com/in/benjamin-simmers-45385b236/"
            className="button-contact"
          >
            LinkedIn
          </a>
        </div>
        {/* Column 3 */}
        <div className="col-span-1">
          <a href="mailto:mailto:bej1380@gmail.com" className="button-contact">
            Email
          </a>
        </div>
        <div style={{ paddingTop: "20px" }} />
      </div>
    </>
  );
}
