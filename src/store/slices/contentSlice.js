import { createSlice } from "@reduxjs/toolkit";
// import { KEYS } from "../../config/Constant";

const initialState = {
  privacyData: null,
};

export const userSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setPrivacyData: (state, action) => {
      state.privacyData = action.payload;
    },
  },
});

export const { setPrivacyData } = userSlice.actions;

export default userSlice.reducer;
