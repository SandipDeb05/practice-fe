import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/reducers";
import commonSlice from "./common/reducers";

const store = configureStore({
  reducer: {
    auth: auth,
    common: commonSlice,
  },
});

export default store;
