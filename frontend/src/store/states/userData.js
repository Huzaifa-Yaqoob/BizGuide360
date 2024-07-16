import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "UserData",
  initialState: {
    data: {
      avatar: "/defaultAvatar.jpeg",
    },
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        data: {
          ...action.payload,
          userData: {
            ...action.payload.userData,
            avatar: action.payload.userData.avatar ?? "/defaultAvatar.jpeg",
          },
        },
        isLoggedIn: true,
      };
    },
    logOut: (state) => {
      return { ...state, data: {}, isLoggedIn: false };
    },
    updateName: (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          userData: {
            ...state.data.userData,
            username: action.payload,
          },
        },
      };
    },
    updateAvatar: (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          userData: {
            ...state.data.userData,
            avatar: action.payload,
          },
        },
      };
    },
  },
});

export const { logIn, logOut, updateName, updateAvatar } = userData.actions;

export default userData.reducer;
