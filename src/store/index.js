import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import contentSlice from "./slices/contentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentSlice,
  },
});

export default store;
