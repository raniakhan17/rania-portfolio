'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const assets = '/images/design/carousel';

export function CarouselCaseStudy({ onClose }: { onClose: () => void }) {
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
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="carousel-title">
      <button className="modal-backdrop" type="button" aria-label="Close Carousel" onClick={onClose} />
      <article className="modal-card carousel-case" ref={card}>
        <button className="modal-close" type="button" ref={close} onClick={onClose} aria-label="Close Carousel">×</button>
        <div className="modal-content">
          <p className="modal-kicker">Physical Computing · Digital Fabrication</p>
          <h2 id="carousel-title">Carousel</h2>
          <div className="modal-tags"><span>Stepper Motor</span><span>3D Printing</span><span>Laser Cutting</span><span>Iterative Prototyping</span></div>
          <p className="modal-description">A miniature carousel that brings mechanical motion, programmed lighting, and digital fabrication together. Our team built a stepper-driven rotating platform with four 3D-printed horses and a laser-cut Baltic birch enclosure, pairing a traditional carousel form with embedded electronics.</p>
          <figure className="carousel-hero"><img src={`${assets}/finished.jpg`} alt="Finished wooden carousel with 3D-printed horses and enclosed electronics" /></figure>
          <section>
            <p className="carousel-eyebrow">01 / PROTOTYPE &amp; TEST</p>
            <h3>Test the mechanism before committing to materials</h3>
            <p>We began with a low-fidelity cardboard model to check the proportions, component fit, and platform movement. Testing exposed friction and wobble, which became the main mechanical issues to address in the final build.</p>
            <figure><img src={`${assets}/prototype.jpg`} alt="Low-fidelity cardboard carousel prototype used to test fit and rotation" loading="lazy" /><figcaption>Cardboard prototype for testing fit, movement, and stability.</figcaption></figure>
          </section>
          <section>
            <p className="carousel-eyebrow">02 / MOTION &amp; ELECTRONICS</p>
            <h3>Coordinate rotation with a moving light sequence</h3>
            <p>A stepper motor drives the platform, while the LEDs illuminate in sequence in the same direction as the carousel’s rotation. The base houses the microcontroller, motor-control circuitry, and wiring, keeping the electronics integrated within the structure.</p>
            <figure><img src={`${assets}/electronics.jpg`} alt="Internal carousel base showing the microcontroller, breadboard, motor wiring, and LED connections" loading="lazy" /><figcaption>Motor control and lighting circuitry inside the base.</figcaption></figure>
          </section>
          <section>
            <p className="carousel-eyebrow">03 / FABRICATE &amp; REFINE</p>
            <h3>Translate the model into a finished assembly</h3>
            <p>We laser-cut the enclosure from 1/8-inch Baltic birch plywood, using tab-and-slot joints to assemble the casing. Engraved details and a scalloped canopy reference traditional merry-go-rounds, while four 3D-printed horses complete the rotating platform. We refined the assembly to reduce the friction and wobble identified in the cardboard prototype.</p>
            <figure><img src={`${assets}/detail.jpg`} alt="Close-up of the 3D-printed horses, engraved wooden platform, and scalloped canopy" loading="lazy" /><figcaption>3D-printed horses and engraved plywood details.</figcaption></figure>
          </section>
          <section>
            <p className="carousel-eyebrow">04 / IN MOTION</p>
            <h3>Watch the working prototype</h3>
            <video controls playsInline preload="none" poster={`${assets}/finished.jpg`} aria-label="Carousel working demonstration"><source src={`${assets}/demo.mp4`} type="video/mp4" />Your browser does not support video playback. <a href={`${assets}/demo.mp4`}>Download the demo</a>.</video>
          </section>
        </div>
        <style jsx>{`
          .carousel-case section { margin-top: 36px; }
          .carousel-case h3 { margin: 8px 0 14px; font-size: 23px; line-height: 1.3; }
          .carousel-case section p { font-size: 15px; line-height: 1.8; }
          .carousel-eyebrow { font-size: 11px !important; letter-spacing: .1em; color: var(--muted); }
          .carousel-case figure { margin: 24px 0 0; }
          .carousel-case figure img { display: block; width: 100%; max-height: 620px; object-fit: contain; border-radius: 16px; background: rgba(128,128,128,.06); }
          .carousel-case figcaption { margin-top: 10px; font-size: 12px; line-height: 1.6; color: var(--muted); }
          .carousel-case video { display: block; width: 100%; max-height: 620px; border-radius: 16px; background: #111; }
        `}</style>
      </article>
    </div>, document.body
  );
}
