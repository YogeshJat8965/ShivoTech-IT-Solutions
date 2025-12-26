import React from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // Scoped animations
  const animations = {
    "@keyframes floatY": {
      "0%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-15px)" },
      "100%": { transform: "translateY(0)" }
    },
    "@keyframes floatX": {
      "0%": { transform: "translateX(0)" },
      "50%": { transform: "translateX(12px)" },
      "100%": { transform: "translateX(0)" }
    },
    "@keyframes gradientShift": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" }
    },
    "@keyframes pulse": {
      "0%": { transform: "scale(1)", opacity: 0.9 },
      "50%": { transform: "scale(1.1)", opacity: 1 },
      "100%": { transform: "scale(1)", opacity: 0.9 }
    }
  };

  return (
    <Box
      sx={{
        ...animations,
        position: "relative",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 14 },
        bgcolor: "background.paper",
        overflow: "hidden",
        // Original gradient background (commented out for video background)
        // background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 50%, ${theme.palette.secondary.main} 100%)`,
        // backgroundSize: "300% 300%",
        // animation: "gradientShift 10s ease infinite"
      }}
      id="home"
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={require("../assets/video/videoBackground.mp4")} type="video/mp4" />
      </Box>

      {/* Dark Overlay for better text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
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
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, color: "#fff" }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.secondary.light,
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: "0.875rem"
            }}
          >
            WELCOME TO SHIVOTECH IT SOLUTIONS
          </Typography>

          <SectionHeading sx={{ 
            color: "#fff", 
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 800,
            mb: 2,
            textShadow: "0px 2px 20px rgba(0,0,0,0.3)",
            minHeight: { xs: "200px", md: "140px" },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" }
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
              maxWidth: "100%"
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
            <g style={{ animation: "floatY 5s ease-in-out infinite" }}>
              <rect x="120" y="150" rx="14" width="280" height="200" fill="#fff" opacity="0.9" />
              <text
                x="160"
                y="200"
                fontSize="16"
                fontWeight="600"
                fill={theme.palette.text.primary}
              >
                🚀 Digital Solutions
              </text>
              <text
                x="160"
                y="230"
                fontSize="14"
                fill={theme.palette.text.secondary}
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
              style={{ animation: "floatX 6s ease-in-out infinite" }}
            />

            {/* Floating Stat Badges */}
            <g style={{ animation: "pulse 3s ease-in-out infinite" }}>
              <rect x="60" y="240" rx="12" width="110" height="38" fill="#fff" opacity="0.9" />
              <text x="75" y="265" fontSize="12" fill={theme.palette.text.primary}>
                250+ Projects
              </text>
            </g>

            <g style={{ animation: "pulse 3.5s ease-in-out infinite" }}>
              <rect x="360" y="160" rx="12" width="120" height="38" fill="#fff" opacity="0.9" />
              <text x="375" y="185" fontSize="12" fill={theme.palette.text.primary}>
                85% Growth 📈
              </text>
            </g>

            {/* Decorative Nodes */}
            <circle cx="120" cy="140" r="7" fill="#F59E0B" style={{ animation: "pulse 2s infinite" }} />
            <circle cx="420" cy="340" r="7" fill="#3B82F6" style={{ animation: "pulse 2.5s infinite" }} />
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
