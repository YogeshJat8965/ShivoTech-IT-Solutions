import React from "react";
import { Box, Typography, Stack, Link, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/images/ShivoTech IT Solutions.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        color: "background.paper",
        px: 4,
        py: 8,
        mt: 8,
        borderTop: "1px solid",
        borderColor: "divider"
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
      >
        {/* Column 1: Logo + About */}
        <Box flex={1} minWidth={240}>
          <Box
            component="img"
            src={logo}
            alt="ShivoTech IT Solutions Logo"
            sx={{ height: 150, width: 200, mb: 2, filter: "brightness(1.2)" }}
          />
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            ShivoTech IT Solutions is your one-stop agency for Web, SEO, Marketing & Design.
          </Typography>
        </Box>

        {/* Column 2: Navigation */}
        <Box flex={1} minWidth={200}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="hover"
                sx={{
                  color: "#E2E8F0",
                  fontSize: 14,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#F59E0B",
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
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#F59E0B" }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8", mb: 1 }}>
            Email: contact@shivotech.com
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8", mb: 1 }}>
            Phone: +91 98765 43210
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8" }}>
            Mon – Fri: 10 AM – 6 PM
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Bottom Copyright */}
      <Typography variant="body2" color="#94A3B8" align="center">
        © {new Date().getFullYear()} ShivoTech IT Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
