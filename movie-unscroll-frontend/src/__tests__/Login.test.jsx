import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import TestProvider from "./TestProvider";
import Layout from "../components/Layout";

const mockStore = configureStore([]);

const defaultStore = {
  random: {
    loading: false,
    error: null,
    movie: {
      adult: false,
      backdrop_path: "/lEs8B5bmaTpC5zBgrMznoOVvweL.jpg",
      belongs_to_collection: null,
      budget: 20000000,
      genres: [
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
      homepage: "",
      id: 526,
      imdb_id: "tt0089457",
      original_language: "en",
      original_title: "Ladyhawke",
      overview:
        "Captain Etienne Navarre is a man on whose shoulders lies a cruel curse. Punished for loving each other, Navarre must become a wolf by night whilst his lover, Lady Isabeau, takes the form of a hawk by day. Together, with the thief Philippe Gaston, they must try to overthrow the corrupt Bishop and in doing so break the spell.",
      popularity: 21.32,
      poster_path: "/l3nRJ9Cs7C1AZ7das8S76QqwqjI.jpg",
      production_companies: [
        {
          id: 174,
          logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
          name: "Warner Bros. Pictures",
          origin_country: "US",
        },
        {
          id: 25,
          logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
          name: "20th Century Fox",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "1985-03-27",
      revenue: 18432000,
      runtime: 121,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline:
        "No force in Heaven will release them. No power on Earth can save them.",
      title: "Ladyhawke",
      video: false,
      vote_average: 7,
      vote_count: 1065,
    },
  },
  login: {
    loading: false,
    error: null,
    user: null,
  },
  users: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  suggestions: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  trending: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  theaters: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  popular: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  topRated: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
  discover: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
    filters: {
      language: "",
      releaseGte: "",
      releaseLte: "",
      sortBy: "vote_average.desc",
      voteAverageGte: "",
      voteAverageLte: "",
      voteCountGte: 50,
      voteCountLte: "",
      cast: [],
      crew: [],
      genres: [],
      noGenres: [],
    },
    savedPage: 1,
  },
  bookmarks: {
    ids: [],
    entities: {},
    loading: false,
    error: null,
  },
};

describe("Testing Login component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Shows login modal", async () => {
    const user = userEvent.setup();
    render(
      <TestProvider store={store}>
        <Layout />
      </TestProvider>,
    );

    const login = screen.getByTestId("login");
    await user.click(login);
    const modal = screen.getByText("Cancel");
    expect(modal).toBeInTheDocument();
    await user.click(modal);
    const modalAfter = screen.getByText("Cancel");
    await waitFor(() => expect(modalAfter).not.toBeInTheDocument());
  });
});
