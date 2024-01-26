import { createContext, useState } from "react";

//1.create a context
export const AuthContext = createContext()

//2.shared the created context with other components
export default function AuthProvider({ children }) {

    //put some state in the context
    const[number, setNumber] = useState(10)

    return(
        <AuthContext.Provider value={{ number }}>
            {children}
        </AuthContext.Provider>
    )
}