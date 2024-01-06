import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/random";

const initialState = {
  loading: false,
  error: null,
  movie: null,
};

export const getRandomMovie = createAsyncThunk(
  "random/getRandomMovie",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRandomMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.movie = action.payload;
      })
      .addCase(getRandomMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export function selectRandom(state) {
  return state.random.movie;
}

export default randomSlice.reducer;
