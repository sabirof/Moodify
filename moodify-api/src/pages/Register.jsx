import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRegister = () => {
    registerUser(email, password, username);
  };

  const registerUser = (email, password, username) => {
    createUser(email, password, username);
  };

  return (
    <div>
      <h1>Register</h1>
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
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="username">Username</label>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
