import { createSlice } from "@reduxjs/toolkit";

export const authStatus = createSlice({
  name: "AuthStatus",
  initialState: {
    value: "",
  },
  reducers: {
    openRegister: (state) => {
      state.value = "Register";
    },
    openVerifyEmail: (state) => {
      state.value = "VerifyEmail";
    },
    reset: (state) => {
      state.value = "";
    },
  },
});

export const { openRegister, openVerifyEmail, reset } = authStatus.actions;

export default authStatus.reducer;
