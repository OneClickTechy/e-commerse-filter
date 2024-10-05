import React from "react";
import { useState } from "react";

const Recommended = () => {
  const title = "Recommended";
  const [Recommended, setRecommended] = useState("allProduct");
  const handleRecommended = (e) => setRecommended(e.target.value);
  const buttons = [
    { value: "allProduct", title: "All Products" },
    { value: "Nike", title: "Nike" },
    { value: "Adidas", title: "Adidas" },
    { value: "Puma", title: "Puma" },
    { value: "Vans", title: "Vans" },
  ];
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex gap-4">
        {buttons.map((button) => (
          <button
            className={`border border-gray-500 rounded-lg p-1 ${Recommended === button.value ? 'text-white bg-black/50' : ''} `}
            type="button"
            value={button.value}
            onClick={handleRecommended}
          >
            {button.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
