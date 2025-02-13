import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import userProfile from "./slices/profileSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: userProfile
  },
});

export default store;
