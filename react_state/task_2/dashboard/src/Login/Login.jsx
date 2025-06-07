import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email || "",
      password: props.password || "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password); // ✅ appel du logIn passé par App
    console.log("Login submitted with", email, password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const enableSubmit =
      email !== "" && password !== "" && isEmailValid && isPasswordValid;

    this.setState({ enableSubmit });
  }

  render() {
    return (
      <div className={css(styles.loginBody, styles.small)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  logIn: PropTypes.func,
};

Login.defaultProps = {
  email: "",
  password: "",
  logIn: () => {},
};

export default Login;

const styles = StyleSheet.create({
  loginBody: {
    marginTop: "30px",
    marginLeft: "20px",
  },

  button: {
    width: "fit-content",
  },

  small: {
    "@media (max-width: 900px)": {
      marginLeft: "0px",
      display: "flex",
      flexDirection: "column",
    },
  },
});