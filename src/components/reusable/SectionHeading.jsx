
import React from "react";
import { Typography } from "@mui/material";

const SectionHeading = ({ children, ...props }) => (
  <Typography
    variant="h3"
    sx={{ 
      color: "primary.main", 
      fontWeight: "bold", 
      mb: 3, 
      textAlign: "center",
      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
    }}
    {...props}
  >
    {children}
  </Typography>
);

export default SectionHeading;
