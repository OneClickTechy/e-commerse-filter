import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle", //'loading', 'succeeded', 'failed'
  error: null,
};

const API_URL = "http://localhost:3500/products";

// Async thunk to fetch products
const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
});

// Slice definition
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Update status to succeeded
        state.products = action.payload; // Update products with fetched data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Update status to failed
        state.error = action.error?.message || "An error occurred"; // Safely access error message
      });
  },
});

// Selector functions to access the state
export const getAllProducts = (state) => state.products.products; // Access the product list
export const getPostsStatus = (state) => state.products.status; // Access the loading status
export const getPostsError = (state) => state.products.error; // Access any errors

export { fetchProducts };
export default productSlice.reducer;
