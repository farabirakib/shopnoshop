import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/page/Home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
