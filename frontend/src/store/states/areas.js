import { createSlice } from "@reduxjs/toolkit";

export const area = createSlice({
  name: "Area",
  initialState: [],
  reducers: {
    setAreas: (state, action) => {
      return action.payload;
    },
    addArea: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setAreas, addArea } = area.actions;

export default area.reducer;
