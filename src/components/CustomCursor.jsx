import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let particleId = 0;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create particle trail
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          color: Math.random() > 0.5 ? '#F59E0B' : '#1E40AF',
          opacity: 1,
        };
        
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.style.cursor === 'pointer') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Remove old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter(p => p.opacity > 0));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Particle Trail */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'fixed',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: particle.color,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998,
            animation: 'particleFade 0.8s ease-out forwards',
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            '@keyframes particleFade': {
              '0%': {
                opacity: 0.8,
                transform: 'translate(-50%, -50%) scale(1)',
              },
              '100%': {
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(0.3)',
              },
            },
          }}
        />
      ))}

      {/* Main Cursor */}
      <Box
        sx={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? 50 : 35,
          height: isHovering ? 50 : 35,
          borderRadius: '50%',
          border: '2px solid',
          borderColor: isHovering ? '#F59E0B' : 'rgba(30, 64, 175, 0.6)',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(30, 64, 175, 0.15) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease',
          mixBlendMode: 'difference',
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* Inner dot */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: isHovering ? 8 : 6,
            height: isHovering ? 8 : 6,
            borderRadius: '50%',
            background: isHovering 
              ? 'linear-gradient(135deg, #F59E0B, #EF4444)' 
              : 'linear-gradient(135deg, #1E40AF, #8B5CF6)',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease',
            boxShadow: isHovering 
              ? '0 0 20px rgba(245, 158, 11, 0.8)'
              : '0 0 15px rgba(30, 64, 175, 0.6)',
          }}
        />
      </Box>

      {/* Secondary trailing circle */}
      <Box
        sx={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHovering ? 65 : 50,
          height: isHovering ? 65 : 50,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: 'rgba(139, 92, 246, 0.3)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9997,
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': {
              opacity: 0.5,
              transform: 'translate(-50%, -50%) scale(1)',
            },
            '50%': {
              opacity: 0.8,
              transform: 'translate(-50%, -50%) scale(1.1)',
            },
          },
        }}
      />
    </>
  );
};

export default CustomCursor;
