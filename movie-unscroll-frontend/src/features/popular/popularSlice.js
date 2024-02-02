import axios from "axios";

import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/movies/popular";

const popularAdapter = createEntityAdapter();

const initialState = popularAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getPopular = createAsyncThunk(
  "popular/getPopular",
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

const popularSlice = createSlice({
  name: "theaters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopular.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        popularAdapter.upsertMany(state, action.payload);
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllPopular,
  selectIds: selectPopularIds,
  selectById: selectPopularById,
} = popularAdapter.getSelectors((state) => state.popular);

export function selectPopularLoading(state) {
  return state.popular.loading;
}

export default popularSlice.reducer;
