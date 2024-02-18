import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import TestProvider from "./TestProvider";
import Layout from "../components/Layout";
import { defaultStore } from "./stores";

const mockStore = configureStore([]);

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
    const modal = screen.getByText("Close");
    expect(modal).toBeInTheDocument();
    await user.click(modal);
    const modalAfter = screen.getByText("Close");
    await waitFor(() => expect(modalAfter).not.toBeInTheDocument());
  });
});
