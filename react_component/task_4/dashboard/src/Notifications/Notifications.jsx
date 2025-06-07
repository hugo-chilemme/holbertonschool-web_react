import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeImage from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notificationsList, displayDrawer } = this.props;
    return (
      <>
        <div>Your notifications</div>
        {displayDrawer ? (
          <div className="notifications">
            {notificationsList.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <button
                  aria-label="Close"
                  onClick={() => console.log("Close button has been clicked")}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={closeImage}
                    alt="Close icon"
                    style={{ width: "10px", height: "10px" }}
                  />
                </button>
                <ul>
                  {notificationsList.map((notif) => (
                    <NotificationItem
                      key={notif.id}
                      type={notif.type}
                      value={notif.value}
                      html={notif.html}
                      markAsRead={this.markAsRead.bind(this, notif.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  notificationsList: PropTypes.arrayOf(PropTypes.object),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notificationsList: [],
  displayDrawer: true,
};

export default Notifications;
