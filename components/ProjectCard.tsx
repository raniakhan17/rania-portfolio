'use client';

import type { Project } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article className="card">
      <button
        className={cn('media project-media', project.variant)}
        onClick={() => onClick(project)}
        type="button"
      >
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : null}

        <span className="pill">
          <b>{project.title}</b>
          <em> • {project.category}</em>
        </span>
      </button>

      <p className="caption">{project.description}</p>
    </article>
  );
}