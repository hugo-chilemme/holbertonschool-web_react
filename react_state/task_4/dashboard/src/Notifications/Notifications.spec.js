import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";
import { beforeEach } from "@jest/globals";
import * as Aphrodite from "aphrodite";

describe("Notifications", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  it("should not display close button and paragraph when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);

    expect(screen.queryByAltText("Close icon")).not.toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.getByText("Your notifications")).toBeInTheDocument();
  });

  it("should display notifications and close button when displayDrawer is true", () => {
    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "Server is down" },
    ];

    render(
      <Notifications
        displayDrawer={true}
        notificationsList={notificationsList}
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText("Your notifications")).toBeInTheDocument();
  });

  it("should display 'No new notification' when list is empty", () => {
    render(<Notifications displayDrawer={true} notificationsList={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });

  it("should call markNotificationAsRead when clicking a notification", () => {
    const notificationsList = [
      { id: 1, type: "default", value: "Click me" },
    ];
    const markSpy = jest.fn();

    render(
      <Notifications
        notificationsList={notificationsList}
        displayDrawer={true}
        markNotificationAsRead={markSpy}
      />
    );

    const item = screen.getByText("Click me");
    fireEvent.click(item);

    expect(markSpy).toHaveBeenCalledWith(1);
  });

  it("should call handleDisplayDrawer when 'Your notifications' is clicked", () => {
    const mock = jest.fn();
    render(<Notifications handleDisplayDrawer={mock} />);
    fireEvent.click(screen.getByText("Your notifications"));
    expect(mock).toHaveBeenCalled();
  });

  it("should call handleHideDrawer when close button is clicked", () => {
    const mock = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={mock} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mock).toHaveBeenCalled();
  });
});