import React, { useEffect, useState } from "react";

const Colors = () => {
  const title = "Colors";
  const [selectedColor, setSelectedColor] = useState("allcolors");
  const handleColor = (e) => setSelectedColor(e.target.value);
  useEffect(() => console.log(selectedColor), [selectedColor]);
  const colors = [
    {
      value: "allcolors",
      name: "All",
      bgColor: "bg-gradient-to-r from-red-500 via-green-500 to-blue-500",
    },
    {
      value: "black",
      name: "Black",
      bgColor: 'bg-black'
    },
    {
      value: "blue",
      name: "Blue",
      bgColor: "bg-blue-500",
    },
    {
      value: "red",
      name: "Red",
      bgColor: "bg-red-500",
    },
    {
      value: "green",
      name: "Green",
      bgColor: "bg-green-500",
    },
    {
      value: "white",
      name: "White",
      bgColor: "bg-white",
    },
  ];
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex flex-col leading-8 gap-2">
        {colors.map((color, index) => (
          <label htmlFor={color.value} key={index} className="flex flex-nowrap">
            <input
              type="radio"
              name="color"
              id={color.value}
              value={color.value}
              checked={selectedColor === color.value}
              onChange={handleColor}
              className="sr-only"
            />
  <div
  className={`w-6 h-6 ${color.bgColor} rounded-full ${
    color.value === "white" ? "border-2 border-gray-500" : ""
  } focus:ring-2 focus:ring-blue-600 active:ring-2 active:ring-blue-600`}
></div>


            &nbsp;
            <span>
            {color.name}

            </span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default Colors;
