import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StoreList from "./components/StoreList";
import DealsGrid from "./components/DealsGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StoreList />
      <DealsGrid />
      <Footer />
    </>
  );
}
