import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../FireConfig/FireConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Checking if a user is logged in from localStorage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const createUser = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      user.displayName = username; // Set the display name (username) of the user
      
      setUser(user);

      // Store the logged in user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
      setUser(null);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);

      // Store the logged in user in localStorage
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);

      // Remove the user from localStorage on logout
      localStorage.removeItem("user");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage", errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, createUser, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
