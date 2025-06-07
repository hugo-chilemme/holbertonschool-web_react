import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications"; // ✅ Path updated

describe("Notifications Component", () => {
  test("renders notifications title", () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  test("renders exactly 3 list items", () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  test("clicking the close button logs 'Close button has been clicked' to the console", () => {
    console.log = jest.fn(); // Mock console.log

    render(<Notifications />);
    
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(console.log).toHaveBeenCalledWith("Close button has been clicked");
  });
});