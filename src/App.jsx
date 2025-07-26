import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StoreList from "./components/StoreList";
import DealsGrid from "./components/DealsGrid";
import Footer from "./components/Footer";

// Pages
import Wallet from "./pages/Wallet";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-xl font-semibold my-4">🔥 Popular Stores</h2>
                  <StoreList />

                  <h2 className="text-xl font-semibold mt-8 mb-4">🎯 Top Deals</h2>
                  <DealsGrid />
                </div>
              </>
            }
          />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
