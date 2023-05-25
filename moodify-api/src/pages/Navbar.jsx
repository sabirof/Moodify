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
          {user ? (
            <>
              <span className="nav-link" style={{ color: 'green' }}>Logged in as: {user.email}</span>
              <button className="nav-link" onClick={handleLogout} style={{ color: 'red' }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="nav-link">Register</Link> | 
              <Link to="/login" className="nav-link">Login</Link>
            </>
          )}
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
