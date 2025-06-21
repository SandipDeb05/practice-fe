import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./state";

export const commonSlice = createSlice({
  name: "common",
  initialState: INITIAL_STATE,
  reducers: {
    toggleBackdrop: (state, action) => {
      return { ...state, isBackdropShown: action.payload };
    },
  },
});

export default commonSlice.reducer;
