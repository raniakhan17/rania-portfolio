'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export function GlassCursor() {
  const [mounted, setMounted] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const element = dot.current;
    if (!element) return;
    const root = document.documentElement;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    let x = -100, y = -100, hasPointer = false;
    function hide() {
      hasPointer = false;
      root.removeAttribute('data-glass-pointer');
      if (element) element.style.opacity = '0';
    }
    function move(event: PointerEvent) {
      if (!element || !fine.matches || event.pointerType === 'touch') return;
      x = event.clientX; y = event.clientY; hasPointer = true;
      element.style.setProperty('--glass-x', `${x}px`);
      element.style.setProperty('--glass-y', `${y}px`);
      element.style.opacity = '1';
      root.setAttribute('data-glass-pointer', 'ready');
    }
    function press() { element?.classList.add('pressed'); }
    function release() { element?.classList.remove('pressed'); }
    function leave(event: PointerEvent) { if (!event.relatedTarget) hide(); }
    function focus() { if (hasPointer && element) element.style.opacity = '1'; }
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', move, { passive: true });
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    window.addEventListener('pointerout', leave);
    window.addEventListener('blur', hide);
    window.addEventListener('focus', focus);
    fine.addEventListener('change', hide);
    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', move);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', hide);
      window.removeEventListener('focus', focus);
      fine.removeEventListener('change', hide);
    };
  }, [mounted]);

  if (!mounted) return null;
  return createPortal(
    <>
      <div ref={dot} className="portfolio-glass-pointer" aria-hidden="true" />
      <style jsx global>{`
        .portfolio-glass-pointer {
          position: fixed; top: 0; left: 0; width: 24px; height: 24px;
          transform: translate3d(calc(var(--glass-x, -100px) - 50%), calc(var(--glass-y, -100px) - 50%), 0);
          border-radius: 50%; border: 1px solid rgba(120, 130, 145, .75);
          background: rgba(160, 175, 195, .16);
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, .3), 0 1px 7px rgba(0, 0, 0, .1);
          backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);
          pointer-events: none !important; z-index: 2147483647; opacity: 0;
          transition: width 120ms, height 120ms, background 120ms;
        }
        .portfolio-glass-pointer.pressed { width: 20px; height: 20px; background: rgba(160, 175, 195, .28); }
        .dark .portfolio-glass-pointer { border-color: rgba(255,255,255,.75); background: rgba(255,255,255,.12); }
        @media (hover: hover) and (pointer: fine) {
          html[data-glass-pointer="ready"], html[data-glass-pointer="ready"] body,
          html[data-glass-pointer="ready"] body * { cursor: none !important; }
        }
        @media (prefers-reduced-motion: reduce) { .portfolio-glass-pointer { transition: none; } }
      `}</style>
    </>, document.body
  );
}
