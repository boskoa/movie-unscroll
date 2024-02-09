import axios from "axios";

import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const BASE_URL = "/api/bookmarks";

const bookmarksAdapter = createEntityAdapter({
  selectId: (bookmark) => bookmark.tmdbId,
});

const initialState = bookmarksAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getBookmarks = createAsyncThunk(
  "bookmarksSlice/getBookmarks",
  async (token) => {
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.get(BASE_URL, config);
    return response.data;
  },
);

export const addBookmark = createAsyncThunk(
  "bookmarksSlice/addBookmark",
  async (data) => {
    const { token, id, name } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.post(BASE_URL, { tmdbId: id, name }, config);
    return response.data;
  },
);

export const removeBookmark = createAsyncThunk(
  "bookmarksSlice/removeBookmark",
  async (data) => {
    const { token, id } = data;
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.delete(`${BASE_URL}/${id}`, config);
    return response.data;
  },
);

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmarks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookmarks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        bookmarksAdapter.upsertMany(state, action.payload);
      })
      .addCase(getBookmarks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBookmark.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBookmark.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        bookmarksAdapter.upsertOne(state, action.payload);
      })
      .addCase(addBookmark.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeBookmark.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeBookmark.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        bookmarksAdapter.removeOne(state, action.payload);
      })
      .addCase(removeBookmark.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllBookmarks,
  selectIds: selectBookmarkIds,
  selectById: selectBookmarkById,
} = bookmarksAdapter.getSelectors((state) => state.bookmarks);

export default bookmarksSlice.reducer;
