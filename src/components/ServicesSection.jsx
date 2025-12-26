import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Language";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SEOIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SectionHeading from "./reusable/SectionHeading";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Web Development",
    description:
      "Custom websites built for performance, scalability, and responsive design.",
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that convert leads into loyal customers.",
  },
  {
    icon: <SEOIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "SEO Optimization",
    description:
      "Improve visibility and rankings with our proven SEO strategies.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Graphic Designing",
    description:
      "Stunning visual designs that reflect your brand identity.",
  },
];

const ServicesSection = () => {
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
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {services.map((service, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              minWidth: 260,
              p: 4,
              textAlign: "center",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 16px 40px rgba(30, 64, 175, 0.15)",
                borderColor: "primary.main",
                background: "linear-gradient(135deg, #ffffff 0%, #EFF6FF 100%)",
              },
            }}
          >
            <Stack alignItems="center" spacing={2}>
              {service.icon}
              <Typography
                variant="h6"
                sx={{ color: "text.primary", fontWeight: 600 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
