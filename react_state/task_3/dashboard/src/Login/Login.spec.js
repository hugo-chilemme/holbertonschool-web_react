import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { beforeEach } from "@jest/globals";
import * as Aphrodite from "aphrodite";

describe("Login", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render 2 input elements", () => {
    render(<Login />);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
    const inputPassword = screen.getByLabelText(/password/i, {
      selector: "input",
    });

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("should render 2 label elements with the correct text", () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email:/i);
    const labelPassword = screen.getByText(/password:/i);

    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
  });

  it("should render a button with the correct text", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

  it("input element should focus when corresponding label is clicked", () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email:/i);
    const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });

    fireEvent.click(labelEmail);
    expect(inputEmail).toHaveFocus();
  });

  it("submit button should be disabled by default", () => {
    render(<Login />);
    const submitBtn = screen.getByRole("button", { name: /ok/i });
    expect(submitBtn).toBeDisabled();
  });

  it("submit button should be enabled only with valid email and strong password", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByRole("button", { name: /ok/i });

    // Email invalide + password trop court
    fireEvent.change(emailInput, { target: { value: "invalid" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(submitBtn).toBeDisabled();

    // Email valide + password trop court
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(submitBtn).toBeDisabled();

    // Email valide + password valide
    fireEvent.change(passwordInput, { target: { value: "12345678" } });
    expect(submitBtn).toBeEnabled();
  });
});