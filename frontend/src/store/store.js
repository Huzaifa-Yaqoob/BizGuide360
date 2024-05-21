import { configureStore } from "@reduxjs/toolkit";
import authStatusReducer from "./states/authStatus";
import registerFormReducer from "./states/registerForm";
import userDataReducer from "./states/userData";

export default configureStore({
  reducer: {
    authStatus: authStatusReducer,
    registerForm: registerFormReducer,
    userData: userDataReducer,
  },
});
