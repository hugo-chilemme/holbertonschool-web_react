import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import * as Aphrodite from "aphrodite";
import { beforeEach } from "@jest/globals";
import { newContext } from "../Context/context"; // 👈 import du context
import React from "react";

describe("Header", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("Should render the logo image", () => {
    render(<Header />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });

  it("Render h1 with good text", () => {
    render(<Header />);
    const titleH1 = screen.getByRole("heading", {
      level: 1,
      name: /School Dashboard/i,
    });
    expect(titleH1).toBeInTheDocument();
  });

  it("Should not render logoutSection with default context", () => {
    render(<Header />);
    const logoutSection = screen.queryByTestId("logoutSection");
    expect(logoutSection).not.toBeInTheDocument();
  });

  it("Should render logoutSection when user is logged in", () => {
    const contextValue = {
      user: {
        email: "test@example.com",
        password: "12345678",
        isLoggedIn: true,
      },
      logOut: () => {},
    };

    render(
      <newContext.Provider value={contextValue}>
        <Header />
      </newContext.Provider>
    );

    const logoutSection = screen.getByText(/Welcome test@example.com/i);
    expect(logoutSection).toBeInTheDocument();
  });

  it("Should call logOut when clicking logout", () => {
    const mockLogOut = jest.fn();
    const contextValue = {
      user: {
        email: "user@test.com",
        password: "pass1234",
        isLoggedIn: true,
      },
      logOut: mockLogOut,
    };

    render(
      <newContext.Provider value={contextValue}>
        <Header />
      </newContext.Provider>
    );

    const logoutLink = screen.getByText(/\(logout\)/i);
    fireEvent.click(logoutLink);
    expect(mockLogOut).toHaveBeenCalled();
  });
});