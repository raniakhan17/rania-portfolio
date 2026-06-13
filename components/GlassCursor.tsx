'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

export function GlassCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });

      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest(
        'a, button, img, .media, .project-media, .design-thumb, .slide-card, .about-photo, .community-image-icon, .modal-card'
      );

      setActive(Boolean(isInteractive));
    }

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div
      className={`glass-cursor ${active ? 'active' : ''}`}
      style={
        {
          '--cursor-x': `${position.x}px`,
          '--cursor-y': `${position.y}px`,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
