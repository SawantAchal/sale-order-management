import React, { createContext, useContext, useState } from 'react';

// Create a new context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap the application and provide authentication state
export const AuthProvider = ({ children }) => {
  // State to keep track of authentication status, initialized from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  // Function to handle login
  const login = () => {
    setIsAuthenticated(true); // Update state to authenticated
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication status in localStorage
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false); // Update state to not authenticated
    localStorage.setItem('isAuthenticated', 'false'); // Store authentication status in localStorage
  };

  // Provide the authentication state and functions to the rest of the application
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in other components
export const useAuth = () => useContext(AuthContext);