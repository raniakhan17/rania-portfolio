'use client';

import { useState } from 'react';
import { designWork } from '@/lib/portfolio-data';
import type { Project } from '@/lib/portfolio-data';
import { ProjectModal } from '@/components/ProjectModal';
import { cn } from '@/lib/utils';

const designImages: Record<string, string> = {
  mural: '/images/design/cohort-12-mural.png',
  ace: '/images/design/ace-racetrack.png',
  pltw: '/images/design/pltw-portfolio.png',
  art: '/images/design/ceramics.png',
};

const sliderImages = [
  { label: 'Lamp', src: '/images/design/lamp.png' },
  { label: 'TV', src: '/images/design/tv.png' },
  { label: 'Workshop', src: '/images/design/workshop.png' },
  { label: 'Mural Work', src: '/images/design/muralwork.png' },
  { label: 'Tote', src: '/images/design/tote.png' },
  { label: 'Cube', src: '/images/design/cube.png' },
  { label: 'Shoe', src: '/images/design/shoe.png' },
  { label: 'Lamp', src: '/images/design/lamp.png' },
  { label: 'TV', src: '/images/design/tv.png' },
  { label: 'Workshop', src: '/images/design/workshop.png' },
  { label: 'Mural Work', src: '/images/design/muralwork.png' },
  { label: 'Tote', src: '/images/design/tote.png' },
  { label: 'Cube', src: '/images/design/cube.png' },
  { label: 'Shoe', src: '/images/design/shoe.png' },
];

function makeDesignProject(item: (typeof designWork)[number]): Project {
  const image = designImages[item.thumb];

  return {
    title: item.title,
    category: item.tag,
    description: item.description,
    process: item.description,
    variant: item.thumb,
    image,
    tags: [item.tag],
    links: item.links
      .filter((link) => link.startsWith('http'))
      .map((link) => ({
        label: 'Open details',
        href: link,
      })),
  };
}

export function DesignSection() {
  const [activeDesign, setActiveDesign] = useState<Project | null>(null);

  return (
    <section className="panel" id="design">
      <div className="design-list">
        {designWork.map((item) => {
          const imageSrc = designImages[item.thumb];
          const designProject = makeDesignProject(item);

          return (
            <button
              className="design-row design-click-card"
              key={item.title}
              type="button"
              onClick={() => setActiveDesign(designProject)}
            >
              <div className={cn('design-thumb design-image-thumb', item.thumb)}>
                {imageSrc ? (
                  <img src={imageSrc} alt={`${item.title} preview`} />
                ) : null}
              </div>

              <div className="design-copy">
                <p className="eyebrow">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="links">
                  <span>Open details →</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <section className="design-slider-section" aria-label="Design image slider">
        <div className="design-slider-heading">
          <h3>Artifacts & Experiments</h3>
          <p>A sliding strip for process shots, prototypes, product photos, and visual experiments.</p>
        </div>

        <div className="design-slider">
          <div className="slider-track">
            {sliderImages.map((item, index) => (
              <figure className={`slide-card slide-${(index % 4) + 1}`} key={`${item.label}-${index}`}>
                <span>
                  <img src={item.src} alt={`${item.label} artifact`} />
                </span>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={activeDesign} onClose={() => setActiveDesign(null)} />
    </section>
  );
}
