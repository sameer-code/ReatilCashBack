import React, { createContext, useContext, useState } from "react";

// Create the context
const NavbarContext = createContext();

// Provider component
export const NavbarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook for easy access
export const useNavbar = () => useContext(NavbarContext);
