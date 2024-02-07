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
  filters: {
    language: "",
    releaseGte: "",
    releaseLte: "",
    sortBy: "vote_average.desc",
    voteAverageGte: "",
    voteAverageLte: "",
    voteCountGte: "",
    voteCountLte: "",
    cast: [],
    crew: [],
    genres: [],
    noGenres: [],
    pages: 1,
  },
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
    setLanguage: (state, action) => {
      state.filters.language = action.payload;
    },
    setReleaseGte: (state, action) => {
      state.filters.releaseGte = action.payload;
    },
    setReleaseLte: (state, action) => {
      state.filters.releaseLte = action.payload;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
    },
    setVoteAverageGte: (state, action) => {
      state.filters.voteAverageGte = action.payload;
    },
    setVoteAverageLte: (state, action) => {
      state.filters.voteAverageLte = action.payload;
    },
    setVoteCountGte: (state, action) => {
      state.filters.voteCountGte = action.payload;
    },
    setVoteCountLte: (state, action) => {
      state.filters.voteCountLte = action.payload;
    },
    setCast: (state, action) => {
      state.filters.cast = action.payload;
    },
    setCrew: (state, action) => {
      state.filters.crew = action.payload;
    },
    setGenres: (state, action) => {
      state.filters.genres = action.payload;
    },
    setNoGenres: (state, action) => {
      state.filters.noGenres = action.payload;
    },
    setPages: (state, action) => {
      state.filters.pages = action.payload;
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
  return state.discover.loading;
}

export function selectLanguage(state) {
  return state.discover.filters.language;
}

export function selectSortBy(state) {
  return state.discover.filters.sortBy;
}

export function selectReleaseGte(state) {
  return state.discover.filters.releaseGte;
}

export function selectReleaseLte(state) {
  return state.discover.filters.releaseLte;
}

export function selectVoteAverageGte(state) {
  return state.discover.filters.voteAverageGte;
}

export function selectVoteAverageLte(state) {
  return state.discover.filters.voteAverageLte;
}

export function selectVoteCountGte(state) {
  return state.discover.filters.voteCountGte;
}

export function selectVoteCountLte(state) {
  return state.discover.filters.voteCountLte;
}

export function selectCast(state) {
  return state.discover.filters.cast;
}

export function selectCrew(state) {
  return state.discover.filters.crew;
}

export function selectGenres(state) {
  return state.discover.filters.genres;
}

export function selectNoGenres(state) {
  return state.discover.filters.noGenres;
}

export function selectPages(state) {
  return state.discover.filters.pages;
}

export const {
  clearDiscover,
  setLanguage,
  setReleaseGte,
  setReleaseLte,
  setSortBy,
  setVoteAverageGte,
  setVoteAverageLte,
  setVoteCountGte,
  setVoteCountLte,
  setCast,
  setCrew,
  setGenres,
  setNoGenres,
  setPages,
} = discoverSlice.actions;

export default discoverSlice.reducer;
