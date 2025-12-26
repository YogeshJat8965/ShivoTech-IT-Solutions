import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: "4px",
        background: "linear-gradient(90deg, #1E40AF 0%, #F59E0B 50%, #8B5CF6 100%)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
        boxShadow: "0 0 10px rgba(30, 64, 175, 0.5)"
      }}
    />
  );
};

export default ScrollProgressBar;
