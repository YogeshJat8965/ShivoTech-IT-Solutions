import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Chip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Naidiili Desi Tandoor",
    feedback:
      "ShivoTech created a stunning website for our restaurant with an excellent online ordering system. Our online orders increased by 200% and customers love the easy navigation. The reservation system works flawlessly!",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3EC4B9&color=fff&size=200&bold=true",
    rating: 5,
    company: "Naidiili Desi Tandoor",
  },
  {
    name: "Suresh Chaudhary",
    role: "Founder, MyeKisan Platform",
    feedback:
      "Working with ShivoTech was a fantastic experience! They understood the agricultural sector perfectly and built a platform that truly connects farmers with buyers. The real-time pricing feature is a game-changer for our community.",
    image: "https://ui-avatars.com/api/?name=Suresh+Chaudhary&background=10B981&color=fff&size=200&bold=true",
    rating: 5,
    company: "MyeKisan",
  },
  {
    name: "Mayank Sharma",
    role: "Professional Photographer",
    feedback:
      "ShivoTech delivered an absolutely beautiful portfolio website for my photography business. The gallery loads fast, looks stunning, and my booking inquiries have tripled! Their attention to detail in showcasing my work is exceptional.",
    image: "https://ui-avatars.com/api/?name=Mayank+Sharma&background=8B5CF6&color=fff&size=200&bold=true",
    rating: 5,
    company: "Frames by Mayank",
  },
  {
    name: "Anjali Deshmukh",
    role: "Director, Zenith Consultancy",
    feedback:
      "ShivoTech transformed our online presence completely. Their team is highly professional, responsive, and delivered exactly what we needed. Our client engagement has improved significantly, and we're getting more inquiries than ever before!",
    image: "https://ui-avatars.com/api/?name=Anjali+Deshmukh&background=F59E0B&color=fff&size=200&bold=true",
    rating: 5,
    company: "Zenith Consultancy",
  },
  {
    name: "Karan Malhotra",
    role: "CEO, Digital Marketing Hub",
    feedback:
      "Exceptional service from start to finish! ShivoTech not only built us a modern website but also helped optimize it for search engines. Our organic traffic has grown by 180% in just three months. Highly recommended for any business!",
    image: "https://ui-avatars.com/api/?name=Karan+Malhotra&background=EF4444&color=fff&size=200&bold=true",
    rating: 5,
    company: "Digital Marketing Hub",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        pb: { xs: 16, md: 20 },
        background: "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #334155 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(62, 196, 185, 0.8) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.8) 0%, transparent 50%)`,
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.1 },
            "50%": { opacity: 0.2 },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Chip
              label="Testimonials"
              sx={{
                background: "rgba(62, 196, 185, 0.2)",
                color: "#3EC4B9",
                fontWeight: 700,
                mb: 2,
                fontSize: "0.9rem",
                px: 2,
                border: "1px solid rgba(62, 196, 185, 0.3)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#fff",
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Don't just take our word for it - hear from our satisfied clients
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonial Slider */}
        <Box sx={{ position: "relative", minHeight: { xs: "500px", md: "400px" } }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: { xs: 4, md: 6 },
                  borderRadius: 5,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: 30,
                    opacity: 0.1,
                  }}
                >
                  <FormatQuoteIcon sx={{ fontSize: 150, color: "#3EC4B9" }} />
                </Box>

                {/* Content */}
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  {/* Stars */}
                  <Box sx={{ display: "flex", gap: 0.5, mb: 3, justifyContent: "center" }}>
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#F59E0B", fontSize: 28 }} />
                    ))}
                  </Box>

                  {/* Feedback */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      textAlign: "center",
                      mb: 4,
                      lineHeight: 1.8,
                      fontWeight: 400,
                      fontSize: { xs: "1.1rem", md: "1.4rem" },
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonials[currentIndex].feedback}"
                  </Typography>

                  {/* Client Info */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      sx={{
                        width: 80,
                        height: 80,
                        border: "4px solid #3EC4B9",
                        boxShadow: "0 8px 24px rgba(62, 196, 185, 0.4)",
                      }}
                    />
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fff",
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        {testimonials[currentIndex].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#3EC4B9",
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {testimonials[currentIndex].role}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        {testimonials[currentIndex].company}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 0, md: -8 },
              pointerEvents: "none",
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                background: "rgba(62, 196, 185, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(62, 196, 185, 0.3)",
                color: "#3EC4B9",
                pointerEvents: "all",
                "&:hover": {
                  background: "rgba(62, 196, 185, 0.3)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                background: "rgba(62, 196, 185, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(62, 196, 185, 0.3)",
                color: "#3EC4B9",
                pointerEvents: "all",
                "&:hover": {
                  background: "rgba(62, 196, 185, 0.3)",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: -60,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1.5,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                sx={{
                  width: currentIndex === index ? 40 : 12,
                  height: 12,
                  borderRadius: 6,
                  background: currentIndex === index 
                    ? "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)"
                    : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: currentIndex === index 
                      ? "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)"
                      : "rgba(255,255,255,0.5)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
