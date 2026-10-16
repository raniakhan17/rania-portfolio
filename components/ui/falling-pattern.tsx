'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Drop-in replacement for the header's existing FallingPattern component.
export function FallingPattern() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = document.querySelector('.hero');
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, last = 0, active = true;
    let dark = document.documentElement.classList.contains('dark');
    const trails: { x: number; y: number; life: number }[] = [];
    const symbols = ' .·:+x*#';
    let clock = 0;

    function paint() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.font = '11px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      const step = width < 600 ? 19 : 16;
      for (let y = step / 2; y < height; y += step) {
        for (let x = step / 2; x < width; x += step) {
          const nx = x / Math.max(width, 1), ny = y / Math.max(height, 1);
          const wave = Math.sin(nx * 12 + Math.sin(ny * 7 + clock * .3) * 2 + clock * .22);
          const ribbon = Math.exp(-Math.pow(ny - (.45 + wave * .24), 2) / .015);
          const edge = Math.min(1, Math.min(nx, 1 - nx) * 8) * Math.min(1, Math.min(ny, 1 - ny) * 8);
          // Leave a quieter band behind the main welcome text.
          const quiet = .45 + .55 * Math.min(1, Math.abs(ny - .68) * 4);
          let ink = ribbon * .5;
          for (const trail of trails) {
            const dx = x - trail.x - Math.sin(clock + y * .015) * (1 - trail.life) * 24;
            const dy = y - trail.y;
            ink += Math.exp(-(dx * dx + dy * dy) / 2800) * trail.life * .8;
          }
          ink = Math.min(1, ink) * edge;
          if (ink < .035) continue;
          const glyph = symbols[Math.min(symbols.length - 1, Math.floor(ink * (symbols.length - 1)) + 1)];
          ctx.fillStyle = dark ? `rgba(145,185,220,${ink * (y < heroBottom ? .3 : .13) * quiet})` : `rgba(53,99,138,${ink * (y < heroBottom ? .23 : .11) * quiet})`;
          ctx.fillText(glyph, x, y);
        }
      }
    }

    function tick(now: number) {
      if (active && !document.hidden && now - last >= 40) {
        const dt = Math.min((now - last) / 1000, .06);
        last = now;
        if (!motion.matches) {
          clock += dt;
          trails.forEach(trail => { trail.life -= dt * .55; });
          while (trails.length && trails[0].life <= 0) trails.shift();
          paint();
        }
      }
      frame = requestAnimationFrame(tick);
    }

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint();
    }
    function pointer(event: Event) {
      if (motion.matches || !canvas) return;
      const e = event as PointerEvent;
      const rect = canvas.getBoundingClientRect();
      trails.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, life: 1 });
      if (trails.length > 18) trails.shift();
    }
    function preference() { trails.length = 0; paint(); }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const themeObserver = new MutationObserver(() => { dark = document.documentElement.classList.contains('dark'); paint(); });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('pointermove', pointer, { passive: true });
    motion.addEventListener('change', preference);
    resize();
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect(); themeObserver.disconnect();
      window.removeEventListener('pointermove', pointer);
      motion.removeEventListener('change', preference);
    };
  }, [mounted]);

  if (!mounted) return null;
  return createPortal(
    <div className="welcome-ascii" aria-hidden="true">
      <canvas ref={canvasRef} />
      <style jsx>{`
        .welcome-ascii { position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        :global(.page) { position: relative; z-index: 1; }
        :global(.hero), :global(.dark .hero) { background: transparent; }
        canvas { display: block; width: 100%; height: 100%; }
      `}</style>
    </div>, document.body
  );
}

export default FallingPattern;
