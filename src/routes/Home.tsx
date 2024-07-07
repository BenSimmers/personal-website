import React from "react";
import { Title } from "../components/Title";

const Wrapper = () => (
  <div
    className="container mx-auto px-4 flex justify-center"
    style={{ height: "80vh" }}
  >
    <div className="flex justify-center flex-col">
      <Title />
    </div>
  </div>
);

export default Wrapper;
