import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    console.log("email, password", email, password);
    registerUser(email, password);
  };

  const registerUser = (email, password) => {
    createUser(email, password);
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
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
