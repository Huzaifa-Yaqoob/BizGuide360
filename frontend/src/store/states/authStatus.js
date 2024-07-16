import { createSlice } from "@reduxjs/toolkit";

export const authStatus = createSlice({
  name: "AuthStatus",
  initialState: {
    value: "",
  },
  reducers: {
    openRegister: (state) => {
      return { ...state, value: "Register" };
    },
    openRegister2: (state) => {
      return { ...state, value: "Register2" };
    },
    openVerifyEmail: (state) => {
      return { ...state, value: "VerifyEmail" };
    },
    reset: (state) => {
      return { ...state, value: "" };
    },
  },
});

export const { openRegister, openRegister2, openVerifyEmail, reset } =
  authStatus.actions;

export default authStatus.reducer;
