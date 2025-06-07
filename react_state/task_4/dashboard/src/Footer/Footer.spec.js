import { render, screen } from "@testing-library/react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import Footer from "./Footer";
import * as Aphrodite from "aphrodite";
import { newContext } from "../Context/context";
import React from "react";

describe("Footer", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should render the correct static text", () => {
    render(<Footer />);
    const p = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright ${getCurrentYear()} - ${getFooterCopy()}`)
      );
    });

    expect(p).toBeInTheDocument();
  });

  it("should not display 'Contact us' link when user is logged out", () => {
    const contextValue = {
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    render(
      <newContext.Provider value={contextValue}>
        <Footer />
      </newContext.Provider>
    );

    const contactLink = screen.queryByText(/Contact us/i);
    expect(contactLink).not.toBeInTheDocument();
  });

  it("should display 'Contact us' link when user is logged in", () => {
    const contextValue = {
      user: {
        email: "user@test.com",
        password: "password123",
        isLoggedIn: true,
      },
    };

    render(
      <newContext.Provider value={contextValue}>
        <Footer />
      </newContext.Provider>
    );

    const contactLink = screen.getByText(/Contact us/i);
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.tagName.toLowerCase()).toBe("a");
  });
});