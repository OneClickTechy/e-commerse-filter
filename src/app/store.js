import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import filterReducer from "./features/filterSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filterReducer,
  },
});
