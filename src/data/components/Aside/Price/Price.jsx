import React, { useState } from "react";

const Price = () => {
  //price list
  const priceRanges = [
    { value: "all", label: "All" },
    { value: "0-50", label: "$0 - $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-150", label: "$100 - $150" },
    { value: "over-150", label: "Over $150" },
  ];
  //value for radio btns
  const [selected, setSelected] = useState(priceRanges[0].value);
  //handle value for radio btns
  const handleChange = (e) => setSelected(e.target.value);
  return (
    <section>
      <h1>Price</h1>
      <fieldset className="flex flex-col gap-2">
        {priceRanges.map((price, index) => (
          <label htmlFor={price.value} key={index}>
            <input
              type="radio"
              name="price"
              id={price.value}
              value={price.value}
              className="w-4 h-4"
              checked={selected === price.value}
              onChange={handleChange}
            />
            &nbsp;&nbsp;
            {price.label}
          </label>
        ))}
      </fieldset>
    </section>
  );
};

export default Price;
