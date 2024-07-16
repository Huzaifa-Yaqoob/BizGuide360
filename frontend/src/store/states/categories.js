import { createSlice } from "@reduxjs/toolkit";

export const categories = createSlice({
  name: "Category",
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setCategories, addCategory } = categories.actions;

export default categories.reducer;
