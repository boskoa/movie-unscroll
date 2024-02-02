import axios from "axios";

import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/movies/top-rated";

const topRatedAdapter = createEntityAdapter();

const initialState = topRatedAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getTopRated = createAsyncThunk(
  "topRated/getTopRated",
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

const topRatedSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopRated.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        topRatedAdapter.upsertMany(state, action.payload);
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllTopRated,
  selectIds: selectTopRatedIds,
  selectById: selectTopRatedById,
} = topRatedAdapter.getSelectors((state) => state.topRated);

export function selectTopRatedLoading(state) {
  return state.topRated.loading;
}

export default topRatedSlice.reducer;
