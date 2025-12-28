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
        py: { xs: 3, md: 16 },
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
        pt: { xs: "100px", md: 16 },
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

      {/* Main Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1400,
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={6}
        >
          {/* Left Content */}
          <Box
            flex={1}
            sx={{
              textAlign: { xs: "center", md: "left" },
              animation: "slideUp 1s ease-out",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Chip
                icon={<RocketLaunchIcon sx={{ fontSize: 20 }} />}
                label="Welcome to Digital Excellence"
                sx={{
                  mb: { xs: 2, md: 3 },
                  mt: { xs: 3, md: 0 },
                  px: 2,
                  py: 2.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  animation: "glow 2s ease-in-out infinite",
                  cursor: "default",
                  pointerEvents: "none",
                  "& .MuiChip-icon": {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
            </motion.div>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                color: "#ffffff",
                fontWeight: 900,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "4.5rem" },
                lineHeight: 1.1,
                mb: { xs: 1.5, md: 2 },
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                background: "linear-gradient(135deg, #ffffff 0%, #E0E7FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transform Your
              <br />
              Digital Presence
            </Typography>

            {/* Animated Subheading */}
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#E0E7FF",
                  fontWeight: 600,
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                  mb: { xs: 1.5, md: 2 },
                  minHeight: { xs: "85px", sm: "auto" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  flexWrap: { xs: "nowrap", md: "nowrap" },
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: { xs: 0.5, md: 0 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    whiteSpace: "nowrap",
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  We specialize in: {"  "}
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    display: "inline-block",
                    minHeight: { xs: "40px", md: "auto" },
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      "Web Development 🚀",
                      2000,
                      "SEO Optimization 📈",
                      2000,
                      "Digital Marketing 💡",
                      2000,
                      "Brand Design 🎨",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.7,
                  maxWidth: 600,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Empowering businesses with cutting-edge web solutions, data-driven SEO, and
                innovative digital strategies that drive real results.
              </Typography>
            </Box>

            {/* Code Terminal Effect */}
            <Paper
              elevation={0}
              sx={{
                mb: 4,
                p: 2.5,
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: 3,
                maxWidth: { xs: "100%", md: 500 },
                mx: { xs: "auto", md: 0 },
                fontFamily: "'Fira Code', monospace",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
                animation: "glow 3s ease-in-out infinite",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "35px",
                  background: "rgba(30, 41, 59, 0.9)",
                  borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
                },
              }}
            >
              {/* Live Indicator Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 12,
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  background: "rgba(16, 185, 129, 0.2)",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#10B981",
                    animation: "pulse 2s ease-in-out infinite",
                    boxShadow: "0 0 8px #10B981",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#10B981",
                    fontWeight: 600,
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  LIVE
                </Typography>
              </Box>

              {/* Terminal Header */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box sx={{ display: "flex", gap: 0.7 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#EF4444" }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#10B981" }} />
                </Box>
                <Typography
                  sx={{
                    ml: 2,
                    fontSize: "0.75rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  shivotech-terminal
                </Typography>
              </Box>

              {/* Command Prompt Line */}
              <Box sx={{ position: "relative", mb: 1 }}>
                <Typography
                  component="span"
                  sx={{
                    color: "#10B981",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 600,
                  }}
                >
                  $ 
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "#60A5FA",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontFamily: "'Fira Code', monospace",
                    ml: 1,
                  }}
                >
                  execute
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "#F59E0B",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontFamily: "'Fira Code', monospace",
                    ml: 1,
                  }}
                >
                  magic.js
                </Typography>
              </Box>

              {/* Code Output */}
              <Box sx={{ position: "relative", pl: 2, borderLeft: "2px solid rgba(59, 130, 246, 0.3)" }}>
                <CodeIcon sx={{ 
                  color: "#3B82F6", 
                  mr: 1, 
                  fontSize: 18, 
                  verticalAlign: "middle",
                  animation: "pulse 2s ease-in-out infinite",
                }} />
                <Typography
                  component="span"
                  key={codeIndex}
                  sx={{
                    color: "#10B981",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 500,
                    textShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
                    animation: "slideUp 0.5s ease-out",
                    display: "inline-block",
                  }}
                >
                  {codeSnippets[codeIndex]}
                </Typography>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    width: 8,
                    height: 18,
                    bgcolor: "#10B981",
                    ml: 0.5,
                    animation: "pulse 1s ease-in-out infinite",
                    verticalAlign: "middle",
                  }}
                />
              </Box>
            </Paper>

            {/* CTA Buttons */}
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "nowrap",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AppButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="#contact"
                  sx={{
                    px: { xs: 2, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    borderRadius: 3,
                    boxShadow: "0 8px 32px rgba(245, 158, 11, 0.4)",
                    "&:hover": {
                      boxShadow: "0 12px 48px rgba(245, 158, 11, 0.6)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Start Your Project →</Box>
                  <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Start Your Project</Box>
                </AppButton>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AppButton
                  variant="outlined"
                  size="large"
                  href="#services"
                  sx={{
                    px: { xs: 2, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    borderRadius: 3,
                    color: "#fff",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    borderWidth: 2,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      borderColor: "#fff",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderWidth: 2,
                    },
                  }}
                >
                  Explore Services
                </AppButton>
              </motion.div>
            </Stack>
          </Box>

          {/* Right Content - Floating Metric Cards */}
          <Box
            flex={1}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              maxWidth: { xs: "100%", md: 550 },
            }}
          >
            {metricCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                whileHover={{ 
                  scale: 1.08, 
                  rotate: 2,
                  transition: { duration: 0.2 }
                }}
                style={{
                  flex: isMdUp ? "0 0 calc(50% - 12px)" : "0 0 calc(50% - 12px)",
                  minWidth: 140,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: "float 4s ease-in-out infinite",
                    animationDelay: `${index * 0.5}s`,
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.12)",
                      borderColor: card.color,
                      boxShadow: `0 20px 60px ${card.color}40`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${card.color}20`,
                      color: card.color,
                      mb: 2,
                      fontSize: 28,
                    }}
                  >
                    {card.icon}
                  </Box>

                  {/* Value */}
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      mb: 0.5,
                      textShadow: `0 0 30px ${card.color}60`,
                    }}
                  >
                    {card.value}
                  </Typography>

                  {/* Label */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {card.label}
                  </Typography>

                  {/* Animated Glow Effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -50,
                      right: -50,
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${card.color}30 0%, transparent 70%)`,
                      filter: "blur(20px)",
                      animation: "pulse 3s ease-in-out infinite",
                    }}
                  />
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
