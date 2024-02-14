import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import TestProvider from "./TestProvider";
import { defaultStore, detailedMovie } from "./stores";
import DetailedMovie from "../components/DetailedMovie";
import axios from "axios";

const mockStore = configureStore([]);

describe("Testing RandomPage component", () => {
  let store;
  beforeEach(() => {
    vi.mock("react-router-dom", async (importOriginal) => {
      const actual = await importOriginal();
      return {
        ...actual,
        useParams: () => ({ id: 526 }),
      };
    });
    vi.mock("axios");
    store = mockStore(defaultStore);
  });

  test("Renders component", async () => {
    await axios.get.mockResolvedValue({
      data: detailedMovie,
    });
    render(
      <TestProvider store={store}>
        <DetailedMovie />
      </TestProvider>,
    );

    await waitFor(() =>
      expect(screen.getByTestId("detailed")).toBeInTheDocument(),
    );
  });

  test("Renders description", async () => {
    await axios.get.mockResolvedValue({
      data: detailedMovie,
    });
    render(
      <TestProvider store={store}>
        <DetailedMovie />
      </TestProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/An independent, single/i)).toBeInTheDocument(),
    );
  });

  test("Renders actors", async () => {
    await axios.get.mockResolvedValue({
      data: detailedMovie,
    });
    render(
      <TestProvider store={store}>
        <DetailedMovie />
      </TestProvider>,
    );

    await waitFor(() =>
      expect(screen.getByText(/stellan/i)).toBeInTheDocument(),
    );
  });

  test("Renders revenue", async () => {
    await axios.get.mockResolvedValue({
      data: detailedMovie,
    });
    render(
      <TestProvider store={store}>
        <DetailedMovie />
      </TestProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/revenue/i)).toBeInTheDocument();
      expect(screen.getByText(/revenue/i).style.color).toBe("lime");
    });
  });
});
