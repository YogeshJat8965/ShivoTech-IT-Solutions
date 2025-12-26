import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import AOSInitializer from "./components/AOSInitializer";
import FloatingActions from "./components/CTAButton";
import ScrollProgressBar from "./components/ScrollProgressBar";
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Articitamol from "./pages/Articitamol";

function App() {
  return (
    <Box sx={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <Router>
        <CustomCursor />
        <ScrollProgressBar />
        <AOSInitializer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articitamol" element={<Articitamol />} />
        </Routes>
        <FloatingActions />
      </Router>
    </Box>
  );
}

export default App;
