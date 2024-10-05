import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "allcategory",
  price: "allprice",
  color: "allcolors",
  search: "",
  recommended: "allProduct",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryAdded: {
      reducer: (state, action) => {
        state.category = action.payload;
      },
    },
    priceAdded: {
      reducer: (state, action) => {
        state.price = action.payload;
      },
    },
    colorAdded: {
      reducer: (state, action) => {
        state.color = action.payload;
      },
    },
    searchAdded: {
      reducer: (state, action) => {
        state.search = action.payload;
      },
    },
    recommendedAdded: {
      reducer: (state, action) => {
        state.recommended = action.payload;
        console.log(state.recommended)
      },
    },
  },
});
export default filterSlice.reducer;
export const { categoryAdded, priceAdded, colorAdded, searchAdded, recommendedAdded } =
  filterSlice.actions;
export const selectCategory = (state) => state.filter.category;
export const selectPrice = (state) => state.filter.price;
export const selectColor = (state) => state.filter.color;
export const selectSearch = (state) => state.filter.search;
export const selectRecommended = (state) => state.filter.recommended;
