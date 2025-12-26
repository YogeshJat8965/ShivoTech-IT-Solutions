import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery, Paper, Chip } from "@mui/material";
import AppButton from "./reusable/AppButton";
import { TypeAnimation } from "react-type-animation";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";

const HeroSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [codeIndex, setCodeIndex] = useState(0);

  const codeSnippets = [
    "const success = buildAmazingWebsite();",
    "function optimizeSEO() { return ranking++; }",
    "const growth = digitalMarketing.boost();",
    "while(true) { innovate(); deliver(); }",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scoped animations
  const animations = {
    "@keyframes gradientShift": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" }
    },
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
      "50%": { transform: "translateY(-20px) rotate(2deg)" }
    },
    "@keyframes pulse": {
      "0%, 100%": { opacity: 0.6 },
      "50%": { opacity: 1 }
    },
    "@keyframes slideUp": {
      "0%": { transform: "translateY(20px)", opacity: 0 },
      "100%": { transform: "translateY(0)", opacity: 1 }
    },
    "@keyframes glow": {
      "0%, 100%": { boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" },
      "50%": { boxShadow: "0 0 40px rgba(245, 158, 11, 0.6)" }
    }
  };

  const metricCards = [
    { icon: <RocketLaunchIcon />, value: "250+", label: "Projects", color: "#F59E0B", delay: 0 },
    { icon: <PeopleIcon />, value: "180+", label: "Happy Clients", color: "#3B82F6", delay: 0.1 },
    { icon: <TrendingUpIcon />, value: "85%", label: "Growth Rate", color: "#10B981", delay: 0.2 },
    { icon: <EmojiEventsIcon />, value: "95%", label: "Satisfaction", color: "#8B5CF6", delay: 0.3 },
  ];

  return (
    <Box
      sx={{
        ...animations,
        position: "relative",
        px: { xs: 2, md: 6 },
        py: { xs: 10, md: 16 },
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.dark} 0%, 
          #0F172A 25%,
          ${theme.palette.primary.main} 50%, 
          #1E293B 75%,
          ${theme.palette.secondary.dark} 100%)`,
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100vw",
        minHeight: { xs: "100vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
      }}
      id="home"
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
          filter: "blur(40px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 10 },
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          zIndex: 2,
          minHeight: { xs: "auto", md: "70vh" }
        }}
      >
        {/* Left Side Content */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, color: "#fff", width: "100%", overflow: "hidden" }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.secondary.light,
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: { xs: "0.7rem", md: "0.875rem" },
              wordWrap: "break-word",
            }}
          >
            WELCOME TO SHIVOTECH IT SOLUTIONS
          </Typography>

          <SectionHeading sx={{ 
            color: "#fff", 
            fontSize: { xs: "1.75rem", md: "3.5rem" },
            fontWeight: 800,
            mb: 2,
            textShadow: "0px 2px 20px rgba(0,0,0,0.3)",
            minHeight: { xs: "200px", md: "140px" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            lineHeight: { xs: 1.3, md: 1.2 },
          }}>
            <TypeAnimation
              sequence={[
                'Empowering Your Digital Growth',
                2000,
                'Building Modern Websites',
                2000,
                'Boosting Your Online Presence',
                2000,
                'Creating Stunning Experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </SectionHeading>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#f1f5f9",
              maxWidth: 600,
              mt: 2,
              mx: { xs: "auto", md: 0 },
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.8
            }}
          >
            At ShivoTech IT Solutions, we build modern websites, boost visibility
            through SEO, and create stunning brand experiences.
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={4}
          >
            <AppButton variant="contained" color="secondary" href="#contact">
              Get Started
            </AppButton>
            <AppButton variant="outlined" color="inherit" href="#services">
              Learn More
            </AppButton>
          </Stack>
        </Box>

        {/* Right Side Illustration */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 520 520"
            sx={{
              width: { md: 520, lg: 580 },
              height: "auto",
              maxWidth: "100%",
              ...animations,
            }}
          >
            {/* Outer Gradient Halo */}
            <defs>
              <radialGradient id="outerHalo" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            <circle cx="260" cy="260" r="240" fill="url(#outerHalo)" />

            {/* Floating Glass Cards */}
            <g style={{ animation: "svgFloatY 5s ease-in-out infinite" }}>
              <rect x="120" y="150" rx="14" width="280" height="200" fill="#fff" opacity="0.95" />
              <text
                x="160"
                y="200"
                fontSize="16"
                fontWeight="600"
                fill="#1e293b"
              >
                🚀 Digital Solutions
              </text>
              <text
                x="160"
                y="230"
                fontSize="14"
                fill="#64748b"
              >
                Websites | Marketing | SEO
              </text>
            </g>

            {/* Line Chart */}
            <polyline
              points="140,300 180,260 220,280 260,230 300,250 340,210 380,220"
              fill="none"
              stroke="url(#chipGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ animation: "svgFloatX 6s ease-in-out infinite" }}
            />

            {/* Floating Stat Badges */}
            <g style={{ animation: "svgPulse 3s ease-in-out infinite" }}>
              <rect x="60" y="240" rx="12" width="110" height="38" fill="#fff" opacity="0.95" />
              <text x="75" y="265" fontSize="12" fontWeight="600" fill="#1e293b">
                250+ Projects
              </text>
            </g>

            <g style={{ animation: "svgPulse 3.5s ease-in-out infinite" }}>
              <rect x="360" y="160" rx="12" width="120" height="38" fill="#fff" opacity="0.95" />
              <text x="375" y="185" fontSize="12" fontWeight="600" fill="#1e293b">
                85% Growth 📈
              </text>
            </g>

            {/* Decorative Nodes */}
            <circle cx="120" cy="140" r="7" fill="#F59E0B" style={{ animation: "svgPulse 2s infinite" }} />
            <circle cx="420" cy="340" r="7" fill="#3B82F6" style={{ animation: "svgPulse 2.5s infinite" }} />
          </Box>
        </Box>
      </Box>

      {/* Subtle Gradient Blobs */}
      {isMdUp && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "-15%",
              left: "-15%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: `radial-gradient(circle, #F59E0B40 0%, transparent 70%)`,
              filter: "blur(120px)",
              zIndex: 1
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-10%",
              right: "-10%",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: `radial-gradient(circle, #3B82F640 0%, transparent 70%)`,
              filter: "blur(140px)",
              zIndex: 1
            }}
          />
        </>
      )}
    </Box>
  );
};

export default HeroSection;
