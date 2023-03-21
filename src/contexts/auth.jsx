import React, { createContext, useEffect, useState } from "react";

import { createSession } from "../services/api.js";
import { api } from "../services/api.js";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() =>{
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if(user && token){
            setUser(JSON.parse(user))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }
    }, [])

    const login = async (email, password) => {
        const response = await createSession(email, password)

        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        setUser(response.data.user)
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('userResult')

        api.defaults.headers.Authorization = null

        setUser(null)
    }

    return(
        <AuthContext.Provider value={
            {
                authenticated: !!user,
                user,
                loading,
                setLoading,
                login,
                logout
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}