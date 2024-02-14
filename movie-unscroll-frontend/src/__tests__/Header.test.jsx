import configureStore from "redux-mock-store";
import { beforeEach, describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TestProvider from "./TestProvider";
import NavBar from "../components/Layout/NavBar";
import { defaultStore } from "./stores";

const mockStore = configureStore([]);

describe("Testing Header component", () => {
  let store;
  beforeEach(() => {
    store = mockStore(defaultStore);
  });

  test("Renders component", () => {
    render(
      <TestProvider store={store}>
        <NavBar />
      </TestProvider>,
    );

    const title = screen.getByText(/movie/i);
    expect(title).toBeInTheDocument();
  });

  test("Renders login button", () => {
    render(
      <TestProvider store={store}>
        <NavBar />
      </TestProvider>,
    );

    const login = screen.getByTestId("login");
    expect(login).toBeInTheDocument();
  });

  test("Changes to text on hover", async () => {
    const user = userEvent.setup();
    render(
      <TestProvider store={store}>
        <NavBar />
      </TestProvider>,
    );

    const login = screen.getByTestId("login");
    await user.hover(login);
    const svg = login.querySelector("svg");
    expect(svg).toHaveStyle("opacity: 0");
  });

  test("Renders register button", () => {
    render(
      <TestProvider store={store}>
        <NavBar />
      </TestProvider>,
    );

    const register = screen.getByTestId("register");
    expect(register).toBeInTheDocument();
  });
});
