import React, { useEffect, useState } from "react";

const Price = () => {
  const title = "Price";
  const [selectedRadio, setSelectedRadio] = useState("allprice");
  const handleprice = (e) => {
    setSelectedRadio(e.target.value);
  };
  const price = [
    { name: "All", value: "allprice" },
    { name: "$0 - $50", value: "0-50" },
    { name: "$50 - $100", value: "50-100" },
    { name: "Over $150", value: "150+" },
  ];
  useEffect(() => console.log(selectedRadio), [selectedRadio]);
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex flex-col leading-8">
        {price.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              name="price"
              id={item.value}
              value={item.value}
              onChange={handleprice}
              checked={selectedRadio === item.value}
            />
            <label htmlFor={item.value}>{item.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
