import { render, screen } from "@testing-library/react";
import { getCurrentYear } from "../utils/utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("paragraphs should have the correct text", async () => {
    render(<Footer isIndex="true" />);
    const p = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright ${getCurrentYear()} - Holberton School`)
      );
    });

    expect(p).toBeInTheDocument();
  });
});
