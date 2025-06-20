import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/reducers";

const store = configureStore({
  reducer: {
    auth: auth,
  },
});

export default store;
