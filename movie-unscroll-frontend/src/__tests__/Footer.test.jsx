import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Layout/Footer";
import { MemoryRouter } from "react-router-dom";

describe("Testing Footer component", () => {
  test("Renders Footer", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>,
    );
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  test("Renders About", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>,
    );
    const about = screen.getByText("About");
    expect(about).toBeInTheDocument();
  });

  test("Renders TMDB", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>,
    );
    const powered = screen.getByText(/powered/i);
    expect(powered).toBeInTheDocument();
    const tmdb = screen.getByRole("img");
    expect(tmdb).toHaveAttribute("alt", "tmdb logo");
  });
});
