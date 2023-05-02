import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [userId, setUserId] = useState();
    const [token, setToken] = useState();

    const setLogin = (user_id, user_token) => {
        setUserId(user_id);
        setToken(user_token);
    }

    const setLogout = () => {
        setUserId(null);
        setToken(null);
    }



    return (
        <AuthContext.Provider value={{ userId, token, setLogin, setLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return auth;
}

export { AuthProvider, useAuth }