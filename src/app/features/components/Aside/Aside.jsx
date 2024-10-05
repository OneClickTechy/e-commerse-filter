import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import AppIcon from "./AppIcon/AppIcon";

const Aside = () => {
  return (
    <aside className="row-span-12  left-0 p-4">
      <AppIcon/>
      <Category />
      <Price />
      <Colors />
    </aside>
  );
};

export default Aside;
