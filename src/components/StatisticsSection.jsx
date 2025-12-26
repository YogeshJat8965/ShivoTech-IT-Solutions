import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const stats = [
  {
    icon: BusinessCenterIcon,
    number: 250,
    suffix: "+",
    label: "Projects Completed",
    color: "#F59E0B",
  },
  {
    icon: GroupsIcon,
    number: 180,
    suffix: "+",
    label: "Happy Clients",
    color: "#3B82F6",
  },
  {
    icon: TrendingUpIcon,
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
    color: "#10B981",
  },
  {
    icon: EmojiEventsIcon,
    number: 5,
    suffix: "+",
    label: "Years Experience",
    color: "#FCD34D",
  },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #2563eb 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(147, 197, 253, 0.3) 0%, transparent 50%)`,
          opacity: 0.6,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              mb: 2,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Our Success in Numbers
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.85)",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.25rem" },
              mb: { xs: 6, md: 8 },
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Results that speak louder than words
          </Typography>
        </motion.div>

        {/* Stats Grid */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 2, md: 4 }} 
          justifyContent="center"
          sx={{
            maxWidth: "100%",
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid 
                item 
                xs={12} 
                sm={12} 
                md={6} 
                lg={3} 
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                  }}
                >
                  <Box
                    sx={{
                      p: { xs: 4, md: 5 },
                      textAlign: "center",
                      background: "rgba(30, 58, 138, 0.4)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 4,
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(30, 58, 138, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover::before": {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}11)`,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "rotate(5deg) scale(1.1)",
                          },
                        }}
                      >
                        <IconComponent 
                          sx={{ 
                            fontSize: 38, 
                            color: stat.color,
                          }} 
                        />
                      </Box>
                    </Box>

                    {/* Number */}
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#FCD34D",
                        fontWeight: 900,
                        mb: 1,
                        fontSize: { xs: "2.75rem", md: "3.5rem" },
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
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

                    {/* Label */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.95)",
                        fontWeight: 500,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        letterSpacing: "0.3px",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection;
