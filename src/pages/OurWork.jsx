import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    title: "Naidiili Desi Tandoor",
    description: "A premium restaurant website featuring authentic Indian cuisine with online ordering system, menu showcase, and reservation management.",
    url: "https://naidillidesitandoor.com/",
    category: "Restaurant & E-commerce",
    icon: <StorefrontIcon sx={{ fontSize: 50 }} />,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    color: "#F59E0B",
    tags: ["React", "E-commerce", "Responsive Design", "Online Ordering"],
    features: [
      "Online Menu & Ordering",
      "Table Reservation System",
      "Location Integration",
      "Mobile Optimized"
    ],
  },
  {
    id: 2,
    title: "MyeKisan",
    description: "Agricultural platform connecting farmers directly with buyers, featuring real-time pricing, crop management tools, and marketplace functionality.",
    url: "https://myekisan.com/",
    category: "Agriculture Tech",
    icon: <AgricultureIcon sx={{ fontSize: 50 }} />,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "#10B981",
    tags: ["Web App", "Marketplace", "Farmer Connect", "Real-time Data"],
    features: [
      "Direct Farmer-Buyer Connection",
      "Real-time Market Prices",
      "Crop Management",
      "Secure Transactions"
    ],
  },
  {
    id: 3,
    title: "Frames by Mayank",
    description: "Professional photography portfolio showcasing stunning visual work with an elegant gallery, booking system, and client testimonials.",
    url: "https://framesbymayank.vercel.app/",
    category: "Photography Portfolio",
    icon: <CameraAltIcon sx={{ fontSize: 50 }} />,
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    color: "#8B5CF6",
    tags: ["Portfolio", "Gallery", "Responsive", "Modern UI"],
    features: [
      "Dynamic Photo Gallery",
      "Booking System",
      "Client Testimonials",
      "Fast Performance"
    ],
  },
];

const achievements = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    number: "50+",
    label: "Projects Delivered",
    color: "#F59E0B",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    number: "98%",
    label: "Client Satisfaction",
    color: "#10B981",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    number: "100%",
    label: "Quality Code",
    color: "#8B5CF6",
  },
];

const OurWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Box sx={{ pt: { xs: "80px", md: "100px" } }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #2563eb 100%)",
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, md: 15 },
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(62, 196, 185, 0.8) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.8) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.8) 0%, transparent 50%)`,
            animation: "float 20s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translate(0, 0) scale(1)" },
              "33%": { transform: "translate(30px, -30px) scale(1.1)" },
              "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: "center", color: "#fff" }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Chip
                  label="Portfolio Showcase"
                  sx={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    fontWeight: 600,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    mb: 3,
                    fontSize: "0.9rem",
                  }}
                />
              </motion.div>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  background: "linear-gradient(135deg, #fff 0%, #3EC4B9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Work
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255,255,255,0.95)",
                  maxWidth: 800,
                  mx: "auto",
                  mb: 2,
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                Transforming Ideas into Digital Excellence
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: 700,
                  mx: "auto",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                Explore our portfolio of successful projects across diverse industries. 
                Each project represents our commitment to quality, innovation, and client satisfaction.
              </Typography>
            </Box>
          </motion.div>

          {/* Achievements */}
          <Grid container spacing={3} sx={{ mt: 6 }} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid 
                item 
                xs={12} 
                sm={4} 
                md={4} 
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  style={{
                    width: "280px",
                    maxWidth: "100%",
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      width: "100%",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        background: "rgba(255,255,255,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ color: achievement.color, mb: 1 }}>
                      {achievement.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 900,
                        color: "#fff",
                        mb: 0.5,
                      }}
                    >
                      {achievement.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 600,
                      }}
                    >
                      {achievement.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={5}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Paper
                  elevation={hoveredProject === project.id ? 20 : 4}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: 5,
                    position: "relative",
                    overflow: "hidden",
                    background: hoveredProject === project.id
                      ? `linear-gradient(135deg, ${project.color}05 0%, ${project.color}15 100%)`
                      : "#fff",
                    border: `2px solid ${hoveredProject === project.id ? project.color : "transparent"}`,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredProject === project.id ? "translateY(-10px)" : "translateY(0)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "6px",
                      background: project.gradient,
                      opacity: hoveredProject === project.id ? 1 : 0.7,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  <Grid container spacing={4} alignItems="center">
                    {/* Icon & Category */}
                    <Grid item xs={12} md={3}>
                      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Box
                          sx={{
                            width: 120,
                            height: 120,
                            borderRadius: 4,
                            background: project.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            mx: { xs: "auto", md: 0 },
                            mb: 2,
                            boxShadow: `0 8px 32px ${project.color}40`,
                            transition: "all 0.4s ease",
                            transform: hoveredProject === project.id ? "rotate(5deg) scale(1.05)" : "rotate(0) scale(1)",
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Chip
                          label={project.category}
                          sx={{
                            background: `${project.color}15`,
                            color: project.color,
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            border: `1px solid ${project.color}30`,
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* Project Details */}
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          mb: 2,
                          color: "primary.main",
                          fontSize: { xs: "1.8rem", md: "2.2rem" },
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          lineHeight: 1.8,
                          fontSize: "1.05rem",
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Tags */}
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                        {project.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag}
                            size="small"
                            sx={{
                              background: `${project.color}10`,
                              color: project.color,
                              fontWeight: 600,
                              border: `1px solid ${project.color}20`,
                              "&:hover": {
                                background: `${project.color}20`,
                              },
                            }}
                          />
                        ))}
                      </Stack>

                      {/* Features */}
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: project.color,
                            mb: 1.5,
                            fontSize: "0.95rem",
                          }}
                        >
                          Key Features:
                        </Typography>
                        <Grid container spacing={1}>
                          {project.features.map((feature, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: project.gradient,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "text.secondary",
                                    fontWeight: 500,
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Grid>

                    {/* CTA Button */}
                    <Grid item xs={12} md={3}>
                      <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                        <Button
                          variant="contained"
                          size="large"
                          endIcon={<LaunchIcon />}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: project.gradient,
                            color: "#fff",
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 700,
                            borderRadius: 3,
                            textTransform: "none",
                            boxShadow: `0 8px 24px ${project.color}40`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: `0 12px 32px ${project.color}60`,
                            },
                          }}
                        >
                          Visit Website
                        </Button>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mt: 1.5,
                            color: "text.secondary",
                            fontWeight: 600,
                          }}
                        >
                          Click to explore live project
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={8}
              sx={{
                p: { xs: 5, md: 8 },
                borderRadius: 5,
                background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.1,
                  backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)`,
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <DesignServicesIcon sx={{ fontSize: 60, mb: 2 }} />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                  }}
                >
                  Let's Create Something Amazing Together
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    opacity: 0.95,
                    maxWidth: 700,
                    mx: "auto",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  Ready to bring your vision to life? We're here to transform your ideas 
                  into powerful digital solutions that drive results.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => window.location.href = "/contact"}
                  sx={{
                    background: "#fff",
                    color: "#3EC4B9",
                    px: 6,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    borderRadius: 3,
                    textTransform: "none",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    "&:hover": {
                      background: "#f0f0f0",
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
                    },
                  }}
                >
                  Start Your Project
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default OurWork;
