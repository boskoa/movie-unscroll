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
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export function selectLoggedUser(state) {
  return state.login.user;
}

export function selectLoggedError(state) {
  return state.login.error;
}

export const { alreadyLogged, logout, clearError } = loginSlice.actions;

export default loginSlice.reducer;
