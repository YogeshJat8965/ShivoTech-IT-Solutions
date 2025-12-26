import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Language";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SEOIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "./reusable/SectionHeading";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Web Development",
    description:
      "Custom websites built for performance, scalability, and responsive design.",
    features: ["React & Next.js", "Custom CMS", "E-commerce", "Progressive Web Apps"],
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that convert leads into loyal customers.",
    features: ["Social Media", "PPC Campaigns", "Email Marketing", "Analytics"],
  },
  {
    icon: <SEOIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "SEO Optimization",
    description:
      "Improve visibility and rankings with our proven SEO strategies.",
    features: ["On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Graphic Designing",
    description:
      "Stunning visual designs that reflect your brand identity.",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{ 
        px: 4, 
        py: 10, 
        backgroundColor: "background.default",
        position: "relative"
      }}
      id="services"
    >
      <SectionHeading data-aos="fade-up">Our Services</SectionHeading>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          textAlign: "center", 
          color: "text.secondary", 
          maxWidth: 700, 
          mx: "auto", 
          mb: 6 
        }}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        We deliver comprehensive digital solutions tailored to your business needs
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
        maxWidth={1400}
        mx="auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              minWidth: 260,
              height: 420,
              p: 4,
              textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRadius: 4,
              border: "1px solid",
              borderColor: hoveredIndex === index ? "primary.main" : "divider",
              background: hoveredIndex === index 
                ? "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)"
                : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-12px)",
                boxShadow: "0px 20px 50px rgba(30, 64, 175, 0.2)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                background: "linear-gradient(90deg, #1E40AF, #F59E0B, #8B5CF6)",
                transform: hoveredIndex === index ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.4s ease",
              },
            }}
          >
            <Stack 
              alignItems="center" 
              spacing={2}
              sx={{
                height: "100%",
                justifyContent: hoveredIndex === index ? "flex-start" : "center",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              <Box 
                sx={{ 
                  transform: hoveredIndex === index ? "rotateY(360deg) scale(0.85)" : "rotateY(0deg) scale(1)",
                  transition: "transform 0.6s ease",
                  opacity: hoveredIndex === index ? 0.9 : 1,
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{ 
                  color: "text.primary", 
                  fontWeight: 600,
                  transition: "all 0.4s ease",
                  fontSize: hoveredIndex === index ? "1.1rem" : "1.25rem",
                }}
              >
                {service.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{
                  transition: "all 0.4s ease",
                  opacity: hoveredIndex === index ? 0 : 1,
                  maxHeight: hoveredIndex === index ? 0 : "100px",
                  overflow: "hidden",
                }}
              >
                {service.description}
              </Typography>
              
              <Box 
                sx={{ 
                  mt: 2, 
                  width: "100%",
                  opacity: hoveredIndex === index ? 1 : 0,
                  maxHeight: hoveredIndex === index ? "300px" : 0,
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredIndex === index ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Stack spacing={1.5}>
                  {service.features.map((feature, i) => (
                    <Typography 
                      key={i} 
                      variant="body2" 
                      sx={{ 
                        color: "primary.main", 
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.5,
                        transition: "all 0.3s ease",
                        transitionDelay: `${i * 0.1}s`,
                        transform: hoveredIndex === index ? "translateX(0)" : "translateX(-20px)",
                      }}
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
