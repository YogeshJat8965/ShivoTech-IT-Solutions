import React from "react";
import { Box, Typography, Stack, Link, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #eff3f5ff 0%, #87bcecff 100%)",
        color: "#1a1c1fff",
        px: 4,
        py: 8,
        mt: 0,
        borderTop: "2px solid #3EC4B9"
      }}
    >
      {/* Main Flex Container */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems={isMobile ? "flex-start" : "center"}
        gap={4}
        flexWrap="wrap"
        maxWidth={1400}
        mx="auto"
      >
        {/* Column 1: Logo + About */}
        <Box flex={1} minWidth={240} sx={{ width: "100%" }}>
          <Box
            component="img"
            src={logo}
            alt="ShivoTech IT Solutions Logo"
            sx={{ height: 120, width: 120, display: "block", mb: 2, ml: -2.1 }}
          />
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            <Box component="span" sx={{ color: '#092e5c', fontWeight: 600 }}>Shivo</Box>
            <Box component="span" sx={{ color: '#3EC4B9', fontWeight: 600 }}>Tech</Box> IT Solutions is your one-stop agency for Web, SEO, Marketing & Design.
          </Typography>
        </Box>

        {/* Column 2: Navigation */}
        <Box flex={1} minWidth={200}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#1e293b" }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="hover"
                sx={{
                  color: "#64748b",
                  fontSize: 14,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#3EC4B9",
                    transform: "translateX(4px)"
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Column 3: Contact Info */}
        <Box flex={1} minWidth={240}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#3EC4B9" }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", mb: 1 }}>
            Email: shivotechit@gmail.com 
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b", mb: 1 }}>
            Phone: +91 78050 58023
          </Typography>
          {/* <Typography variant="body2" sx={{ color: "#64748b" }}>
            Mon – Fri: 10 AM – 6 PM
          </Typography> */}
        </Box>
      </Box>

      <Divider sx={{ my: 4, borderColor: "rgba(62, 196, 185, 0.3)" }} />

      {/* Bottom Copyright */}
      <Typography variant="body2" color="#64748b" align="center">
        © 2018 <Box component="span" sx={{ color: '#092e5c', fontWeight: 600 }}>Shivo</Box><Box component="span" sx={{ color: '#3EC4B9', fontWeight: 600 }}>Tech</Box> IT Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
