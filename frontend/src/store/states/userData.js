import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "UserData",
  initialState: {
    data: {
      avatar: "/defaultAvatar.jpeg",
    },
    // give it a string value at start because rootLayout component will decide this value and it solves a bug where every time user refreshes any page even he is logged in is redirected to
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      state.data = {
        ...action.payload,
        userData: {
          ...action.payload.userData,
          avatar: action.payload.userData.avatar ?? "/defaultAvatar.jpeg",
        },
      };
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.data = {};
      state.isLoggedIn = false;
    },
    updateName: (state, action) => {
      console.log(action.payload, "as");
      console.log(state.data, "state.data");
      state.data = {
        ...state.data,
        userData: {
          ...state.data.userData,
          username: action.payload,
        },
      };
    },
    updateAvatar: (state, action) => {
      console.log(action.payload, "as");
      console.log(state.data, "state.data");
      state.data = {
        ...state.data,
        userData: {
          ...state.data.userData,
          avatar: action.payload,
        },
      };
    },
  },
});

export const { logIn, logOut, updateName, updateAvatar } = userData.actions;

export default userData.reducer;
