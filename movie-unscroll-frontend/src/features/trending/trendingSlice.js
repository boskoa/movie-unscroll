import axios from "axios";

import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/movies/trending";

const trendingAdapter = createEntityAdapter();

const initialState = trendingAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getTrending = createAsyncThunk(
  "trending/getTrending",
  async (data) => {
    const { token, page } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.get(`${BASE_URL}?page=${page}`, config);
    return response.data;
  },
);

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrending.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        trendingAdapter.upsertMany(state, action.payload);
      })
      .addCase(getTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllTrending,
  selectIds: selectTrendingIds,
  selectById: selectTrendingById,
} = trendingAdapter.getSelectors((state) => state.trending);

export function selectTrendingLoading(state) {
  return state.suggestions.loading;
}

export default trendingSlice.reducer;
