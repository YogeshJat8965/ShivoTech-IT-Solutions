import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E40AF", // Deep Blue - Professional and trustworthy
      light: "#3B82F6", // Bright Blue
      dark: "#1E3A8A", // Navy Blue
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F59E0B", // Vibrant Amber/Orange - Energy and innovation
      light: "#FCD34D",
      dark: "#D97706",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#8B5CF6", // Purple - Modern tech feel
      light: "#A78BFA",
      dark: "#7C3AED",
    },
    background: {
      default: "#F8FAFC", // Light gray-blue
      paper: "#FFFFFF",
      dark: "#0F172A", // Dark blue-gray
    },
    text: {
      primary: "#1E293B", // Dark slate
      secondary: "#64748B", // Medium slate
      disabled: "#CBD5E1",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#3B82F6",
    },
    divider: "#E2E8F0",
  },
  typography: {
    fontFamily: `'Inter', 'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.75rem",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.75,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(30, 64, 175, 0.05)",
    "0px 4px 8px rgba(30, 64, 175, 0.08)",
    "0px 8px 16px rgba(30, 64, 175, 0.1)",
    "0px 12px 24px rgba(30, 64, 175, 0.12)",
    "0px 16px 32px rgba(30, 64, 175, 0.14)",
    "0px 20px 40px rgba(30, 64, 175, 0.16)",
    "0px 24px 48px rgba(30, 64, 175, 0.18)",
    "0px 32px 64px rgba(30, 64, 175, 0.2)",
    "0px 2px 4px rgba(30, 64, 175, 0.05)",
    "0px 4px 8px rgba(30, 64, 175, 0.08)",
    "0px 8px 16px rgba(30, 64, 175, 0.1)",
    "0px 12px 24px rgba(30, 64, 175, 0.12)",
    "0px 16px 32px rgba(30, 64, 175, 0.14)",
    "0px 20px 40px rgba(30, 64, 175, 0.16)",
    "0px 24px 48px rgba(30, 64, 175, 0.18)",
    "0px 32px 64px rgba(30, 64, 175, 0.2)",
    "0px 2px 4px rgba(30, 64, 175, 0.05)",
    "0px 4px 8px rgba(30, 64, 175, 0.08)",
    "0px 8px 16px rgba(30, 64, 175, 0.1)",
    "0px 12px 24px rgba(30, 64, 175, 0.12)",
    "0px 16px 32px rgba(30, 64, 175, 0.14)",
    "0px 20px 40px rgba(30, 64, 175, 0.16)",
    "0px 24px 48px rgba(30, 64, 175, 0.18)",
    "0px 32px 64px rgba(30, 64, 175, 0.2)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          padding: "12px 32px",
          fontSize: "1rem",
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.25)",
            transform: "translateY(-2px)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0px 8px 24px rgba(30, 64, 175, 0.35)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 16px rgba(30, 64, 175, 0.08)",
        },
        elevation1: {
          boxShadow: "0px 2px 8px rgba(30, 64, 175, 0.06)",
        },
        elevation2: {
          boxShadow: "0px 4px 12px rgba(30, 64, 175, 0.08)",
        },
        elevation3: {
          boxShadow: "0px 8px 20px rgba(30, 64, 175, 0.1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 16px rgba(30, 64, 175, 0.08)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "0px 12px 32px rgba(30, 64, 175, 0.15)",
            transform: "translateY(-4px)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            "&:hover fieldset": {
              borderColor: "#3B82F6",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 8px rgba(30, 64, 175, 0.08)",
        },
      },
    },
  },
});

export default theme;
