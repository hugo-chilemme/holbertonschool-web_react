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
    const imgElement = screen.getByRole("img", { name: /Holberton Logo/i });
    expect(imgElement).toBeInTheDocument();
  });

  test("renders 2 input elements", () => {
    render(<App />);
    
    // Checking if the email and password input fields exist
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("renders 2 label elements with the text 'Email' and 'Password'", () => {
    render(<App />);
    
    // Checking labels
    const emailLabel = screen.getByText(/email/i);
    expect(emailLabel).toBeInTheDocument();

    const passwordLabel = screen.getByText(/password/i);
    expect(passwordLabel).toBeInTheDocument();
  });

  test("renders a button with the text 'OK'", () => {
    render(<App />);
    
    // Checking the button with text "OK"
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});