import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import AOSInitializer from "./components/AOSInitializer";
import FloatingActions from "./components/CTAButton";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Articitamol from "./pages/Articitamol";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Box sx={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <ScrollProgressBar />
        <AOSInitializer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/articitamol" element={<Articitamol />} />
        </Routes>
        <FloatingActions />
      </Router>
    </Box>
  );
}

export default App;
