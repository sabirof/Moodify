import { createContext } from "react";
import { useState } from "react";
import { auth } from "../FireConfig/FireConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





export const AuthContext = createContext()


export const AuthContextProvider = (props) => {
    


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}