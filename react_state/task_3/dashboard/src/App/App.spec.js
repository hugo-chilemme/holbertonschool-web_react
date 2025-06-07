import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as Aphrodite from "aphrodite";

describe("App", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render the Notifications component", () => {
    render(<App />);
    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  it("should render the Header component", () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it("should render the Login component initially", () => {
    render(<App />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it("should render the Footer component", () => {
    render(<App />);
    expect(
      screen.getByText(/Holberton School main dashboard/i)
    ).toBeInTheDocument();
  });

  it("should show CourseList after user logs in", () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    // Simule un login valide
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(screen.getByRole("table")).toBeInTheDocument(); // Le tableau est affiché
  });

  it("should show Course list title when user logs in", () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByRole("heading", { level: 2, name: /Course list/i })
    ).toBeInTheDocument();
  });

  it("should show Login title initially before login", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Log in to continue/i })
    ).toBeInTheDocument();
  });

  it("should show the News section", () => {
    render(<App />);
    const newsTitle = screen.getByRole("heading", {
      level: 2,
      name: /News from the School/i,
    });
    const paragraph = screen.getByText(/Holberton School News goes here/i);

    expect(newsTitle).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should call logOut and alert when ctrl+h is pressed", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);

    // simulate login first
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /ok/i });

    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // then simulate ctrl+h
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    alertMock.mockRestore();
  });
});