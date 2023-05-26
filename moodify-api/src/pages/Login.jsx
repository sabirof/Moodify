import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(AuthContext)
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    console.log("password", email, password);
    login(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="password">Password</label>
        <button onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
}

export default Login;
