import { createSlice } from "@reduxjs/toolkit";

export const area = createSlice({
  name: "AuthStatus",
  initialState: [],
  reducers: {
    setAreas: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setAreas } = area.actions;

export default area.reducer;
