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
      } else if (type === "phone") {
        window.location.href = "tel:+919981255949";
      }
    } else {
      setExpanded(type);
    }
  };

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
      }}
    >
      {/* WhatsApp Button */}
      <Tooltip title="Chat on WhatsApp" placement="left">
        <Paper
          onClick={() => handleClick("whatsapp")}
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
            transition: "all 0.3s ease",
            width: expanded === "whatsapp" ? "auto" : 56,
            height: 56,
            animation: `${pulse} 2s infinite`,
            boxShadow: "0px 4px 12px rgba(16, 185, 129, 0.4)",
            "&:hover": {
              backgroundColor: "#059669",
              boxShadow: "0px 6px 20px rgba(16, 185, 129, 0.5)",
            }
          }}
          elevation={4}
        >
          <WhatsAppIcon sx={{ fontSize: 28 }} />
          {expanded === "whatsapp" && (
            <Typography variant="body2" ml={1} sx={{ whiteSpace: "nowrap" }}>
              Chat on WhatsApp
            </Typography>
          )}
        </Paper>
      </Tooltip>

      {/* Phone Button */}
      <Tooltip title="Call Now" placement="left">
        <Paper
          onClick={() => handleClick("phone")}
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
            transition: "all 0.3s ease",
            width: expanded === "phone" ? "auto" : 56,
            height: 56,
            animation: `${pulse} 2s infinite`,
            boxShadow: "0px 4px 12px rgba(59, 130, 246, 0.4)",
            "&:hover": {
              backgroundColor: "#1E40AF",
              boxShadow: "0px 6px 20px rgba(59, 130, 246, 0.5)",
            }
          }}
          elevation={4}
        >
          <PhoneIcon sx={{ fontSize: 28 }} />
          {expanded === "phone" && (
            <Typography variant="body2" ml={1} sx={{ whiteSpace: "nowrap" }}>
              Call Now
            </Typography>
          )}
        </Paper>
      </Tooltip>
    </Box>
  );
};

export default FloatingActions;
