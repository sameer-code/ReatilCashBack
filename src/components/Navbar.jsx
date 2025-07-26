// src/context/NavbarContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create context
const NavbarContext = createContext();

// 2. Create provider
export const NavbarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

// 3. Create hook for usage
export const useNavbar = () => useContext(NavbarContext);
