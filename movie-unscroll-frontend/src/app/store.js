import { configureStore } from "@reduxjs/toolkit";
import random from "../features/random/randomSlice";
import login from "../features/login/loginSlice";

const store = configureStore({
  reducer: {
    random,
    login,
  },
});

export default store;
