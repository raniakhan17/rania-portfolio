'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '@/lib/portfolio-data';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!mounted || !project) {
    return null;
  }

  return createPortal(
    <div className="project-modal" role="dialog" aria-modal="true">
      <button
        className="modal-backdrop"
        type="button"
        aria-label="Close project modal"
        onClick={onClose}
      />

      <article className="modal-card">
        <button className="modal-close" type="button" onClick={onClose}>
          ×
        </button>

        {project.image ? (
          <div className="modal-image-wrap">
            <img src={project.image} alt={`${project.title} preview`} />
          </div>
        ) : null}

        <div className="modal-content">
          <p className="modal-kicker">{project.category}</p>
          <h2>{project.title}</h2>

          {project.tags && project.tags.length > 0 ? (
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}

          <p className="modal-description">{project.description}</p>

          <div className="modal-process">
            <p>{project.process}</p>
          </div>

          {project.links && project.links.length > 0 ? (
            <div className="modal-actions">
              {project.links.map((link) => (
                <a
                  className="modal-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${link.label}-${link.href}`}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </div>,
    document.body
  );
}
