import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loggedIn: (state, action) => {
      return { isLoggedIn: true, user: action.payload };
    },
    loggedOut: (state, action) => {
      return { ...initialState };
    },
  },
});

export default auth.reducer;
