'use client';

import { useState } from 'react';
import type { Project } from '@/lib/portfolio-data';
import { builds, patents } from '@/lib/portfolio-data';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const consulting = builds.filter((project) => project.category === 'Consulting');
  const selectedBuilds = builds.filter((project) => project.category !== 'Consulting');

  return (
    <section className="panel active" id="projects">
      <section className="section-block">
        <div className="section-title">
          <p>inventions</p>
          <h2>Patents</h2>
        </div>

        <div className="grid three">
          {patents.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={setActiveProject}
            />
          ))}
        </div>
      </section>

      <section className="section-block consulting-block">
        <div className="section-title">
          <p>selected consulting</p>
          <h2>Consulting</h2>
        </div>

        <div className="consulting-slider" aria-label="Consulting projects">
          {consulting.map((project) => (
            <div className="consulting-slide" key={project.title}>
              <ProjectCard project={project} onClick={setActiveProject} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-title">
          <p>selected work</p>
          <h2>Selected Builds</h2>
        </div>

        <div className="grid">
          {selectedBuilds.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={setActiveProject}
            />
          ))}
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}