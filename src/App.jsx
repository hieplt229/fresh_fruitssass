import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
// import Footer from "./components/Footer/Footer";
import { ConstScroll } from "./constant";

const App = () => {
  return (
    <>
      <main id={ConstScroll.home}>
        <Navbar />
        <div className="overflow-hidden">
          <Hero />
          <Menus />
          <Banner />
          <Banner2 />
          <Banner3 />
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;
