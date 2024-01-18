import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Register.css"; 

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
    <div className="register-container">
      <h1>Register</h1>
      <div className="form-container">
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        {/* <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="username">Username</label>
        </div> */}
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
