import React from "react";
import { FaRegHeart, FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Buttons = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <FaRegHeart />
      <FaCartShopping />
      <FaUserPlus />
    </div>
  );
};

export default Buttons;
