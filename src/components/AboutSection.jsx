import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";
import SectionHeading from "./reusable/SectionHeading";
import AppButton from "./reusable/AppButton";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutbanner from "../assets/images/about-banner.png";

AOS.init();

const AboutSection = () => {
  const stats = [
    { icon: <RocketLaunchIcon />, number: "250+", label: "Projects", color: "#3EC4B9" },
    { icon: <PeopleIcon />, number: "180+", label: "Clients", color: "#F59E0B" },
    { icon: <TrendingUpIcon />, number: "85%", label: "Growth", color: "#8B5CF6" },
    { icon: <EmojiEventsIcon />, number: "95%", label: "Success", color: "#EF4444" },
    { icon: <RocketLaunchIcon />, number: "3+", label: "Years", color: "#10B981" },
  ];

  return (
    <Box sx={{ 
      px: 4, 
      py: 10, 
      background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      position: "relative",
      overflow: "hidden",
    }} id="about">
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62, 196, 185, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
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
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Section Heading */}
      <SectionHeading data-aos="fade-up">Who We Are</SectionHeading>

      {/* Flex Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {/* Left Content */}
        <Box
          data-aos="fade-right"
          data-aos-duration="1000"
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ 
              color: "primary.main", 
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "1.75rem" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: { xs: "50%", md: 0 },
                transform: { xs: "translateX(-50%)", md: "none" },
                width: "60%",
                height: 4,
                background: "linear-gradient(90deg, #1E40AF, #F59E0B)",
                borderRadius: 2,
              }
            }}
          >
            Your Trusted Digital Growth Partner
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8, fontSize: "1.1rem" }}
          >
            At <strong>
              <Box component="span" sx={{ color: '#092e5c' }}>Shivo</Box>
              <Box component="span" sx={{ color: '#3EC4B9' }}>Tech</Box> IT Solutions
            </strong>, we specialize in
            creating impactful digital experiences that empower businesses to
            grow. From custom website development and result-driven SEO to
            digital marketing strategies and brand-centric designs, we make sure
            your business stands out in a competitive world.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8, fontSize: "1.1rem" }}
          >
            Our passionate team thrives on innovation, creativity, and delivering
            measurable results. We don’t just build websites — we craft digital
            solutions that help your business achieve long-term success.
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              gap: 2,
            }}
          >
            <AppButton
              variant="contained"
              color="primary"
              href="#services"
            >
              Explore Our Services
            </AppButton>

            {/* Years Badge */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: 3,
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                boxShadow: "0px 8px 24px rgba(16, 185, 129, 0.3)",
                color: "white",
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: 24 }} />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                3+ Years Experience
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box
          data-aos="fade-left"
          data-aos-duration="1000"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={aboutbanner}
            alt="About Us"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 4,
              boxShadow: "0px 20px 60px rgba(30, 64, 175, 0.15)",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.05) rotate(2deg)",
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
