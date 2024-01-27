import { configureStore } from "@reduxjs/toolkit";
import random from "../features/random/randomSlice";
import login from "../features/login/loginSlice";
import users from "../features/users/usersSlice";
import suggestions from "../features/suggestions/suggestionsSlice";

const store = configureStore({
  reducer: {
    random,
    login,
    users,
    suggestions,
  },
});

export default store;
