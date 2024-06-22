// ContextAPI to get data from local storage then use it in multiple places like login, logut button

import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
export default function authProvider({ children }) {

    const initialAuthUser = localStorage.getItem("users"); // users get data from local storage
    const [authUser, setAuthUser]=useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined,

    )
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
            </AuthContext.Provider>
    )

}
export const useAuth = ()=>useContext(AuthContext);
