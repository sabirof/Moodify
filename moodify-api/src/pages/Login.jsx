import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isRegistering, setRegistering] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === 'admin@example.com' && password === 'admin') {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();

    // Add your registration logic here
    if (email && password) {
      // Perform the registration process (e.g., send data to server, update state)
      setLoggedIn(true);
    } else {
      alert('Please enter a valid email and password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {email}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (isRegistering) {
    return (
      <div>
        <h1>Registration Page</h1>
        <form onSubmit={handleRegister}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Register</button>
          <button onClick={() => setRegistering(false)}>Back to Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
        <button onClick={() => setRegistering(true)}>Register</button>
      </form>
    </div>
  );
}

export default Login;
