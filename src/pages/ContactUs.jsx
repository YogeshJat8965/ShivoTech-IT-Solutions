import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import AppButton from "../components/reusable/AppButton";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 35 }} />,
    title: "Email Us",
    content: "shivotechit@gmail.com ",
    link: "mailto:shivotechit@gmail.com ",
    color: "#3EC4B9",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 35 }} />,
    title: "Call Us",
    content: "+91 78050 58023",
    link: "tel:+917805058023",
    color: "#F59E0B",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 35 }} />,
    title: "WhatsApp",
    content: "+91 78050 58023",
    link: "https://wa.me/917805058023",
    color: "#25D366",
  },
];

const socialLinks = [
  { icon: <LinkedInIcon />, link: "#", color: "#0A66C2" },
  { icon: <FacebookIcon />, link: "#", color: "#1877F2" },
  { icon: <InstagramIcon />, link: "#", color: "#E4405F" },
  { icon: <TelegramIcon />, link: "#", color: "#0088CC" },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    const phoneNumber = "917805058023";
    const text = `Hello ShivoTech Team! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || "Not provided"}\n*Subject:* ${subject || "General Inquiry"}\n*Message:* ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

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
            animation: "pulse 4s ease-in-out infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.6 },
              "50%": { opacity: 0.8 },
            },
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
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                textAlign: "center",
                maxWidth: 800,
                mx: "auto",
                fontWeight: 400,
              }}
            >
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Contact Info Cards */}
      <Box sx={{ py: { xs: 8, md: 10 }, maxWidth: 1400, mx: "auto", px: 4 }}>
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  width: "320px",
                  maxWidth: "100%",
                }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 3,
                    width: "100%",
                    height: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    background: "#fff",
                    transition: "all 0.3s ease",
                    cursor: info.link !== "#" ? "pointer" : "default",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 32px ${info.color}40`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: info.color,
                    },
                  }}
                  onClick={() => {
                    if (info.link !== "#") window.open(info.link, "_blank");
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: `${info.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                      color: info.color,
                      animation: "pulse 2s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%, 100%": { boxShadow: `0 0 0 0 ${info.color}40` },
                        "50%": { boxShadow: `0 0 0 15px ${info.color}00` },
                      },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: "primary.main",
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      wordBreak: "break-word",
                    }}
                  >
                    {info.content}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Main Contact Section */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start" justifyContent="center">
          {/* Contact Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%", width: "100%", maxWidth: "600px" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 4, md: 5 },
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    color: "primary.main",
                  }}
                >
                  Send Us a Message
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                  }}
                >
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Your Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                    }}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={5}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />
                  <AppButton
                    onClick={handleSendMessage}
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 2,
                    }}
                  >
                    Send Message via WhatsApp
                  </AppButton>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Additional Info */}
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%", width: "100%", maxWidth: "450px" }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4, md: 5 },
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  color: "#fff",
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 4,
                    color: "#FCD34D",
                    fontSize: { xs: "1.25rem", sm: "1.5rem" }
                  }}
                >
                  Our Contact Details
                </Typography>
                
                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.5, sm: 2 },
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: 2,
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 45, sm: 50 },
                        height: { xs: 45, sm: 50 },
                        borderRadius: 2,
                        background: "#FCD34D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <EmailIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: "#3B82F6" }} />
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      shivotechit@gmail.com
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.5, sm: 2 },
                      p: { xs: 1.5, sm: 2 },
                      borderRadius: 2,
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 45, sm: 50 },
                        height: { xs: 45, sm: 50 },
                        borderRadius: 2,
                        background: "#FCD34D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: { xs: 24, sm: 28 }, color: "#3B82F6" }} />
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      +91 78050 58023
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
