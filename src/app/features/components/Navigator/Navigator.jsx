import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Buttons from "./Buttons/Buttons";

const Navigator = () => {
  return (
    <nav className="bg-white z-10 sticky top-0  col-start-2 col-end-[-1] flex justify-evenly items-start">
      <SearchBar />
      <Buttons />
    </nav>
  );
};

export default Navigator;
