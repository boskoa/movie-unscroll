import { configureStore } from "@reduxjs/toolkit";
import random from "../features/random/randomSlice";

const store = configureStore({
  reducer: {
    random,
  },
});

export default store;
