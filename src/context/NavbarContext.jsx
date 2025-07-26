// src/context/NavbarContext.jsx
import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
