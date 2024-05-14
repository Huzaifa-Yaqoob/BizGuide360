import { createSlice } from "@reduxjs/toolkit";

export const registerForm = createSlice({
  name: "RegisterForm",
  initialState: {
    value: {},
  },
  reducers: {
    addValues: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = {};
    },
  },
});

export const { addValues, reset } = registerForm.actions;

export default registerForm.reducer;
