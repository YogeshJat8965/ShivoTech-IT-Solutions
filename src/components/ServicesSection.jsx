import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Language";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SEOIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SectionHeading from "./reusable/SectionHeading";
import { motion } from "framer-motion";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: "Web Development",
    description:
      "Custom websites built for performance, scalability, and responsive design.",
    features: ["React & Next.js", "Custom CMS", "E-commerce", "Progressive Web Apps"],
    color: "#3EC4B9",
    gradient: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 40 }} />,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that convert leads into loyal customers.",
    features: ["Social Media", "PPC Campaigns", "Email Marketing", "Analytics"],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    icon: <SEOIcon sx={{ fontSize: 40 }} />,
    title: "SEO Optimization",
    description:
      "Improve visibility and rankings with our proven SEO strategies.",
    features: ["On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    title: "Graphic Designing",
    description:
      "Stunning visual designs that reflect your brand identity.",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
    color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{ 
        px: 4, 
        py: 10, 
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      id="services"
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62, 196, 185, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-30px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "-5%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading data-aos="fade-up">Our Services</SectionHeading>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            textAlign: "center", 
            color: "text.secondary", 
            maxWidth: 700, 
            mx: "auto", 
            mb: 2
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          We deliver comprehensive digital solutions tailored to your business needs
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 6, flexWrap: "wrap" }}>
          <Chip 
            label="💼 Enterprise Ready" 
            sx={{ 
              background: "rgba(62, 196, 185, 0.1)",
              border: "1px solid rgba(62, 196, 185, 0.3)",
              color: "#2A9D8F",
              fontWeight: 600,
              cursor: "default",
              pointerEvents: "none",
            }}
          />
          <Chip 
            label="⚡ Fast Turnaround" 
            sx={{ 
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#D97706",
              fontWeight: 600,
              cursor: "default",
              pointerEvents: "none",
            }}
          />
          <Chip 
            label="🎯 Result Driven" 
            sx={{ 
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#7C3AED",
              fontWeight: 600,
              cursor: "default",
              pointerEvents: "none",
            }}
          />
        </Box>
      </motion.div>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        mt={4}
        maxWidth={1400}
        mx="auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              flex: "1 1 calc(25% - 24px)",
              maxWidth: "calc(25% - 24px)",
              minWidth: 280,
            }}
          >
            <Paper
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                minHeight: 520,
                p: 4,
                pb: 5,
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                borderRadius: 4,
                border: "2px solid",
                borderColor: hoveredIndex === index ? service.color : "divider",
                background: hoveredIndex === index 
                  ? `linear-gradient(135deg, ${service.color}08 0%, rgba(255,255,255,1) 100%)`
                  : "background.paper",
                position: "relative",
                overflow: "visible",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                boxShadow: hoveredIndex === index 
                  ? `0 12px 35px ${service.color}25, 0 6px 15px rgba(0,0,0,0.08)`
                  : "0 4px 20px rgba(0,0,0,0.08)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  background: service.gradient,
                  borderRadius: 5,
                  opacity: hoveredIndex === index ? 0.25 : 0,
                  transition: "opacity 0.3s ease",
                  zIndex: -1,
                  filter: "blur(12px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  background: `radial-gradient(circle at top right, ${service.color}08, transparent 50%)`,
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                },
              }}
            >
              {/* Icon with gradient background */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: service.gradient,
                  color: "#fff",
                  mx: "auto",
                  mb: 3,
                  transform: hoveredIndex === index ? "scale(1.08) rotate(3deg)" : "scale(1)",
                  transition: "all 0.3s ease-in-out",
                  boxShadow: hoveredIndex === index 
                    ? `0 8px 25px ${service.color}35`
                    : `0 4px 15px ${service.color}25`,
                }}
              >
                {React.cloneElement(service.icon, { sx: { fontSize: 45 } })}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: hoveredIndex === index ? service.color : "text.primary",
                  transition: "color 0.3s ease",
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </Typography>

              {/* Features with checkmarks */}
              <Stack spacing={1.5} alignItems="flex-start" mb={3} sx={{ flex: 1 }}>
                {service.features.map((feature, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      width: "100%",
                      transition: "transform 0.2s ease",
                      transform: hoveredIndex === index ? "translateX(3px)" : "translateX(0)",
                      transitionDelay: `${idx * 0.03}s`,
                    }}
                  >
                    <CheckCircleIcon 
                      sx={{ 
                        fontSize: 18, 
                        color: service.color,
                        opacity: hoveredIndex === index ? 1 : 0.6,
                        transition: "all 0.2s ease",
                      }} 
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* CTA Button */}
              <Box sx={{ mt: "auto", width: "100%" }}>
                <Button
                  variant={hoveredIndex === index ? "contained" : "outlined"}
                  endIcon={<ArrowForwardIcon sx={{ 
                    transition: "transform 0.2s ease",
                    transform: hoveredIndex === index ? "translateX(3px)" : "translateX(0)",
                  }} />}
                  href="#contact"
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    borderColor: service.color,
                    color: hoveredIndex === index ? "#fff" : service.color,
                    background: hoveredIndex === index ? service.gradient : "transparent",
                    borderWidth: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderWidth: 2,
                      borderColor: service.color,
                      background: service.gradient,
                      color: "#fff",
                      transform: "translateX(3px)",
                      boxShadow: `0 6px 20px ${service.color}35`,
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
