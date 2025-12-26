import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let particleId = 0;

    const updateMousePosition = (e) => {
      // 🔒 CRITICAL FIX: Constrain mouse position to viewport bounds
      const constrainedX = Math.min(Math.max(0, e.clientX), window.innerWidth - 10);
      const constrainedY = Math.min(Math.max(0, e.clientY), window.innerHeight - 10);
      
      setMousePosition({ x: constrainedX, y: constrainedY });

      // Create particle trail
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleId++,
          x: constrainedX,
          y: constrainedY,
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
            animation: 'particleFade 1.6s ease-out forwards',
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
    </>
  );
};

export default CustomCursor;
