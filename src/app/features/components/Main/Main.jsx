import React from "react";
import Recommended from "./Recommended/Recommended";
import Content from "../../../features/components/Main/Content/Content";

const Main = () => {
  
  return (
    <main className="relative grid col-start-2 col-end-[-1]">
      <Recommended />
      <Content />
    </main>
  );
};

export default Main;
