// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "../context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useNavbar();

  return (
    <nav className="bg-green-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold">RetailCB</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/wallet" className="hover:underline">Wallet</Link>
          <div className="relative group">
            <button className="hover:underline">More</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow p-2 space-y-2 z-10">
              <Link to="/about" className="block hover:bg-gray-200 px-2 py-1 rounded">About</Link>
              <Link to="/contact" className="block hover:bg-gray-200 px-2 py-1 rounded">Contact</Link>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-green-700 px-4 py-4 space-y-3 font-medium"
          >
            <Link to="/" className="block hover:underline">Home</Link>
            <Link to="/wallet" className="block hover:underline">Wallet</Link>

            <div className="space-y-1">
              <p className="font-semibold">More</p>
              <Link to="/about" className="block text-sm pl-4 hover:underline">About</Link>
              <Link to="/contact" className="block text-sm pl-4 hover:underline">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
