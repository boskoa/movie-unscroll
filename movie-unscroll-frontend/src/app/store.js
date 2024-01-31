import { configureStore } from "@reduxjs/toolkit";
import random from "../features/random/randomSlice";
import login from "../features/login/loginSlice";
import users from "../features/users/usersSlice";
import suggestions from "../features/suggestions/suggestionsSlice";
import trending from "../features/trending/trendingSlice";

const store = configureStore({
  reducer: {
    random,
    login,
    users,
    suggestions,
    trending,
  },
});

export default store;
