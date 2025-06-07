import React from "react";
import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { newContext } from "../Context/context";

class Header extends React.Component {
  static contextType = newContext; // 👈 accès au contexte

  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <div className={css(styles.header)}>
          <img
            src={holbertonLogo}
            alt="holberton logo"
            className={css(styles.img)}
          />
          <h1>School dashboard</h1>
        </div>

        {/* 👇 Section de logout visible seulement si connecté */}
        {user.isLoggedIn && (
          <section id="logoutSection" className={css(styles.logout)}>
            Welcome <strong>{user.email}</strong>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                logOut();
              }}
            >
              (logout)
            </a>
          </section>
        )}
      </>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e1003c",
    borderBottom: "2px solid #e1003c",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  img: {
    height: "200px",
  },
  logout: {
    marginLeft: "20px",
    fontStyle: "italic",
  },
});