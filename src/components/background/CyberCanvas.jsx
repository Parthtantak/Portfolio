import React, { useEffect, useRef } from 'react';

export const CyberCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Calm, slow ambient background mesh nodes
    const nodes = [
      { x: width * 0.25, y: height * 0.2, r: 450, dx: 0.15, dy: 0.1, color: 'rgba(222, 100, 48, 0.04)' },
      { x: width * 0.75, y: height * 0.5, r: 500, dx: -0.1, dy: 0.15, color: 'rgba(120, 140, 180, 0.03)' },
      { x: width * 0.4, y: height * 0.8, r: 480, dx: 0.1, dy: -0.1, color: 'rgba(222, 100, 48, 0.03)' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;

        if (node.x < -150 || node.x > width + 150) node.dx *= -1;
        if (node.y < -150 || node.y > height + 150) node.dy *= -1;

        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r);
        grad.addColorStop(0, node.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
    />
  );
};
