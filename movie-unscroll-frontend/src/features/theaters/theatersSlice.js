import axios from "axios";

import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/movies/theaters";

const theatersAdapter = createEntityAdapter();

const initialState = theatersAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getTheaters = createAsyncThunk(
  "theaters/getTheaters",
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

const theatersSlice = createSlice({
  name: "theaters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTheaters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTheaters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        theatersAdapter.upsertMany(state, action.payload);
      })
      .addCase(getTheaters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllTheaters,
  selectIds: selectTheaterIds,
  selectById: selectTheaterById,
} = theatersAdapter.getSelectors((state) => state.theaters);

export function selectTheatersLoading(state) {
  return state.theaters.loading;
}

export default theatersSlice.reducer;
