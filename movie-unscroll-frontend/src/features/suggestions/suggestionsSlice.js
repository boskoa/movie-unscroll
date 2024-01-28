import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "/api/random/personalized";

const suggestionsAdapter = createEntityAdapter();

const initialState = suggestionsAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getSuggestions = createAsyncThunk(
  "suggestions/getSuggestions",
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

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    clearSuggestions: (state) => {
      state.ids = [];
      state.entities = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSuggestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        suggestionsAdapter.upsertMany(state, action.payload);
      })
      .addCase(getSuggestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllSuggestions,
  selectIds: selectSuggestionIds,
  selectById: selectSuggestionById,
} = suggestionsAdapter.getSelectors((state) => state.suggestions);

export function selectSuggestionsLoading(state) {
  return state.suggestions.loading;
}

export const { clearSuggestions } = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
