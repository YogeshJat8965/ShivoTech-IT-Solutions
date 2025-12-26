import React, { useState, useEffect } from 'react';
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
  useMediaQuery,
  Chip
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
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
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

const drawerList = (
  <Box 
    sx={{ 
      width: 280, 
      height: '100%',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      color: '#fff'
    }} 
    role="presentation"
  >
    <Box 
      sx={{
        p: 3,
        borderBottom: '1px solid rgba(62, 196, 185, 0.2)',
        background: 'rgba(62, 196, 185, 0.05)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ color: '#3EC4B9', fontWeight: 700 }}>
          ShivoTech
        </Typography>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: '#3EC4B9' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Chip 
        icon={<RocketLaunchIcon sx={{ fontSize: 16 }} />}
        label="Let's Build Together"
        size="small"
        sx={{
          background: 'rgba(62, 196, 185, 0.2)',
          color: '#3EC4B9',
          border: '1px solid rgba(62, 196, 185, 0.3)',
          fontWeight: 600,
        }}
      />
    </Box>
    <List sx={{ px: 2, py: 3 }}>
      {pages.map((page, index) => (
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
          sx={{
            borderRadius: 2,
            mb: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(62, 196, 185, 0.1)',
              transform: 'translateX(8px)',
            }
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              bgcolor: '#3EC4B9',
              mr: 2,
            }}
          />
          <ListItemText 
            primary={page.label}
            primaryTypographyProps={{
              fontWeight: 600,
              color: '#E2E8F0'
            }}
          />
        </ListItem>
      ))}
    </List>
    <Box sx={{ px: 3, mt: 'auto', pb: 3 }}>
      <Box sx={{ 
        p: 2, 
        borderRadius: 2, 
        background: 'rgba(62, 196, 185, 0.1)',
        border: '1px solid rgba(62, 196, 185, 0.2)',
      }}>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', mb: 1 }}>
          Quick Contact
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <PhoneIcon sx={{ fontSize: 16, color: '#3EC4B9' }} />
          <Typography variant="body2" sx={{ color: '#3EC4B9', fontWeight: 600 }}>
            +91 9876543210
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon sx={{ fontSize: 16, color: '#3EC4B9' }} />
          <Typography variant="body2" sx={{ color: '#3EC4B9', fontWeight: 600 }}>
            info@shivotech.com
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);


  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? 'none' : '1px solid rgba(62, 196, 185, 0.1)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(62, 196, 185, 0.15)' : 'none',
      }}
    >
      <Toolbar sx={{ 
        maxWidth: 1400, 
        mx: "auto", 
        width: "100%", 
        justifyContent: 'space-between',
        py: { xs: 0.5, md: scrolled ? 0.3 : 0.8 },
        minHeight: { xs: 56, md: scrolled ? 60 : 70 },
        transition: 'all 0.3s ease',
      }}>
        {/* Logo / Brand */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }} 
          onClick={() => navigate("/")}
        >
          <img 
            src={logo} 
            alt="ShivoTech IT Solutions Logo" 
            style={{ 
              width: scrolled ? 90 : 100, 
              height: scrolled ? 60 : 70, 
              padding: 5,
              transition: 'all 0.3s ease',
            }}  
          />
        </Box>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => {
                  if (page.link.startsWith("/")) {
                    navigate(page.link);
                  } else {
                    const section = document.querySelector(page.link);
                    section?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  color: '#1E293B',
                  mx: 0.5,
                  px: 2.5,
                  py: 1,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  position: 'relative',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#3EC4B9',
                    background: 'rgba(62, 196, 185, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '3px',
                    background: '#3EC4B9',
                    transition: 'width 0.3s ease',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px #3EC4B9',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
            
            {/* CTA Button */}
            <Button
              variant="contained"
              href="#contact"
              startIcon={<RocketLaunchIcon />}
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                background: 'linear-gradient(135deg, #3EC4B9 0%, #2A9D8F 100%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(62, 196, 185, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #2A9D8F 0%, #238276 100%)',
                  boxShadow: '0 6px 25px rgba(62, 196, 185, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton 
              edge="end" 
              onClick={toggleDrawer(true)}
              sx={{
                color: '#3EC4B9',
                background: 'rgba(62, 196, 185, 0.1)',
                '&:hover': {
                  background: 'rgba(62, 196, 185, 0.2)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer 
              anchor="right" 
              open={drawerOpen} 
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  background: 'transparent',
                  boxShadow: 'none',
                }
              }}
            >
              {drawerList}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
