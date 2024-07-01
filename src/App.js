import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./app/page/Shop/shop";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./app/Navbar/navbar";
import About from "./app/page/AboutUs/about";
import Footer from "./app/Footer/footer";
import ShopCategory from "./app/page/Shop/ShopCategory";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";
import LoginSignup from "./app/LoginSignup/LoginSignup";
import Product from "./app/page/Products/Product/Product";
import Login from "./app/LoginSignup/Login";
import "./index.css";

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
          <Route path="/LoginSignup" element={<LoginSignup />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
