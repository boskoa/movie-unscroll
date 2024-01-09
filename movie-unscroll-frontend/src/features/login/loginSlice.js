import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/login";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials) => {
    const response = await axios.post(BASE_URL, { ...credentials });
    window.localStorage.setItem(
      "loggedMovieUnscroll",
      JSON.stringify({ ...response.data }),
    );
    return response.data;
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    alreadyLogged: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export function selectLoggedUser(state) {
  return state.login.user;
}

export const { alreadyLogged, logout } = loginSlice.actions;

export default loginSlice.reducer;
