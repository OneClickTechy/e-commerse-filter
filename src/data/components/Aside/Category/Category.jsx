import React from "react";
import { useState } from "react";

const Category = () => {
  const categoryList = ["all", "sneakers", "flats", "sandals", "Heels"];
  const [selected, setSelected] = useState(categoryList[0]);
  const handleChange = (e) => setSelected(e.target.value);
  return (
    <section>
      <h1>Category</h1>
      <fieldset>
        {categoryList.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              name="category"
              value={item}
              checked={selected === item}
              onChange={handleChange}
            />
            {item[0].toUpperCase() + item.slice(1)}
          </label>
        ))}
      </fieldset>
    </section>
  );
};

export default Category;
