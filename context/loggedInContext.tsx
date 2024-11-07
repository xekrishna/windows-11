"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for context
interface LoggedInContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

// Create context with default values
const LoggedInContext = createContext<LoggedInContextType | undefined>(
  undefined
);

interface LoggedInProviderProps {
  children: ReactNode;
}

// Provider component
export const LoggedInProvider = ({ children }: LoggedInProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoggedInContext.Provider>
  );
};

// Custom hook to use the LoggedIn context
export const useLoggedIn = (): LoggedInContextType => {
  const context = useContext(LoggedInContext);
  if (!context) {
    throw new Error("useLoggedIn must be used within a LoggedInProvider");
  }
  return context;
};
