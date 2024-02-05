import { createContext, useContext, useState } from "react";

//1.create a context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//2.shared the created context with other components
export default function AuthProvider({ children }) {

    //3.put some state in the context

    const[isAuthenticated, setAuthenticated] = useState(false)

    const[username, setUsername] = useState(null)

    function login(username, password) {
        if(username === 'milan' && password === 'dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={ { isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}