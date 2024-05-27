import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "UserData",
  initialState: {
    data: {},
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.data = {};
      state.isLoggedIn = false;
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
