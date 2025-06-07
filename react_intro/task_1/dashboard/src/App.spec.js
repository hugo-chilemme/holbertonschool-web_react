import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders h1 element with text 'School Dashboard'", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1, name: /School Dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders correct text in app-body and app-footer", () => {
    render(<App />);

    // Checking text inside App-body
    const bodyText = screen.getByText(/Login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();

    // Checking text inside App-footer
    const footerText = screen.getByText(/Copyright \d{4} - Holberton School/i);
    expect(footerText).toBeInTheDocument();
  });

  test("renders an img element", () => {
    render(<App />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
});