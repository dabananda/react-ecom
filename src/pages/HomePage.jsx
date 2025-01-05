import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BestSelling from "../components/BestSelling";
import OurProducts from "../components/OurProducts";
import Exclusive from "../components/Exclusive";
import DesignerCloths from "../components/DesignerCloths";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BestSelling />
      <OurProducts />
      <Exclusive />
      <DesignerCloths />
      <Footer />
    </>
  );
};

export default HomePage;
