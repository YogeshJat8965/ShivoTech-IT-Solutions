import React, { useState } from "react";
import {
  Box,
  Container,
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
    content: "contact@shivotech.com",
    link: "mailto:contact@shivotech.com",
    color: "#3EC4B9",
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 35 }} />,
    title: "Call Us",
    content: "+91 9981255949",
    link: "tel:+919981255949",
    color: "#F59E0B",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 35 }} />,
    title: "WhatsApp",
    content: "+91 9981255949",
    link: "https://wa.me/919981255949",
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

    const phoneNumber = "919981255949";
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

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
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
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, mt: { xs: -6, md: -8 } }}>
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
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" justifyContent="center">
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
              <Stack spacing={4} sx={{ height: "100%" }}>
                {/* Business Hours */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)",
                    color: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 40 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      Business Hours
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Monday - Friday
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        9:00 AM - 6:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Saturday
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        10:00 AM - 4:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Sunday
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Closed
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                {/* Quick Response */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Need Immediate Assistance?
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                    Chat with us on WhatsApp for instant support!
                  </Typography>
                  <IconButton
                    href="https://wa.me/919981255949"
                    target="_blank"
                    sx={{
                      width: 60,
                      height: 60,
                      background: "#fff",
                      color: "#25D366",
                      animation: "bounce 2s infinite",
                      "@keyframes bounce": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                      "&:hover": {
                        background: "#f0f0f0",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 35 }} />
                  </IconButton>
                </Paper>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default ContactUs;
