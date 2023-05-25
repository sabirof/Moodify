import { createContext } from "react";
import { useState } from "react";
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

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
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
