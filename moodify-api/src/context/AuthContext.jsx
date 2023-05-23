import { createContext } from "react";
import { useState } from "react";





export const AuthContext = createContext()


export const AuthContextProvider = (props) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}