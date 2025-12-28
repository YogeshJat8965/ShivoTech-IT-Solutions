import React from "react";
import { Box, Typography, Grid, Button, Paper, Stack, Divider, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../components/reusable/SectionHeading";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const values = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 40, color: "#3EC4B9" }} />,
    title: "Quality First",
    description: "We never compromise on quality and deliver excellence in every project."
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: "#F59E0B" }} />,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting relationships through trust."
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#8B5CF6" }} />,
    title: "Innovation",
    description: "We stay ahead with cutting-edge technologies and creative solutions."
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#EF4444" }} />,
    title: "Growth Mindset",
    description: "Continuous learning and improvement drive our team forward."
  },
];

const achievements = [
  { number: 250, label: "Projects Delivered", suffix: "+", color: "#3EC4B9" },
  { number: 180, label: "Happy Clients", suffix: "+", color: "#F59E0B" },
  { number: 95, label: "Client Satisfaction", suffix: "%", color: "#8B5CF6" },
  { number: 5, label: "Years Experience", suffix: "+", color: "#EF4444" },
];

const whyChooseUs = [
  {
    icon: <SpeedIcon sx={{ fontSize: 45, color: "#3EC4B9" }} />,
    title: "Lightning Fast Delivery",
    description: "We respect your time and deliver projects on schedule without compromising quality.",
    gradient: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 45, color: "#F59E0B" }} />,
    title: "Creative Solutions",
    description: "Out-of-the-box thinking combined with proven strategies for unique results.",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 45, color: "#8B5CF6" }} />,
    title: "Secure & Reliable",
    description: "Industry-standard security practices ensure your data and systems are protected.",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 45, color: "#EF4444" }} />,
    title: "Dedicated Support",
    description: "24/7 support and maintenance to keep your business running smoothly.",
    gradient: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  },
];

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box sx={{ pt: { xs: "80px", md: "100px" } }}>
      
      {/* Hero Banner */}
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
              About ShivoTech
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                maxWidth: 900,
                mx: "auto",
                mb: 2,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Empowering Businesses Through Digital Innovation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
                maxWidth: 800,
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              We help businesses grow through cutting-edge design, web development, SEO and digital strategy.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, maxWidth: 1400, mx: "auto", px: 4 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "3rem" },
                  mb: 3,
                  color: "primary.main",
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: "1.1rem",
                }}
              >
                <Box component="span" sx={{ color: '#092e5c', fontWeight: 600 }}>Shivo</Box><Box component="span" sx={{ color: '#3EC4B9', fontWeight: 600 }}>Tech</Box> IT Solutions was founded with a simple yet powerful vision: to empower businesses through innovative digital solutions. What started as a small team of passionate developers has grown into a full-service digital agency.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: "1.1rem",
                }}
              >
                We believe technology should be accessible, impactful, and transformative. Our team combines technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                }}
              >
                Today, we proudly serve clients across industries, helping them navigate the digital landscape and achieve sustainable growth.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack spacing={3}>
                {/* Mission Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
                    color: "#fff",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(62, 196, 185, 0.3)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      width: "200%",
                      height: "200%",
                      background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      animation: "rotate 20s linear infinite",
                    },
                    "@keyframes rotate": {
                      "0%": { transform: "rotate(0deg)" },
                      "100%": { transform: "rotate(360deg)" },
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          background: "rgba(255,255,255,0.2)",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RocketLaunchIcon sx={{ fontSize: 35 }} />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ opacity: 0.95, lineHeight: 1.8, fontSize: "1.05rem" }}>
                      To deliver innovative, scalable, and results-driven digital solutions that empower businesses to thrive in the modern digital economy.
                    </Typography>
                  </Box>
                </Paper>

                {/* Vision Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    color: "#fff",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      animation: "rotate 20s linear infinite reverse",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 2,
                          background: "rgba(255,255,255,0.2)",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <VisibilityIcon sx={{ fontSize: 35 }} />
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ opacity: 0.95, lineHeight: 1.8, fontSize: "1.05rem" }}>
                      To be the leading digital transformation partner, recognized for our commitment to excellence, innovation, and client success.
                    </Typography>
                  </Box>
                </Paper>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
          py: { xs: 8, md: 12 },
          px: 4,
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 4 }}>
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
              Why Choose ShivoTech?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                mb: 8,
                fontSize: "1.1rem",
              }}
            >
              We're not just service providers – we're your partners in digital success.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {whyChooseUs.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(25% - 24px)",
                  minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 24px)" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    width: "100%",
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: "100%",
                      minHeight: "320px",
                      borderRadius: 4,
                      position: "relative",
                      overflow: "hidden",
                      border: "2px solid transparent",
                      background: "#fff",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                        borderColor: item.gradient.match(/#[A-F0-9]{6}/i)[0],
                        "&::before": {
                          opacity: 0.08,
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: item.gradient,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: 3,
                          background: item.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 3,
                          boxShadow: `0 10px 30px ${item.gradient.match(/#[A-F0-9]{6}/i)[0]}40`,
                          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "scale(1.1) rotate(5deg)",
                          },
                          "& svg": {
                            color: "#fff !important",
                            fontSize: "45px !important",
                          },
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2, 
                          color: "primary.main",
                          fontSize: "1.15rem",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "text.secondary", 
                          lineHeight: 1.8,
                          fontSize: "0.95rem",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Our Values */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
          py: { xs: 8, md: 12 },
          px: 4,
        }}
      >
        <Box sx={{ maxWidth: 1400, mx: "auto", px: 4 }}>
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
              Our Core Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                mb: 8,
                fontSize: "1.1rem",
              }}
            >
              The principles that guide everything we do.
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {values.map((value, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 calc(25% - 24px)",
                  minWidth: { xs: "100%", sm: "calc(50% - 12px)", md: "calc(25% - 24px)" },
                  display: "flex",
                  justifyContent: "center",
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
                      height: "280px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      borderRadius: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1.5, 
                        color: "primary.main",
                        fontSize: "1.15rem",
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "text.secondary", 
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Team Section */}
      <OurTeam />

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
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
              Ready to Start Your Digital Journey?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                fontSize: "1.1rem",
              }}
            >
              Let's work together to bring your vision to life.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                background: "#fff",
                color: "#3b82f6",
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
              Contact Us Today
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Footer />

    </Box>
  );
};

export default AboutUs;
