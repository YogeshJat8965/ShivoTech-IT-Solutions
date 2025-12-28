import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DevicesIcon from "@mui/icons-material/Devices";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 45 }} />,
    title: "Lightning Fast",
    description: "Optimized performance for blazing-fast load times",
    color: "#3B82F6",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 45 }} />,
    title: "Secure & Safe",
    description: "Enterprise-grade security for your peace of mind",
    color: "#10B981",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 45 }} />,
    title: "24/7 Support",
    description: "Round-the-clock support whenever you need us",
    color: "#F59E0B",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 45 }} />,
    title: "Quality Assured",
    description: "100% satisfaction guarantee on all projects",
    color: "#8B5CF6",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 45 }} />,
    title: "Growth Focused",
    description: "Strategies designed to scale your business",
    color: "#EF4444",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 45 }} />,
    title: "Fully Responsive",
    description: "Perfect experience on all devices and screens",
    color: "#06B6D4",
  },
];

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    number: 20,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 50, color: "#3B82F6" }} />,
    number: 18,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#10B981" }} />,
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#F59E0B" }} />,
    number: 7,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 50, color: "#8B5CF6" }} />,
    number: 100,
    suffix: "%",
    label: "Quality Assurance",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 50, color: "#06B6D4" }} />,
    number: 99,
    suffix: "%",
    label: "On-Time Delivery",
  },
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <>
      {/* Statistics Section */}
      <Box
        ref={ref}
        sx={{
          px: 4,
          py: { xs: 8, md: 12 },
          background: "linear-gradient(180deg, #1E40AF 0%, #1E3A8A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1400, mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
            }}
            data-aos="fade-up"
          >
            Our Success in Numbers
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 600,
              mx: "auto",
              mb: 8,
              fontSize: "1.125rem",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Results that speak louder than words
          </Typography>

          <Box 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 3, 
              justifyContent: "center",
              width: "100%"
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(16.666% - 20px)",
                  minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "150px" },
                  maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(16.666% - 20px)" }
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 3, md: 5 },
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    transition: "all 0.4s ease",
                    height: "100%",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.12)",
                      transform: "translateY(-8px)",
                      border: "1px solid rgba(245, 158, 11, 0.5)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FCD34D",
                      fontWeight: 900,
                      mb: 1,
                      fontSize: { xs: "2.5rem", md: "4rem" },
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {inView ? (
                      <>
                        <CountUp end={stat.number} duration={2.5} />
                        {stat.suffix}
                      </>
                    ) : (
                      "0" + stat.suffix
                    )}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontWeight: 500,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: { xs: 8, md: 12 },
          backgroundColor: "background.default",
          position: "relative",
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 4 }}>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
            }}
            data-aos="fade-up"
          >
            Why Choose <Box component="span" sx={{ color: '#092e5c' }}>Shivo</Box><Box component="span" sx={{ color: '#3EC4B9' }}>Tech</Box>?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              mb: 8,
              fontSize: "1.125rem",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We combine expertise, innovation, and dedication to deliver exceptional results
          </Typography>
          <Box 
            sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 3, 
              justifyContent: "center",
              width: "100%"
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(16.666% - 20px)",
                  minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "150px" },
                  maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(16.666% - 20px)" }
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    background: "#fff",
                    borderRadius: 3,
                    border: "2px solid",
                    borderColor: "grey.100",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: feature.color,
                      boxShadow: `0 20px 50px ${feature.color}25`,
                      "&::before": {
                        opacity: 1,
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      color: feature.color,
                      transition: "all 0.4s ease",
                      ".MuiBox-root:hover &": {
                        transform: "scale(1.1) rotate(5deg)",
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "1.25rem",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhyChooseUs;
