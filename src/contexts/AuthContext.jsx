import React, { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const setToken = (token) =>{
      localStorage.setItem("token", token)
    }

    const login = async (userData) => {

      try {
        const {token} = await authService.login(userData);
        setToken(token)
        const userLogged = await authService.getUser(token);
        setUser(userLogged)
        navigate("/");
      } catch (error) {

      <Alert status='error'>
          <AlertIcon />
          <AlertTitle>error</AlertTitle>
          <AlertDescription>email or password invalid.</AlertDescription>
        </Alert>
      }

    }
    const logout = () => {}
    
    return (
        <AuthContext.Provider value={{ user, logout, login, isLoading }}>
          {children}
        </AuthContext.Provider>
      )
}