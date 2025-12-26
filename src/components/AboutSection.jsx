import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeading from "./reusable/SectionHeading";
import AppButton from "./reusable/AppButton";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutbanner from "../assets/images/about-banner.png";

AOS.init();

const AboutSection = () => {
  return (
    <Box sx={{ px: 4, py: 10, backgroundColor: "background.default", position: "relative" }} id="about">
      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "rgba(30, 64, 175, 0.05)",
          filter: "blur(40px)",
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
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}
          >
            At <strong>ShivoTech IT Solutions</strong>, we specialize in
            creating impactful digital experiences that empower businesses to
            grow. From custom website development and result-driven SEO to
            digital marketing strategies and brand-centric designs, we make sure
            your business stands out in a competitive world.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mt: 2, lineHeight: 1.8 }}
          >
            Our passionate team thrives on innovation, creativity, and delivering
            measurable results. We don’t just build websites — we craft digital
            solutions that help your business achieve long-term success.
          </Typography>

          <AppButton
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            href="#services"
          >
            Explore Our Services
          </AppButton>
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
          {/* Floating Badge */}
          <Box
            data-aos="zoom-in"
            data-aos-delay="500"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "secondary.main",
              color: "white",
              px: 3,
              py: 2,
              borderRadius: 3,
              boxShadow: "0px 8px 24px rgba(245, 158, 11, 0.4)",
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            5+ Years
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
