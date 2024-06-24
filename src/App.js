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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
