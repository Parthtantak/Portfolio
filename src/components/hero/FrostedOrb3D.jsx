import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FrostedOrb3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = 340);
    let height = (canvas.height = 340);

    let rotationAngle = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.15;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Floating particles inside/around orb
    const particles = Array.from({ length: 24 }, () => ({
      x: (Math.random() - 0.5) * 160,
      y: (Math.random() - 0.5) * 160,
      z: (Math.random() - 0.5) * 160,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.01 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const centerX = width / 2 + mouseX;
      const centerY = height / 2 + mouseY;
      const radius = 90;

      rotationAngle += 0.008;

      // 1. Ambient Outer Glass Glow
      const ambientGlow = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.6);
      ambientGlow.addColorStop(0, 'rgba(222, 100, 48, 0.18)');
      ambientGlow.addColorStop(0.5, 'rgba(255, 180, 120, 0.08)');
      ambientGlow.addColorStop(1, 'rgba(222, 100, 48, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // 2. Main Frosted Glass Sphere Body
      const glassGradient = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.35,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      glassGradient.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      glassGradient.addColorStop(0.3, 'rgba(250, 240, 230, 0.45)');
      glassGradient.addColorStop(0.75, 'rgba(222, 100, 48, 0.25)');
      glassGradient.addColorStop(1, 'rgba(30, 30, 35, 0.15)');

      ctx.fillStyle = glassGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Thin Specular Glass Rim & Border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 4. Floating Particles Inside/Around Orb
      particles.forEach((p) => {
        p.x += Math.cos(rotationAngle + p.z) * 0.4;
        p.y += Math.sin(rotationAngle + p.z) * 0.4;
        const px = centerX + p.x;
        const py = centerY + p.y;

        const dist = Math.hypot(p.x, p.y);
        if (dist < radius * 0.85) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(rotationAngle * 2 + p.z) * 0.3})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 5. Thin Orbit Ring (Tilted 3D Ring around sphere)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 0.5);
      ctx.scale(1, 0.35); // 3D tilt perspective

      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.45, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(222, 100, 48, 0.65)';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Orbiting Ring Satellite Node
      const nodeAngle = rotationAngle * 1.5;
      const nodeX = Math.cos(nodeAngle) * (radius * 1.45);
      const nodeY = Math.sin(nodeAngle) * (radius * 1.45);

      ctx.fillStyle = '#de6430';
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();

      // 6. Top Specular Reflection Highlight (Vision Pro Glass Glare)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.beginPath();
      ctx.ellipse(centerX - radius * 0.28, centerY - radius * 0.32, radius * 0.35, radius * 0.16, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center select-none pointer-events-none"
    >
      <canvas ref={canvasRef} className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] drop-shadow-2xl" />
    </motion.div>
  );
};
