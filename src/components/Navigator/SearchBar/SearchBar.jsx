import React from "react";

const SearchBar = () => {
  return (
    <form>
      <label htmlFor="search-product" className="absolute left-[-99999px]">Search Product</label>
      <input type="search" name="search-product" id="search-product" className="border-gray-500 border-2 rounded-2xl px-2 py-2" placeholder="search products...."/>
    </form>
  );
};

export default SearchBar;
