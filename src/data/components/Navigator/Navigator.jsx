import React from "react";
import AppIcon from "./AppIcon/AppIcon";
import SearchBar from "./SearchBar/SearchBar";
import Buttons from "./Buttons/Buttons";

const Navigator = () => {
  return (
    <nav className="flex justify-between items-center p-2">
      <AppIcon />
      <SearchBar />
      <Buttons />
    </nav>
  );
};

export default Navigator;
