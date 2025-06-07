import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as Aphrodite from "aphrodite";

describe("App", () => {
  beforeEach(() => {
    Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
  });

  // 🔽 AJOUT ICI :
  it("should remove notification from state and log when clicked", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<App />);

    // afficher le drawer
    const notifTitle = screen.getByText("Your notifications");
    fireEvent.click(notifTitle);

    // vérifier que la notif existe
    const firstNotification = screen.getByText("New course available");
    expect(firstNotification).toBeInTheDocument();

    // cliquer dessus
    fireEvent.click(firstNotification);

    // attendu : log
    expect(logSpy).toHaveBeenCalledWith("Notification 1 has been marked as read");

    // attendu : la notif est supprimée
    expect(screen.queryByText("New course available")).not.toBeInTheDocument();

    logSpy.mockRestore();
  });
});