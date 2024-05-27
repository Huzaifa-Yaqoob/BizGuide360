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
    openRegister2: (state) => {
      state.value = "Register2";
    },
    openVerifyEmail: (state) => {
      state.value = "VerifyEmail";
    },
    reset: (state) => {
      state.value = "";
    },
  },
});

export const { openRegister, openRegister2, openVerifyEmail, reset } =
  authStatus.actions;

export default authStatus.reducer;
