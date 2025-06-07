import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders Header component correctly", () => {
  render(<Header />);

  // Check if logo is present
  const logo = screen.getByAltText("Holberton Logo");
  expect(logo).toBeInTheDocument();

  // Check if title is present
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("School Dashboard");
});