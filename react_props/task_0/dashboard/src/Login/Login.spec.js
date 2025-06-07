import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders Login component correctly", () => {
  render(<Login />);
  
  // Check if login message is present
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});
