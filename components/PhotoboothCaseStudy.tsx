'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const assets = '/images/design/photobooth';

export function PhotoboothCaseStudy({ onClose }: { onClose: () => void }) {
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
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="photobooth-title">
      <button className="modal-backdrop" type="button" aria-label="Close Photobooth" onClick={onClose} />
      <article className="modal-card photobooth-case" ref={card}>
        <button className="modal-close" type="button" ref={close} onClick={onClose} aria-label="Close Photobooth">×</button>
        <div className="modal-content">
          <p className="modal-kicker">Physical Computing · Product Design</p>
          <h2 id="photobooth-title">Photobooth</h2>
          <div className="modal-tags"><span>3D Modeling</span><span>Digital Fabrication</span><span>Interaction Design</span><span>Physical Computing</span></div>
          <p className="modal-description">A compact photobooth that turns a quick portrait into a tangible keepsake. The experience pairs a digital capture interface with a custom enclosure, physical controls, and a front-facing print tray, bringing the familiar ritual of a photo booth into a tabletop format.</p>
          <figure><img src={`${assets}/cover.jpg`} alt="Finished white Photobooth with laptop interface and printed portrait keepsakes" /></figure>
          <section>
            <p className="photobooth-eyebrow">01 / MODEL THE EXPERIENCE</p>
            <h3>Design around the photo-taking ritual</h3>
            <p>The 3D model explores how the controls, indicator lights, and print opening come together in one compact housing. Rounded edges, a raised PHOTOS sign, and a projecting tray give the booth a recognizable silhouette while making its interaction points easy to find.</p>
            <figure><img src={`${assets}/model.jpg`} alt="3D model of the Photobooth enclosure with controls, PHOTOS sign, and print tray" loading="lazy" /><figcaption>3D model exploring the enclosure, control layout, and print tray.</figcaption></figure>
          </section>
          <section>
            <p className="photobooth-eyebrow">02 / FABRICATE &amp; ASSEMBLE</p>
            <h3>Bring the enclosure off the screen</h3>
            <p>The fabrication process translates the digital form into physical parts, including the front panel and raised lettering. The process photo shows the printed components before assembly, with openings for the controls and print output and mounting features built into the panel.</p>
            <figure><img src={`${assets}/process.jpg`} alt="White fabricated Photobooth front panel and PHOTOS sign on a workshop table before assembly" loading="lazy" /><figcaption>Enclosure components and signage during fabrication and assembly.</figcaption></figure>
          </section>
          <section>
            <p className="photobooth-eyebrow">03 / CAPTURE &amp; KEEP</p>
            <h3>A digital moment, made physical</h3>
            <p>The finished setup brings the screen, booth, and printed portraits into a single experience. A minimal interface invites visitors to step in and say cheese, while the physical output pairs each portrait with a short message to take away.</p>
            <video controls playsInline preload="none" poster={`${assets}/cover.jpg`} aria-label="Photobooth working demonstration"><source src={`${assets}/demo.mp4`} type="video/mp4" />Your browser does not support video playback. <a href={`${assets}/demo.mp4`}>Download the demo</a>.</video>
          </section>
        </div>
        <style jsx>{`
          .photobooth-case section { margin-top: 36px; }
          .photobooth-case h3 { margin: 8px 0 14px; font-size: 23px; line-height: 1.3; }
          .photobooth-case section p { font-size: 15px; line-height: 1.8; }
          .photobooth-eyebrow { font-size: 11px !important; letter-spacing: .1em; color: var(--muted); }
          .photobooth-case figure { margin: 24px 0 0; }
          .photobooth-case figure img { display: block; width: 100%; max-height: 620px; object-fit: contain; border-radius: 16px; background: rgba(128,128,128,.06); }
          .photobooth-case figcaption { margin-top: 10px; font-size: 12px; line-height: 1.6; color: var(--muted); }
          .photobooth-case video { display: block; width: 100%; max-height: 620px; border-radius: 16px; background: #111; }
        `}</style>
      </article>
    </div>, document.body
  );
}
