import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const stats = [
  {
    icon: <WorkIcon sx={{ fontSize: 50, color: "primary.main" }} />,
    number: 250,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 50, color: "secondary.main" }} />,
    number: 180,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#8B5CF6" }} />,
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 50, color: "#10B981" }} />,
    number: 5,
    suffix: "+",
    label: "Years Experience",
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
        px: 4,
        py: 12,
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1E40AF 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(245, 158, 11, 0.15)",
          filter: "blur(100px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.15)",
          filter: "blur(100px)",
          animation: "float 10s ease-in-out infinite",
        }}
      />

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Grid container spacing={5} sx={{ position: "relative", zIndex: 2, maxWidth: 1400, mx: "auto" }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  textAlign: "center",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: 5,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-15px) scale(1.05)",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)",
                    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.4)",
                    border: "2px solid rgba(245, 158, 11, 0.5)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: "linear-gradient(90deg, #F59E0B, #3B82F6, #8B5CF6)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Box 
                  sx={{ 
                    mb: 3,
                    "& svg": {
                      transition: "transform 0.5s ease",
                    },
                    "&:hover svg": {
                      transform: "scale(1.2) rotate(10deg)",
                    }
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: 900,
                    mb: 1,
                    background: "linear-gradient(135deg, #ffffff 0%, #FCD34D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
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
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StatisticsSection;
