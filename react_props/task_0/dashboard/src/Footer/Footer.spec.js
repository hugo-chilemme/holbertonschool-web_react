import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders Footer component correctly", () => {
  render(<Footer />);
  
  // Check if footer contains the copyright text
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
