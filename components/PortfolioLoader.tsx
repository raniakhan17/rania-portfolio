'use client';

import { useEffect, useRef, useState } from 'react';

const TOTAL_DURATION = 2000;
const FADE_DURATION = 300;
const HEX_CHARS = '0123456789ABCDEF';

export default function PortfolioLoader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const enterTimer = window.setTimeout(() => {
      setHasEntered(true);
    }, 50);

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, TOTAL_DURATION - FADE_DURATION);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, TOTAL_DURATION);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const canvasMaybe = canvasRef.current;
    if (!canvasMaybe) return;

    const canvasEl = canvasMaybe;

    const ctxMaybe = canvasEl.getContext('2d');
    if (!ctxMaybe) return;

    const ctx = ctxMaybe;

    let animationFrame = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvasEl.width = Math.floor(window.innerWidth * dpr);
      canvasEl.height = Math.floor(window.innerHeight * dpr);
      canvasEl.style.width = `${window.innerWidth}px`;
      canvasEl.style.height = `${window.innerHeight}px`;
    }

    function render(time: number) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (
        canvasEl.width !== Math.floor(width * dpr) ||
        canvasEl.height !== Math.floor(height * dpr)
      ) {
        resizeCanvas();
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctx.scale(dpr, dpr);

      ctx.fillStyle = 'rgba(0, 0, 0, 0.97)';
      ctx.fillRect(0, 0, width, height);

      const cellSize = width < 640 ? 10 : 8;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `600 ${cellSize * 0.75}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

      const centerX = width / 2;
      const centerY = height / 2;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * cellSize + cellSize / 2;
          const py = y * cellSize + cellSize / 2;

          const dx = (px - centerX) / width;
          const dy = (py - centerY) / height;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const wave =
            Math.sin(time * 0.003 + x * 0.33 + y * 0.21) * 0.5 + 0.5;

          const diagonal =
            Math.sin((x + y) * 0.18 + time * 0.002) * 0.5 + 0.5;

          const ring =
            Math.sin(dist * 34 - time * 0.003) * 0.5 + 0.5;

          const intensity =
            0.18 + wave * 0.3 + diagonal * 0.22 + ring * 0.3;

          const fadeFromCenter = Math.max(0, 1 - dist * 1.85);
          const alpha = Math.min(0.75, intensity * (0.25 + fadeFromCenter * 0.75));

          const charIndex = Math.floor((wave * 0.55 + ring * 0.45) * (HEX_CHARS.length - 1));
          const char = HEX_CHARS[charIndex];

          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fillText(char, px, py);

          if ((x + y) % 5 === 0) {
            ctx.fillStyle = `rgba(255,255,255,${alpha * 0.08})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.18,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.78
      );

      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.48)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255,255,255,0.86)';
      ctx.font = '500 clamp(32px, 5vw, 64px) system-ui, -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Rania Khan', width / 2, height / 2 - 8);

      ctx.fillStyle = 'rgba(255,255,255,0.42)';
      ctx.font = '600 11px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.fillText('PORTFOLIO LOADING', width / 2, height / 2 + 44);

      animationFrame = window.requestAnimationFrame(render);
    }

    resizeCanvas();
    animationFrame = window.requestAnimationFrame(render);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: '#000',
        opacity: isExiting ? 0 : hasEntered ? 1 : 0,
        transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        pointerEvents: 'auto',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
