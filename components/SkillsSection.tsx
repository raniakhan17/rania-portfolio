'use client';

import { useState, type CSSProperties } from 'react';

// Edit these lists to reflect the skills you want to feature.
const skillGroups = [
  { title: 'Product & Strategy', color: '#6b9dce', skills: ['User research', 'Product strategy', 'Human-centered design', 'Pitch storytelling', 'Business development'] },
  { title: 'Product Development & Design', color: '#6b9dce', skills: ['Figma', 'Rhino', 'AutoCAD', 'Revit', 'Procreate', 'Adobe Creative Suite'] },
  { title: 'Build & Prototype', color: '#6b9dce', skills: ['Python', 'HTML/CSS', 'Data Visualization', 'C++', 'SQL', 'AI', 'Hardware'] },
  { title: 'Growth & GTM', color: '#6b9dce', skills: ['GTM strategy', 'Clay', 'Notion', 'Excel', 'Content strategy'] },
];

export default function SkillsSection() {
  const [opened, setOpened] = useState<string | null>(null);

  return (
    <section className="ssf-skills-section" aria-labelledby="skills-title">
      <header className="section-title ssf-skills-header">
        <p>my toolkit</p>
        <h2 id="skills-title">Skills</h2>
        <span className="ssf-skills-intro">From research and product strategy to design, code, and launch.</span>
      </header>
      <div className="ssf-skills-folders">
        {skillGroups.map((group, index) => {
          const expanded = opened === group.title;
          const panelId = `skill-folder-${index}`;
          return (
            <article className={`ssf-skill-group ${expanded ? 'ssf-is-open' : ''}`} key={group.title} style={{ '--folder-color': group.color } as CSSProperties}>
              <button className="ssf-skill-folder-button" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpened(expanded ? null : group.title)}>
                <span className="ssf-folder-scene" aria-hidden="true">
                  <span className="ssf-folder-back" />
                  <span className="ssf-folder-tab" />
                  {group.skills.slice(0, 3).map((skill, cardIndex) => (
                    <span className={`ssf-folder-paper ssf-paper-${cardIndex}`} key={skill}>
                      <span className="ssf-paper-number">0{cardIndex + 1}</span>
                      <span className="ssf-paper-skill">{skill}</span>
                      <span className="ssf-paper-line" /><span className="ssf-paper-line short" />
                    </span>
                  ))}
                  <span className="ssf-folder-front"><span className="ssf-folder-mark">{['strategy', 'design', 'build', 'growth'][index]}</span></span>
                </span>
                <span className="ssf-folder-label">{group.title}</span>
              </button>
              <div id={panelId} className="ssf-folder-details" hidden={!expanded}>
                <ul aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
      <style jsx>{`
        .ssf-skills-section { grid-column: 1 / -1; width: 100%; min-width: 0; color: var(--foreground, #374151); }
        .ssf-skills-header { margin-bottom: 28px; }
        .ssf-skills-header h2 { margin: 0; font-size: 28px; line-height: 1.2; }
        .ssf-skills-header p { margin: 0 0 8px; font-size: 12px; }
        .ssf-skills-intro { display: block; margin-top: 12px; font-size: 15px; line-height: 1.6; }
        .ssf-skills-folders { display: grid; grid-template-columns: repeat(4, minmax(230px, 1fr)); gap: 18px; align-items: start; overflow-x: auto; padding: 6px 5px 18px; scroll-snap-type: x proximity; scrollbar-width: thin; }
        .ssf-skill-group { scroll-snap-align: start; width: 100%; min-width: 0; overflow: hidden; background: var(--background, #fff); border: 1px solid var(--line, #eceef1); border-radius: 24px; transition: box-shadow 250ms, border-color 250ms; }
        .ssf-skill-group:hover, .ssf-skill-group:focus-within, .ssf-skill-group.ssf-is-open { border-color: var(--folder-color); box-shadow: 0 12px 28px #00000008; }
        .ssf-skill-folder-button { display: flex; flex-direction: column; align-items: center; width: 100%; padding: 24px 20px 26px; border: 0; border-radius: 24px; font: inherit; color: inherit; background: transparent; cursor: pointer; }
        .ssf-skill-folder-button:focus-visible { outline: 3px solid var(--folder-color); outline-offset: 4px; }
        .ssf-folder-scene { display: block; position: relative; width: 200px; max-width: 100%; flex-shrink: 0; height: 188px; perspective: 800px; }
        .ssf-folder-back { position: absolute; top: 72px; left: calc(50% - 68px); width: 136px; height: 96px; background: var(--folder-color); filter: brightness(.87); border-radius: 10px; }
        .ssf-folder-tab { position: absolute; top: 61px; left: calc(50% - 55px); width: 49px; height: 22px; background: var(--folder-color); filter: brightness(.87); border-radius: 8px 8px 0 0; }
        .ssf-folder-front { display: grid; place-items: center; position: absolute; top: 78px; left: calc(50% - 68px); width: 136px; height: 96px; background: linear-gradient(135deg, #ffffff30, #ffffff00 70%), var(--folder-color); border: 1px solid #ffffff44; border-radius: 10px; box-shadow: 0 8px 16px #00000012; transform-origin: bottom center; transition: transform 500ms cubic-bezier(.34,1.3,.64,1); z-index: 5; }
        .ssf-folder-mark { color: #ffffffeb; font-size: 11px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
        .ssf-folder-paper { position: absolute; top: 67px; left: calc(50% - 37px); display: flex; flex-direction: column; gap: 7px; width: 74px; height: 100px; padding: 10px 8px; background: #fffdfa; color: #374151; border: 1px solid #e7e5e2; border-radius: 7px; box-shadow: 0 4px 12px #00000014; transform: translateY(8px) scale(.78); transition: transform 550ms cubic-bezier(.34,1.3,.64,1); }
        .ssf-paper-0 { z-index: 3; }
        .ssf-paper-1 { z-index: 2; transition-delay: 50ms; }
        .ssf-paper-2 { z-index: 1; transition-delay: 100ms; }
        .ssf-paper-number { font: 10px 'Pixelify Sans', monospace; color: #8a929b; }
        .ssf-paper-skill { font-size: 10px; line-height: 1.3; font-weight: 600; }
        .ssf-paper-line { height: 3px; width: 100%; background: #e9e8e4; border-radius: 2px; }
        .ssf-paper-line.short { width: 60%; }
        .ssf-skill-folder-button:hover .ssf-folder-front, .ssf-skill-folder-button:focus-visible .ssf-folder-front, .ssf-is-open .ssf-folder-front { transform: rotateX(-28deg) translateY(7px); }
        .ssf-skill-folder-button:hover .ssf-paper-0, .ssf-skill-folder-button:focus-visible .ssf-paper-0, .ssf-is-open .ssf-paper-0 { transform: translate(-43px,-45px) rotate(-14deg); }
        .ssf-skill-folder-button:hover .ssf-paper-1, .ssf-skill-folder-button:focus-visible .ssf-paper-1, .ssf-is-open .ssf-paper-1 { transform: translate(0,-61px); }
        .ssf-skill-folder-button:hover .ssf-paper-2, .ssf-skill-folder-button:focus-visible .ssf-paper-2, .ssf-is-open .ssf-paper-2 { transform: translate(43px,-45px) rotate(14deg); }
        .ssf-folder-label { min-height: 44px; display: flex; align-items: center; margin-top: 13px; font-family: 'Manrope', sans-serif; font-size: 15px; line-height: 1.45; font-weight: 600; color: var(--primary, #111827); text-align: center; }
        .ssf-folder-details { padding: 0 18px 22px; }
        .ssf-folder-details ul { display: flex; flex-wrap: wrap; gap: 7px; margin: 0; padding: 0; list-style: none; }
        .ssf-folder-details li { border: 1px solid var(--line, #eceef1); border-radius: 9px; padding: 6px 9px; font-size: 12px; line-height: 1.4; }

        @media (prefers-reduced-motion: reduce) { .ssf-skill-group, .ssf-folder-front, .ssf-folder-paper { transition: none; } }
      `}</style>
    </section>
  );
}
