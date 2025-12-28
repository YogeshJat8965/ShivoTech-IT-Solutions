import React from "react";
import { Box, Typography, Paper, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const featuredProjects = [
  {
    title: "Naidiili Desi Tandoor",
    description: "Premium restaurant website with online ordering and reservation system",
    url: "https://naidillidesitandoor.com/",
    icon: <StorefrontIcon sx={{ fontSize: 45 }} />,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    color: "#F59E0B",
  },
  {
    title: "MyeKisan",
    description: "Agricultural platform connecting farmers with buyers and market insights",
    url: "https://myekisan.com/",
    icon: <AgricultureIcon sx={{ fontSize: 45 }} />,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "#10B981",
  },
  {
    title: "Frames by Mayank",
    description: "Professional photography portfolio with elegant gallery and booking system",
    url: "https://framesbymayank.vercel.app/",
    icon: <CameraAltIcon sx={{ fontSize: 45 }} />,
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    color: "#8B5CF6",
  },
];

const OurWorkSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 20% 30%, #3EC4B9 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, #F59E0B 0%, transparent 50%)`,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1400, mx: "auto", px: 4 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="Portfolio"
              sx={{
                background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
                color: "#fff",
                fontWeight: 700,
                mb: 2,
                fontSize: "0.9rem",
                px: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                background: "linear-gradient(135deg, #1E293B 0%, #3EC4B9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Work
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Explore our portfolio of successful projects that showcase our expertise in 
              creating exceptional digital experiences
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Box 
          sx={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: 3, 
            mb: 6,
            justifyContent: "center"
          }}
        >
          {featuredProjects.map((project, index) => (
            <Box 
              key={index}
              sx={{
                flex: "1 1 calc(33.333% - 16px)",
                minWidth: { xs: "100%", md: "300px" },
                maxWidth: { xs: "100%", md: "calc(33.333% - 16px)" }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    background: "#fff",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: project.gradient,
                    },
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: `0 20px 40px ${project.color}30`,
                      "& .project-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    },
                  }}
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {/* Icon */}
                  <Box
                    className="project-icon"
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: 3,
                      background: project.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      mb: 3,
                      transition: "all 0.4s ease",
                      boxShadow: `0 8px 24px ${project.color}40`,
                    }}
                  >
                    {project.icon}
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      color: "primary.main",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.7,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Visit Button */}
                  <Button
                    variant="text"
                    endIcon={<LaunchIcon />}
                    sx={{
                      color: project.color,
                      fontWeight: 700,
                      alignSelf: "flex-start",
                      "&:hover": {
                        background: `${project.color}10`,
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/our-work")}
              sx={{
                background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
                color: "#fff",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: 3,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(62, 196, 185, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(62, 196, 185, 0.4)",
                },
              }}
            >
              View All Projects
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default OurWorkSection;
