import { configureStore } from "@reduxjs/toolkit";
import random from "../features/random/randomSlice";
import login from "../features/login/loginSlice";
import users from "../features/users/usersSlice";
import suggestions from "../features/suggestions/suggestionsSlice";
import trending from "../features/trending/trendingSlice";
import theaters from "../features/theaters/theatersSlice";
import popular from "../features/popular/popularSlice";
import topRated from "../features/topRated/topRatedSlice";
import discover from "../features/discover/discoverSlice";
import bookmarks from "../features/bookmarks/bookmarksSlice";

const store = configureStore({
  reducer: {
    random,
    login,
    users,
    suggestions,
    trending,
    theaters,
    popular,
    topRated,
    discover,
    bookmarks,
  },
});

export default store;
