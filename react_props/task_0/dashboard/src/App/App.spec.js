import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders all components correctly", () => {
  render(<App />);
  
  // Check if Header is rendered
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("School Dashboard");

  // Check if Login message is present
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();

  // Check if Footer is rendered
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
