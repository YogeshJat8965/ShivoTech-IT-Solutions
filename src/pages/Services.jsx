import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Language";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SEOIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Footer from "../components/Footer";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 50 }} />,
    title: "Web Development",
    description:
      "Transform your digital presence with cutting-edge web solutions. We build responsive, scalable, and high-performance websites tailored to your business needs.",
    features: [
      "React & Next.js Development",
      "Custom CMS Solutions",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Integration",
      "Database Architecture"
    ],
    color: "#3EC4B9",
    gradient: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
    benefits: ["Fast Loading", "SEO Optimized", "Mobile First", "Secure"]
  },
  {
    icon: <MarketingIcon sx={{ fontSize: 50 }} />,
    title: "Digital Marketing",
    description:
      "Amplify your brand reach with data-driven marketing strategies. We create campaigns that convert, engage, and build lasting customer relationships.",
    features: [
      "Social Media Marketing",
      "PPC Campaigns (Google Ads)",
      "Email Marketing Automation",
      "Content Marketing",
      "Analytics & Reporting",
      "Conversion Optimization"
    ],
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    benefits: ["ROI Focused", "Multi-Channel", "24/7 Support", "Real-Time Analytics"]
  },
  {
    icon: <SEOIcon sx={{ fontSize: 50 }} />,
    title: "SEO Optimization",
    description:
      "Dominate search engine rankings with our proven SEO strategies. Increase organic traffic, visibility, and credibility for your brand.",
    features: [
      "On-Page SEO",
      "Technical SEO Audit",
      "Link Building Strategy",
      "Local SEO Optimization",
      "Keyword Research",
      "Competitor Analysis"
    ],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    benefits: ["Top Rankings", "Organic Growth", "Quality Traffic", "Sustainable Results"]
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 50 }} />,
    title: "Graphic Designing",
    description:
      "Create stunning visual identities that captivate your audience. From logos to complete brand systems, we bring your vision to life.",
    features: [
      "Logo & Brand Identity",
      "UI/UX Design",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Motion Graphics"
    ],
    color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
    benefits: ["Brand Recognition", "Professional", "Unique Design", "Fast Delivery"]
  },
];

const whyChooseUs = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#3EC4B9" }} />,
    title: "Innovation First",
    description: "We use cutting-edge technologies to deliver future-ready solutions."
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: "#F59E0B" }} />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality."
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#8B5CF6" }} />,
    title: "Secure & Reliable",
    description: "Industry-standard security practices for your peace of mind."
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#EF4444" }} />,
    title: "24/7 Support",
    description: "Round-the-clock assistance to keep your business running smoothly."
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: "80px", md: "100px" } }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #2563eb 100%)",
          py: { xs: 10, md: 15 },
          px: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59,130,246,0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147,197,253,0.3) 0%, transparent 50%)
            `,
            opacity: 0.6,
          }}
        />
        
        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 1400, mx: "auto", px: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "4rem" },
                textAlign: "center",
                mb: 3,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                maxWidth: 800,
                mx: "auto",
                mb: 2,
                fontWeight: 400,
              }}
            >
              Comprehensive Digital Solutions to Elevate Your Business
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
                maxWidth: 700,
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              From web development to digital marketing, we offer end-to-end services that drive growth and success.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, maxWidth: 1400, mx: "auto", px: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 calc(50% - 12px)",
                minWidth: { xs: "100%", md: "calc(50% - 12px)" },
                display: "flex",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Paper
                  elevation={hoveredIndex === index ? 12 : 2}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    p: 4,
                    width: "100%",
                    minHeight: { xs: "auto", md: "520px" },
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    border: "2px solid",
                    borderColor: hoveredIndex === index ? service.color : "transparent",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    background: hoveredIndex === index
                      ? `linear-gradient(135deg, ${service.color}05 0%, ${service.color}10 100%)`
                      : "#fff",
                    transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "6px",
                      background: service.gradient,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3,
                      background: service.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#fff",
                      boxShadow: `0 8px 24px ${service.color}40`,
                      transform: hoveredIndex === index ? "scale(1.1) rotate(5deg)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {React.cloneElement(service.icon, { sx: { fontSize: 40 } })}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: "primary.main",
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2.5,
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features */}
                  <Stack spacing={1} mb={2.5}>
                    {service.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          transition: "transform 0.2s ease",
                          transform: hoveredIndex === index ? "translateX(5px)" : "translateX(0)",
                          transitionDelay: `${idx * 0.05}s`,
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 18, color: service.color }} />
                        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* Benefits */}
                  <Stack direction="row" flexWrap="wrap" gap={0.8} mb={2.5}>
                    {service.benefits.map((benefit, idx) => (
                      <Chip
                        key={idx}
                        label={benefit}
                        size="small"
                        sx={{
                          background: `${service.color}15`,
                          color: service.color,
                          fontWeight: 600,
                          border: `1px solid ${service.color}30`,
                          cursor: "default",
                          pointerEvents: "none",
                        }}
                      />
                    ))}
                  </Stack>

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      background: service.gradient,
                      color: "#fff",
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: `0 4px 14px ${service.color}40`,
                      "&:hover": {
                        background: service.gradient,
                        boxShadow: `0 6px 20px ${service.color}60`,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
          py: { xs: 8, md: 12 },
          px: 4,
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
                color: "primary.main",
              }}
            >
              Why Choose <Box component="span" sx={{ color: '#092e5c' }}>Shivo</Box><Box component="span" sx={{ color: '#3EC4B9' }}>Tech</Box>?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              We're committed to delivering exceptional results that exceed expectations.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 0, sm: 3 },
              justifyContent: "center",
            }}
          >
            {whyChooseUs.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(25% - 24px)",
                  minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 24px)" },
                  maxWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 24px)" },
                  display: "flex",
                  mb: { xs: 3, sm: 0 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      width: "100%",
                      height: "240px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{item.icon}</Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1.5,
                        fontSize: "1.1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "text.secondary",
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
          py: { xs: 8, md: 10 },
          px: 4,
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 4 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                fontSize: "1.1rem",
              }}
            >
              Let's discuss how our services can help you achieve your goals.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: "#fff",
                color: "#3EC4B9",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: 3,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                "&:hover": {
                  background: "#f0f0f0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
                },
              }}
            >
              Get a Free Consultation
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Services;
