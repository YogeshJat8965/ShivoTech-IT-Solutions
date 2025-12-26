import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const FloatingActions = () => {
  const [expanded, setExpanded] = useState(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted only after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll visibility handler
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto collapse expanded button
  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setExpanded(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  const handleClick = (type) => {
    if (expanded === type) {
      if (type === "whatsapp") {
        window.open("https://wa.me/917805058023", "_blank");
      } else {
        window.location.href = "tel:+919981255949";
      }
    } else {
      setExpanded(type);
    }
  };

  // 🔒 CRITICAL FIX:
  // Do not render anything until user scrolls
  if (!mounted || !visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 80, sm: 20 },
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 1000,
        transform: "translateX(0)",
        opacity: 1,
        willChange: "transform",
      }}
    >
      {/* WhatsApp Button */}
      <Tooltip title="Chat on WhatsApp" placement="left" disablePortal>
        <Paper
          onClick={() => handleClick("whatsapp")}
          elevation={4}
          sx={{
            px: expanded === "whatsapp" ? 2 : 1.5,
            py: 1.5,
            borderRadius: "50%",
            backgroundColor: "#10B981",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            width: expanded === "whatsapp" ? "auto" : 56,
            height: 56,
            animation: `${pulse} 2s infinite`,
            boxShadow: "0px 4px 12px rgba(16, 185, 129, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#059669",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 28 }} />
          {expanded === "whatsapp" && (
            <Typography ml={1} variant="body2" whiteSpace="nowrap">
              Chat on WhatsApp
            </Typography>
          )}
        </Paper>
      </Tooltip>

      {/* Phone Button */}
      <Tooltip title="Call Now" placement="left" disablePortal>
        <Paper
          onClick={() => handleClick("phone")}
          elevation={4}
          sx={{
            px: expanded === "phone" ? 2 : 1.5,
            py: 1.5,
            borderRadius: "50%",
            backgroundColor: "#3B82F6",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            width: expanded === "phone" ? "auto" : 56,
            height: 56,
            animation: `${pulse} 2s infinite`,
            boxShadow: "0px 4px 12px rgba(59, 130, 246, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#1E40AF",
            },
          }}
        >
          <PhoneIcon sx={{ fontSize: 28 }} />
          {expanded === "phone" && (
            <Typography ml={1} variant="body2" whiteSpace="nowrap">
              Call Now
            </Typography>
          )}
        </Paper>
      </Tooltip>
    </Box>
  );
};

export default FloatingActions;
