import { configureStore } from "@reduxjs/toolkit";
import authStatusReducer from "./states/authStatus";
import registerFormReducer from "./states/registerForm";

export default configureStore({
  reducer: {
    authStatus: authStatusReducer,
    registerForm: registerFormReducer,
  },
});
