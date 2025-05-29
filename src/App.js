// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*
          추가 페이지를 만들면
          <Route path="/about/intro" element={<AboutIntro />} />
          같이 등록해 주세요.
        */}
      </Routes>
    </Router>
  );
}

export default App;
