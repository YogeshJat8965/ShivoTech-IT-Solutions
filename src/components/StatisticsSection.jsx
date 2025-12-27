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
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #2563eb 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              mb: 2,
            }}
          >
            Our Success in Numbers
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "rgba(255,255,255,0.85)",
              mb: { xs: 6, md: 8 },
            }}
          >
            Results that speak louder than words
          </Typography>
        </motion.div>

        {/* Stats Grid */}
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                key={index}
                sx={{ 
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ 
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", sm: "280px" },
                      maxWidth: "280px",
                      height: "280px",
                      p: 4,
                      textAlign: "center",
                      background: "rgba(30,58,138,0.4)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 4,
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(30,58,138,0.6)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: 2,
                          background: `${stat.color}22`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon sx={{ fontSize: 38, color: stat.color }} />
                      </Box>
                    </Box>

                    {/* Number */}
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#FCD34D",
                        fontWeight: 900,
                        mb: 1,
                        fontSize: "3rem",
                        lineHeight: 1,
                      }}
                    >
                      {inView ? (
                        <>
                          <CountUp end={stat.number} duration={2.5} />
                          {stat.suffix}
                        </>
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </Typography>

                    {/* Label */}
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.95)",
                        fontWeight: 500,
                        fontSize: "1rem",
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
