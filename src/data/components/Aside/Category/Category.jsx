import React from "react";
import { useState } from "react";

const Category = () => {
  //category list
  const categoryList = ["all", "sneakers", "flats", "sandals", "Heels"];
  //value for radio buttons
  const [selected, setSelected] = useState(categoryList[0]);
  //handle values -> radio buttons
  const handleChange = (e) => setSelected(e.target.value);

  return (
    <section>
      <h1>Category</h1>
      <fieldset className="flex flex-col gap-2">
        {categoryList.map((item, index) => (
          <label key={index} htmlFor={item}>
            <input
              type="radio"
              name="category"
              value={item}
              checked={selected === item}
              onChange={handleChange}
              id={item}
              className="w-4 h-4"
            />
            &nbsp;&nbsp;
            {item[0].toUpperCase() + item.slice(1)}
          </label>
        ))}
      </fieldset>
    </section>
  );
};

export default Category;
