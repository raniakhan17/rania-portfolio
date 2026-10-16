'use client';

import { useRef, useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ProjectModal } from '@/components/ProjectModal';
import { designWork, type Project } from '@/lib/portfolio-data';

const designImages: Record<string, string> = {
  mural: '/images/design/cohort-12-mural.png',
  ace: '/images/design/ace-racetrack.png',
  pltw: '/images/design/pltw-portfolio.png',
  art: '/images/design/ceramics.png',
};

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


const experiments = [
  { title: 'Lamp', image: '/images/design/lamp.png' },
  { title: 'TV', image: '/images/design/tv.png' },
  { title: 'Workshop', image: '/images/design/workshop.png' },
  { title: 'Mural Work', image: '/images/design/muralwork.png' },
  { title: 'Tote', image: '/images/design/tote.png' },
  { title: 'Cube', image: '/images/design/cube.png' },
  { title: 'Sailing Shoe', image: '/images/design/shoe.png' },
];

function DesignSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const cards: Project[] = [
    ...designWork.map(makeDesignProject),

  ];
  function move(direction: number) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.current?.scrollBy({ left: direction * 324, behavior: reduced ? 'auto' : 'smooth' });
  }
  return (
    <section className="panel active design-archive" aria-labelledby="design-archive-title">
      <div className="archive-heading">
        <div className="section-title"><p>explorations</p><h2 id="design-archive-title">Design & Experiments</h2></div>
        <div className="archive-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous design projects">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next design projects">→</button>
        </div>
      </div>
      <div className="archive-track" ref={track} role="region" aria-label="Design projects and experiments" tabIndex={0}>
        {cards.map((project, index) => (
          <button className="archive-card" type="button" key={`${project.title}-${index}`} onClick={() => setActive(project)} aria-label={`View ${project.title}`}>
            <span className="archive-image"><img src={project.image} alt={project.title} loading="lazy" /></span>
            <span className="archive-label"><span>{project.title}</span><span aria-hidden="true">↗</span></span>
            <span className="archive-category">{project.category}</span>
          </button>
        ))}
      </div>
      <div className="experiment-strip" aria-label="Artifacts and experiments">
        <div className="experiment-track">
          {[0, 1].map((copy) => (
            <div className="experiment-group" key={copy} aria-hidden={copy === 1 ? true : undefined} inert={copy === 1 ? true : undefined}>
              {experiments.map((item) => (
                <button type="button" className="experiment-photo" key={item.title} onClick={() => setActive({ ...item, category: 'Experiment', description: '', process: '', variant: 'design-experiment' })} aria-label={`View ${item.title}`}>
                  <img src={item.image} alt={copy === 0 ? item.title : ''} loading="lazy" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
      <style jsx>{`
        .experiment-strip { margin-top: 40px; overflow: hidden; padding: 6px 0 20px; }
        .experiment-track { display: flex; width: max-content; animation: archivePhotoDrift 38s linear infinite; }
        .experiment-group { display: flex; gap: 24px; padding-right: 24px; }
        .experiment-photo { flex: 0 0 200px; width: 200px; padding: 0; text-align: left; color: var(--muted); background: transparent; }
        .experiment-photo img { display: block; width: 200px; height: 160px; object-fit: cover; border-radius: 16px; }
        .experiment-photo span { display: block; margin-top: 12px; font-size: 12px; }
        .experiment-strip:hover .experiment-track, .experiment-strip:focus-within .experiment-track { animation-play-state: paused; }
        .experiment-photo:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        @keyframes archivePhotoDrift { to { transform: translateX(-50%); } }
        @media(prefers-reduced-motion: reduce) {
          .experiment-track { animation: none; }
          .experiment-strip { overflow-x: auto; }
          .experiment-group[aria-hidden="true"] { display: none; }
        }
        .design-archive { padding-top: 16px; padding-bottom: 48px; }
        .archive-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 24px; }
        .archive-heading .section-title { margin-bottom: 0; }
        .archive-controls { display: flex; gap: 8px; }
        .archive-controls button { width: 36px; height: 36px; border-radius: 50%; background: var(--line, #f0f1f3); color: var(--primary); font-size: 18px; }
        .archive-track { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x proximity; padding: 4px 2px 20px; scrollbar-width: thin; }
        .archive-card { flex: 0 0 300px; min-width: 0; padding: 0; text-align: left; background: transparent; color: var(--primary); scroll-snap-align: start; }
        .archive-image { display: block; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 18px; background: transparent; }
        .archive-image img { width: 100%; height: 100%; object-fit: contain; display: block; transition: transform 300ms; }
        .archive-card:hover img { transform: scale(1.035); }
        .archive-label { display: flex; justify-content: space-between; gap: 12px; margin-top: 16px; font-size: 16px; line-height: 1.4; }
        .archive-category { display: block; margin-top: 6px; font-size: 12px; color: var(--muted); }
        .archive-card:focus-visible, .archive-controls button:focus-visible, .archive-track:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
        @media(max-width: 600px) { .archive-card { flex-basis: 78%; } .archive-heading h2 { font-size: 24px; } }
        @media(prefers-reduced-motion: reduce) { .archive-image img { transition: none; } .archive-card:hover img { transform: none; } }
      `}</style>
    </section>
  );
}

const tabs = ['Projects', 'About'] as const;
export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Projects');
  return (
    <>
      <section className="tab-wrap" aria-label="Portfolio sections">
        <div className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button className={`tab ${activeTab === tab ? 'active' : ''}`} key={tab} onClick={() => setActiveTab(tab)} type="button" role="tab" aria-selected={activeTab === tab}>{tab}</button>
          ))}
        </div>
      </section>
      <div className="rule" aria-hidden="true" />
      {activeTab === 'Projects' && <><ProjectsSection /><DesignSlider /></>}
      {activeTab === 'About' && <AboutSection />}
    </>
  );
}
