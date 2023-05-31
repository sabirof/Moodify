import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/genres" className="nav-link">Genres</Link>
        </li>
        <li className="nav-item">
          <Link to="/moodify" className="nav-link">Moodify</Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link">Chat</Link>
        </li>
      </ul>
      
      <ul className="navbar-nav ml-auto"> 
        {user ? (
          <>
            <li className="nav-item">
              <span className="nav-link" style={{ color: 'green' }}>Logged in as: {user.email}</span>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout} style={{ color: 'red' }}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
