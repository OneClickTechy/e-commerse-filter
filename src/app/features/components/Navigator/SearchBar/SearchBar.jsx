import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchAdded } from "../../../filterSlice";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchAdded(e.target.value));
  } 
  useEffect(() => console.log(searchValue), [searchValue]);
  return (
    <form>
      <label htmlFor="search-product" className="absolute left-[-99999px]">
        Search Product
      </label>
      <input
        type="search"
        name="search-product"
        id="search-product"
        className="border-gray-500 border-2 rounded-2xl px-2 py-2"
        placeholder="search products...."
        value={searchValue}
        onChange={handleSearchValue}
      />
    </form>
  );
};

export default SearchBar;
