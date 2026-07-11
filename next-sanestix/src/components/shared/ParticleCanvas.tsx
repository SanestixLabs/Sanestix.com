'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    let animId: number;
    const mouse = { x: null as number | null, y: null as number | null, radius: 120 };

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      pulse: number;
    }

    const particles: Particle[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();

    function createParticle(): Particle {
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.4, opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      };
    }

    for (let i = 0; i < 90; i++) particles.push(createParticle());

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const c = '0,174,220';

      particles.forEach((p) => {
        p.pulse += 0.015;
        p.x += p.vx;
        p.y += p.vy;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const fdx = dx / dist;
            const fdy = dy / dist;
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += fdx * force * 3;
            p.y += fdy * force * 3;
          }
        }

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const op = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${c},${op})`;
        ctx!.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(${c},${(1 - dist / 130) * 0.12})`;
            ctx!.lineWidth = 0.7;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };
    const onTouchStart = (e: TouchEvent) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };
    const onTouchEnd = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="gravCanvas"
      aria-hidden="true"
    />
  );
}
