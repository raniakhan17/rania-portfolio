'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const assets = '/images/design/mural';

export function MuralCaseStudy({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const card = useRef<HTMLElement>(null);
  const close = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const elements = card.current?.querySelectorAll<HTMLElement>('button, a[href], video[controls], [tabindex="0"]');
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKey);
      previousFocus?.focus();
    };
  }, [onClose]);

  useEffect(() => { if (mounted) close.current?.focus(); }, [mounted]);
  if (!mounted) return null;

  return createPortal(
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="mural-title">
      <button className="modal-backdrop" type="button" aria-label="Close Mural" onClick={onClose} />
      <article className="modal-card mural-case" ref={card}>
        <button className="modal-close" type="button" ref={close} onClick={onClose} aria-label="Close Mural">×</button>
        <div className="modal-content">
          <p className="modal-kicker">USC Iovine and Young Academy · Cohort 12</p>
          <h2 id="mural-title">Cohort 12 Mural</h2>
          <div className="modal-tags"><span>Art Director &amp; Project Manager</span><span>30-foot mural</span><span>Visual Storytelling</span></div>
          <p className="modal-description">A 30-foot mural connecting our cohort’s cultural roots with the futures we hope to build. As Art Director and Project Manager, I helped shape a shared visual identity around time, space, and one central message: for IYA, the time is NOW.</p>
          <figure><img src="/images/design/cohort-12-mural.png" alt="Cohort 12 mural bringing together time, space, and the Academy’s shared identity" /></figure>
          <section>
            <p className="mural-eyebrow">01 / CONCEPT</p>
            <h3>The time is NOW</h3>
            <p>The concept combines time and space through a train traveling toward the future. Clocks, orbital lines, and space imagery connect the journey to the idea that our time to create begins now. An isometric map at the bottom anchors the composition in cultural landmarks representing our roots, while open-ended pathways leave room for where we go next.</p>
            <figure><img src={`${assets}/concept-board.jpg`} alt="Layout iteration exploring the composition around the wall’s openings." loading="lazy" /><figcaption>Layout iteration exploring the composition around the wall’s openings.</figcaption></figure>
          </section>
          <section>
            <p className="mural-eyebrow">02 / VISUAL DEVELOPMENT</p>
            <h3>Build one shared visual language</h3>
            <p>The color concept brings the train, lettering, cultural landmarks, and student characters into one composition. Red, gold, teal, and black connect the mural’s larger narrative with its smaller personal details.</p>
            <figure><img src={`${assets}/sketch.jpg`} alt="Color concept exploring the train, clocks, space, and isometric landmarks." loading="lazy" /><figcaption>Color concept exploring the train, clocks, space, and isometric landmarks.</figcaption></figure>
          </section>
          <section>
            <p className="mural-eyebrow">03 / SCALE &amp; SITE</p>
            <h3>Translate the design across 30 feet</h3>
            <p>The site introduced real constraints: a long wall divided into panels, with windows and other interruptions. Mapping the composition onto a grid helped relate the digital drawing to the physical space before transferring the outlines to the wall.</p>
            <figure><img src={`${assets}/site.jpg`} alt="The wall before installation." loading="lazy" /><figcaption>The wall before installation.</figcaption></figure>
            <figure><img src={`${assets}/layout.jpg`} alt="Transferring the design and laying out the mural at full scale." loading="lazy" /><figcaption>Transferring the design and laying out the mural at full scale.</figcaption></figure>
          </section>
          <section>
            <p className="mural-eyebrow">04 / EXECUTION</p>
            <h3>Bring the composition onto the wall</h3>
            <p>The process moved from planned outlines to layers of color and detailed painting. Working at mural scale meant carrying a consistent visual language across the wall while giving individual elements enough presence to read within the larger composition.</p>
            <figure><img src={`${assets}/painting.jpg`} alt="Painting the mural and developing the lettering and surrounding details." loading="lazy" /><figcaption>Painting the mural and developing the lettering and surrounding details.</figcaption></figure>
          </section>
          <section>
            <p className="mural-eyebrow">05 / STUDENT IDENTITY</p>
            <h3>Make room for every astronaut</h3>
            <p>Spaces for small astronaut characters were designed to represent the students within the larger journey. The planned technology component uses a QR code to let viewers explore the students represented on the mural, connecting the physical artwork with individual identities.</p>
          </section>
        </div>
        <style jsx>{`
          .mural-case section { margin-top: 36px; }
          .mural-case h3 { margin: 8px 0 14px; font-size: 23px; line-height: 1.3; }
          .mural-case section p { font-size: 15px; line-height: 1.8; }
          .mural-eyebrow { font-size: 11px !important; letter-spacing: .1em; color: var(--muted); }
          .mural-case figure { margin: 24px 0 0; }
          .mural-case figure img { display: block; width: 100%; max-height: 620px; object-fit: contain; border-radius: 16px; background: rgba(128,128,128,.06); }
          .mural-case figcaption { margin-top: 10px; font-size: 12px; line-height: 1.6; color: var(--muted); }
          .mural-case video { display: block; width: 100%; max-height: 620px; border-radius: 16px; background: #111; }
        `}</style>
      </article>
    </div>, document.body
  );
}
