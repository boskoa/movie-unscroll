import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import TestProvider from "./TestProvider";
import Layout from "../components/Layout";
import { defaultStore } from "./stores";

const mockStore = configureStore([]);

describe("Testing Register component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Shows register modal", async () => {
    const user = userEvent.setup();
    render(
      <TestProvider store={store}>
        <Layout />
      </TestProvider>,
    );

    const register = screen.getByTestId("register");
    await user.click(register);
    const modal = screen.getByText("Close");
    expect(modal).toBeInTheDocument();
    await user.click(modal);
    const modalAfter = screen.getByText("Close");
    await waitFor(() => expect(modalAfter).not.toBeInTheDocument());
  });
});
