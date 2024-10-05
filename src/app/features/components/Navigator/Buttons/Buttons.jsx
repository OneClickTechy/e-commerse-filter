import React from "react";
import { FaRegHeart, FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Buttons = () => {
  return (
    <div className="flex justify-center p-2 items-center gap-4">
      <FaRegHeart className="w-6 h-6"/>
      <FaCartShopping className="w-6 h-6"/>
      <FaUserPlus className="w-6 h-6"/>
    </div>
  );
};

export default Buttons;
