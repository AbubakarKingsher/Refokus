import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Strips from "./components/Strips";
import Products from "./components/Products";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {

  const locomotiveScroll = new LocomotiveScroll()

  return (
    <div className="min-h-screen w-full bg-[#101010] text-white text-5xl">
      <Navbar />
      <Work />
      <Strips />
      <Products />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
