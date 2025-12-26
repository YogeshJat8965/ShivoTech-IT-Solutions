import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/ShivoTech IT Solutions.png";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Services", link: "#services" },
  // { label: "Blog", link: "#blog" },
  { label: "Contact", link: "#contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

const drawerList = (
  <Box sx={{ width: 250, p: 2 }} role="presentation">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700 }}>
        ShivoTech IT Solutions
      </Typography>
      <IconButton onClick={toggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
    </Box>
    <List>
      {pages.map((page) => (
        <ListItem
          button
          key={page.label}
          onClick={() => {
            setDrawerOpen(false);
            if (page.link.startsWith("/")) {
              navigate(page.link);
            } else {
              const section = document.querySelector(page.link);
              section?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ListItemText primary={page.label} />
        </ListItem>
      ))}
    </List>
  </Box>
);


  return (
    <AppBar position="sticky" elevation={2} sx={{ bgcolor: '#ffffff', color: '#333' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate("/")}>
          <img src={logo} alt="ShivoTech IT Solutions Logo" style={{ width: 110, height: 80, padding: 5}}  />
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box>
{pages.map((page) => (
  <Button
    key={page.label}
    onClick={() => {
      if (page.link.startsWith("/")) {
        navigate(page.link); // Internal route
      } else {
        const section = document.querySelector(page.link);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }}
    sx={{
      color: 'secondary.main',
      mx: 1,
      fontWeight: 600,
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: '3px',
        backgroundColor: 'secondary.main',
        transition: 'width 0.3s ease',
      },
      '&:hover': {
        color: 'primary.main',
        backgroundColor: 'rgba(30, 64, 175, 0.04)',
      },
      '&:hover::after': {
        width: '100%',
      },
    }}
  >
    {page.label}
  </Button>
))}

          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
