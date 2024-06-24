import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./app/page/Shop/shop";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./app/Navbar/navbar";
import Men from "./app/page/Men/men";
import Women from "./app/page/Women/women";
import Kids from "./app/page/Kids/kids";
import About from "./app/page/AboutUs/about";
import Footer from "./app/Footer/footer";
import ShopCategory from "./app/page/Shop/ShopCategory";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
