import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import IconSector from "./Components/IconSector/IconSector"
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IconSector/>
      <Products/>
      <About/>
      <Explore/>
      <Footer/>
    </>
  );
};

export default App;
