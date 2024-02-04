import axios from "axios";
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/movies/discover";

const discoverAdapter = createEntityAdapter();

const initialState = discoverAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getDiscover = createAsyncThunk(
  "discover/getDiscover",
  async (data) => {
    const { token, searchData, page } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${BASE_URL}?page=${page}`,
      searchData,
      config,
    );
    return response.data;
  },
);

const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    clearDiscover: (state) => {
      state.ids = [];
      state.entities = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDiscover.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDiscover.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        discoverAdapter.upsertMany(state, action.payload);
      })
      .addCase(getDiscover.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllDiscover,
  selectIds: selectDiscoverIds,
  selectById: selectDiscoverById,
} = discoverAdapter.getSelectors((state) => state.discover);

export function selectDiscoverLoading(state) {
  return state.popular.discover;
}

export default discoverSlice.reducer;
