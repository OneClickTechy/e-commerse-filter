import React from "react";

const SearchBar = () => {
  return (
    <form>
      <label htmlFor="search-product">Search Product</label>
      <input type="search" name="search-product" id="search-product" className=""/>
    </form>
  );
};

export default SearchBar;
