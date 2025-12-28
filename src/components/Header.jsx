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
import logo from "../assets/images/logo.png";
import { color } from 'framer-motion';

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Our Work", link: "/our-work" },
  { label: "Contact", link: "/contact" },
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
      width: '100vw', 
      height: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1E40AF 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(62, 196, 185, 0.15) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
        animation: 'breathe 8s ease-in-out infinite',
      },
      '@keyframes breathe': {
        '0%, 100%': { opacity: 0.5 },
        '50%': { opacity: 1 },
      },
    }} 
    role="presentation"
  >
    <Box 
      sx={{
        p: 3,
        borderBottom: '1px solid rgba(62, 196, 185, 0.2)',
        background: 'rgba(62, 196, 185, 0.05)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Box 
          sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
          onClick={() => {
            setDrawerOpen(false);
            navigate('/');
          }}
        >
          <img 
            src={logo} 
            alt="ShivoTech" 
            style={{ width: 50, height: 50 }}
          />
          <Typography variant="h6" sx={{ color: '#3EC4B9', fontWeight: 700 }}>
            ShivoTech
          </Typography>
        </Box>
        <IconButton 
          onClick={toggleDrawer(false)} 
          sx={{ 
            color: '#3EC4B9',
            background: 'rgba(62, 196, 185, 0.1)',
            '&:hover': {
              background: 'rgba(62, 196, 185, 0.2)',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
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
    <List sx={{ px: 3, py: 3, position: 'relative', zIndex: 1 }}>
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
            borderRadius: 0,
            mb: 0.5,
            py: 1,
            transition: 'all 0.3s ease',
            animation: `slideInRight 0.5s ease-out ${index * 0.1}s backwards`,
            '@keyframes slideInRight': {
              '0%': {
                opacity: 0,
                transform: 'translateX(50px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(0)',
              },
            },
            '&:hover': {
              background: 'rgba(62, 196, 185, 0.15)',
              transform: 'translateX(10px)',
              boxShadow: '0 4px 15px rgba(62, 196, 185, 0.2)',
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
              fontSize: '1.1rem',
              color: '#E2E8F0'
            }}
          />
        </ListItem>
      ))}
    </List>
    <Box sx={{ px: 3, mt: 'auto', pb: 4, position: 'relative', zIndex: 1 }}>
      <Box sx={{ 
        p: 2, 
        borderRadius: 0, 
        background: 'rgba(62, 196, 185, 0.1)',
        border: '1px solid rgba(62, 196, 185, 0.2)',
      }}>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', mb: 1 }}>
          Quick Contact
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <PhoneIcon sx={{ fontSize: 16, color: '#3EC4B9' }} />
          <Typography variant="body2" sx={{ color: '#3EC4B9', fontWeight: 600 }}>
            +91 78050 58023
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon sx={{ fontSize: 16, color: '#3EC4B9' }} />
          <Typography variant="body2" sx={{ color: '#3EC4B9', fontWeight: 600 }}>
            shivotechit@gmail.com 
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);


  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 1}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(62, 196, 185, 0.1)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(62, 196, 185, 0.15)' 
          : '0 1px 3px rgba(0, 0, 0, 0.05)',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        borderRadius: { xs: 0, md: 0 },
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
            gap: 1.5,
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }} 
          onClick={() => {
            navigate('/');
          }}
        >
          <img 
            src={logo} 
            alt="ShivoTech IT Solutions Logo" 
            style={{ 
              width: 100, 
              height: 100, 
              padding: 5,
              transition: 'all 0.3s ease',
            }}  
          />
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { sm: scrolled ? '1.1rem' : '1.2rem', md: scrolled ? '1.5rem' : '1.5rem' },
                transition: 'all 0.3s ease',
                lineHeight: 1.2,
                mb: -0.5,
              }}
            >
              <span style={{ color: '#092e5c' }}>Shivo</span>
              <span style={{ color: '#3EC4B9' }}>Tech</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                fontSize: { sm: '0.7rem', md: scrolled ? '0.75rem' : '0.8rem' },
                color: '#64748B',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
              }}
            >
              IT Solutions
            </Typography>
          </Box>
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
              onClick={() => navigate('/contact')}
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
                  width: '100%',
                  borderRadius: 0,
                }
              }}
              transitionDuration={{
                enter: 400,
                exit: 300,
              }}
              SlideProps={{
                direction: 'left',
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
