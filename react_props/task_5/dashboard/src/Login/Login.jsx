import "./Login.css";

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="mail" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="button">OK</button>
      </div>
    </>
  );
}

export default Login;
