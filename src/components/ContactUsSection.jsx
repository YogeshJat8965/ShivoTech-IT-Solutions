import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
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
    <Box sx={{ px: 4, py: 10, backgroundColor: "background.default" }} id="contact">
      <SectionHeading data-aos="fade-up">Contact Us</SectionHeading>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          textAlign: "center", 
          color: "text.secondary", 
          maxWidth: 700, 
          mx: "auto", 
          mb: 6 
        }}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Let's discuss how we can help transform your digital presence
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 4,
          justifyContent: "center",
        }}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {/* Contact Form */}
        <Box flex={1} minWidth={300}>
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
        <Box flex={1} minWidth={300}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              background: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
              color: "background.paper",
              height: "100%",
              boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.25)"
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: "secondary.light", fontWeight: 600 }}>
              Our Contact Details
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <EmailIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">contact@shivotech.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <EmailIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">shivotech@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <PhoneIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">+91 99812 55949</Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
