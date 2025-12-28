import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  useMediaQuery,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import AppButton from "./reusable/AppButton";
import SectionHeading from "./reusable/SectionHeading";
import { useTheme } from "@mui/material/styles";

AOS.init();

const ContactUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle WhatsApp message send
  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending!");
      return;
    }

    const phoneNumber = "919981255949"; // ✅ Add your WhatsApp number here
    const text = `Hello ShivoTech Team! 👋\n\nI have a query:\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <Box sx={{ 
      px: 4, 
      py: 10, 
      background: "linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)",
      position: "relative",
      overflow: "hidden",
    }} id="contact">
      {/* Animated Background */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62, 196, 185, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-40px)" },
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading data-aos="fade-up">Let's Work Together</SectionHeading>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            textAlign: "center", 
            color: "text.secondary", 
            maxWidth: 700, 
            mx: "auto", 
            mb: 2
          }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Ready to transform your digital presence? Get in touch with us today!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 6, flexWrap: "wrap" }}>
          <Chip 
            icon={<PhoneIcon />}
            label="Quick Response" 
            sx={{ 
              background: "rgba(62, 196, 185, 0.1)",
              border: "1px solid rgba(62, 196, 185, 0.3)",
              color: "#2A9D8F",
              fontWeight: 600,
              px: 2,
              py: 2.5,
              cursor: "default",
              pointerEvents: "none",
            }}
          />
          <Chip 
            label="💬 Free Consultation" 
            sx={{ 
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#D97706",
              fontWeight: 600,
              px: 2,
              py: 2.5,
              cursor: "default",
              pointerEvents: "none",
            }}
          />
        </Box>
      </motion.div>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 4,
          justifyContent: "center",
          alignItems: isMobile ? "center" : "stretch",
          maxWidth: 1400,
          mx: "auto",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Contact Form */}
        <Box flex={1} minWidth={300} sx={{ width: isMobile ? "100%" : "auto", maxWidth: isMobile ? 500 : "none" }}>
          <Paper sx={{ 
            p: 4, 
            borderRadius: 4, 
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.1)"
          }}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="subject"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
              />
              <AppButton
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSendMessage}
              >
                Send via WhatsApp
              </AppButton>
            </Box>
          </Paper>
        </Box>

        {/* Contact Info */}
        <Box flex={1} minWidth={300} sx={{ width: isMobile ? "100%" : "auto", maxWidth: isMobile ? 500 : "none" }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paper
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
                color: "background.paper",
                height: "100%",
                boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.25)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)",
                  animation: "float 6s ease-in-out infinite",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                  animation: "float 8s ease-in-out infinite",
                  animationDelay: "2s",
                },
                "@keyframes float": {
                  "0%, 100%": { transform: "translateY(0px)" },
                  "50%": { transform: "translateY(-20px)" },
                },
              }}
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    color: "secondary.light", 
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  Our Contact Details
                </Typography>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="center" 
                  mt={2}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateX(5px)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(251, 191, 36, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      animation: "pulse 2s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { boxShadow: "0 0 0 0 rgba(251, 191, 36, 0.7)" },
                        "50%": { boxShadow: "0 0 0 10px rgba(251, 191, 36, 0)" },
                      },
                    }}
                  >
                    <EmailIcon sx={{ color: "secondary.main", fontSize: 22 }} />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, wordBreak: "break-word", flex: 1 }}>shivotechit@gmail.com </Typography>
                </Stack>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="center" 
                  mt={2}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateX(5px)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(251, 191, 36, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      animation: "pulse 2s ease-in-out infinite",
                      animationDelay: "0.3s",
                    }}
                  >
                    <EmailIcon sx={{ color: "secondary.main", fontSize: 22 }} />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, wordBreak: "break-word", flex: 1 }}>info@shivotechitsolutions.com</Typography>
                </Stack>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="center" 
                  mt={2}
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 2,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateX(5px)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(251, 191, 36, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      animation: "pulse 2s ease-in-out infinite",
                      animationDelay: "0.6s",
                    }}
                  >
                    <PhoneIcon sx={{ color: "secondary.main", fontSize: 22 }} />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>+91 78050 58023</Typography>
                </Stack>
              </motion.div>
            </Paper>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
