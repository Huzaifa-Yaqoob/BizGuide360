import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "UserData",
  initialState: {
    data: {},
    status: "",
  },
  reducers: {
    logIn: (state, action) => {
      state.data = action.payload;
      state.status = "LOGIN";
    },
    logOut: (state) => {
      state.data = {};
      state.status = "";
    },
    updateName: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
});

export const { logIn, logOut, updateName } = userData.actions;

export default userData.reducer;
