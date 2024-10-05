import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { categoryAdded } from "../../../filterSlice";

const Category = () => {
  const title = "Category";
  const [selectedRadio, setSelectedRadio] = useState("allcategory");
  const category = [
    { name: "All", value: "allcategory" },
    { name: "Sneakers", value: "sneakers" },
    { name: "Flats", value: "flats" },
    { name: "Sandals", value: "sandals" },
    { name: "Heels", value: "heels" },
  ];
  const dispatch = useDispatch()
  useEffect(() => console.log(selectedRadio), [selectedRadio]);
  const handleCategory = (e) => {
    setSelectedRadio(e.target.value);
    dispatch(categoryAdded(e.target.value))
  };
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex flex-col leading-8">
        {category.map((item, index) => (
          <label htmlFor={item.value} key={index}>
            <input
              type="radio"
              name="category"
              id={item.value}
              value={item.value}
              checked={selectedRadio === item.value}
              onChange={handleCategory}
            />
            &nbsp;
            {item.name}
          </label>
        ))}
      </div>
    </section>
  );
};

export default Category;
