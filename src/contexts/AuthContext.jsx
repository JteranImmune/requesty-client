import React, { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const login = () => {}
    const logout = () => {}
    
    return (
        <AuthContext.Provider value={{ user, logout, login, isLoading }}>
          {children}
        </AuthContext.Provider>
      )
}