import { experiences, honors } from '@/lib/portfolio-data';

const experienceLogoImages: Record<string, string> = {
  BMA: '/images/about/blue_modern_advisory_logo.png',
  LV: '/images/about/livanova.png',
  HQ: '/images/about/haptiq.png',
  DS: '/images/about/discoverstem.png',
  GH: '/images/about/grasshoppher.png',
  Aluna: '/images/about/aluna.png',
  AL: '/images/about/aluna.png',
  A: '/images/about/aluna.png',
};

const communityLogoImages: Record<string, string> = {
  IYA: '/images/about/iya-logo.png',
  MAIA: '/images/about/maia-logo.png',
};

export function AboutSection() {
  return (
    <section className="panel" id="about">
      <div className="about-page-shell">
        <aside className="about-side-nav" aria-label="About page sections">
          <a className="active" href="#about-hi">
            Origin
          </a>
          <a href="#about-experience">Experience</a>
          <a href="#about-honors">Honors & Awards</a>
          <a href="#about-community">Communities</a>
          <a href="#about-notes">Notes</a>
        </aside>

        <div className="about-content">
          <section className="about-intro-block" id="about-hi">
            <div className="about-intro-copy about-intro-with-photo">
              <div className="about-heading-row">
                <div className="about-real-photo-wrap about-heading-photo">
                  <img
                    src="/images/about/rania-about.png"
                    alt="Rania Khan"
                    className="about-real-photo"
                  />
                </div>

                <div>
                  <h2>A little bit about me...</h2>
                </div>
              </div>

              <div className="about-facts location-stack">
                <span>📍 studying in Los Angeles, from Dallas, born in NYC</span>
                <span>📚 @ USC Iovine and Young Academy</span>
              </div>

              <div className="about-paragraphs">
                <p>
                  I’m passionate about using creativity, technology, and business
                  to solve meaningful problems and create lasting impact.
                </p>
                <p>
                  From launching my first business at 11 to developing patented
                  inventions and founding a nonprofit, I’ve always been driven to
                  build with purpose.
                </p>
                <p>
                  Now, at USC’s Iovine and Young Academy, I’m expanding that
                  vision through human-centered design and interdisciplinary
                  innovation.
                </p>
              </div>

              <div className="about-mini-links">
                <a
                  href="https://docs.google.com/document/d/1gLM75D9JQrzzoJa5HI1I2e3mks1qd_DHFUjUwPR-czA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/raniakhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="mailto:raniakha@usc.edu">Email</a>
              </div>
            </div>
          </section>

          <section className="about-section" id="about-experience">
            <div className="about-section-heading">
              <h2>Experience</h2>
              <p>Current work and past builds.</p>
            </div>

            <div className="about-exp-list experience-hover-list">
              {experiences.map((experience) => {
                const ExperienceTag = experience.url ? 'a' : 'div';

                return (
                  <ExperienceTag
                    className="experience-hover-item"
                    href={experience.url}
                    target={experience.url ? '_blank' : undefined}
                    rel={experience.url ? 'noopener noreferrer' : undefined}
                    key={experience.title}
                  >
                    <div className="exp-logo exp-logo-real">
                      {experienceLogoImages[experience.logo] ? (
                        <img
                          src={experienceLogoImages[experience.logo]}
                          alt={`${experience.company} logo`}
                        />
                      ) : (
                        experience.logo
                      )}
                    </div>

                    <div className="exp-main">
                      <h3>{experience.title}</h3>
                      <p>{experience.company}</p>
                      <span className="exp-description">
                        {experience.description}
                      </span>
                    </div>

                    {experience.current && (
                      <span className="current-badge">
                        <i />
                        Current
                      </span>
                    )}
                  </ExperienceTag>
                );
              })}
            </div>
          </section>

          <section
            className="about-section honors-condensed-section"
            id="about-honors"
          >
            <div className="about-section-heading">
              <h2>Honors & Awards</h2>
              <p>
                A few recognition moments from innovation, service, and
                entrepreneurship.
              </p>
            </div>

            <div className="honors-condensed-list">
              {honors.map(([title, description]) => (
                <p key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </p>
              ))}
            </div>
          </section>

          <section
            className="about-section community-collage-section"
            id="about-community"
          >
            <div className="about-section-heading">
              <h2>My Communities</h2>
              <p>The people and rooms that make building feel bigger than me.</p>
            </div>

            <div className="community-collage">
              <article className="community-block">
                <div className="community-head">
                  <div className="community-icon iovine-icon community-logo-icon">
                    <img src={communityLogoImages.IYA} alt="USC Iovine and Young Academy logo" />
                  </div>
                  <div>
                    <h3>USC Iovine and Young Academy</h3>
                    <p>Cohort 12</p>
                  </div>
                </div>

                <p className="community-copy">
                  My interdisciplinary home for design, business, technology, and
                  building things that do not fit neatly into one box.
                </p>

                <div className="photo-strip about-image-strip">
                  <figure className="photo-card tilt-left">
                    <img
                      src="/images/about/iya.png"
                      alt="USC Iovine and Young Academy"
                    />
                    <figcaption>IYA</figcaption>
                  </figure>

                  <figure className="photo-card">
                    <img src="/images/about/usc.png" alt="USC" />
                    <figcaption>USC</figcaption>
                  </figure>

                  <figure className="photo-card tilt-right">
                    <img
                      src="/images/about/iya-cohort.png"
                      alt="USC Iovine and Young Academy Cohort 12"
                    />
                    <figcaption>Cohort 12</figcaption>
                  </figure>
                </div>
              </article>

              <article className="community-block">
                <div className="community-head">
                  <div className="community-icon maia-icon community-logo-icon">
                    <img src={communityLogoImages.MAIA} alt="Marshall AI Association logo" />
                  </div>
                  <div>
                    <h3>Marshall AI Association</h3>
                    <p>AI, entrepreneurship, and builder community</p>
                  </div>
                </div>

                <p className="community-copy">
                  A space to explore practical AI, pitch ideas, meet builders,
                  and turn emerging tools into useful systems.
                </p>

                <div className="photo-strip about-image-strip">
                  <figure className="photo-card tilt-right">
                    <img
                      src="/images/about/maia.png"
                      alt="Marshall AI Association"
                    />
                    <figcaption>demo day</figcaption>
                  </figure>

                  <figure className="photo-card">
                    <img
                      src="/images/about/maia-team.png"
                      alt="Marshall AI Association team"
                    />
                    <figcaption>team photo</figcaption>
                  </figure>
                </div>
              </article>

              <article className="community-block">
                <div className="community-head">
                  <div className="community-icon podcast-icon rare-podcast-logo">
                    <img src="/images/about/podcast.png" alt="Rare Podcast logo" />
                  </div>

                  <div>
                    <h3>Rare Podcast</h3>
                    <p>
                      Co-hosting conversations around creativity, innovation, and
                      student stories
                    </p>
                  </div>
                </div>

                <p className="community-copy">
                  A storytelling space where I get to explore ideas, interview
                  thoughtful people, and turn creative journeys into
                  conversations.
                </p>

                <div className="photo-strip about-image-strip podcast-image-strip">
                  <figure className="photo-card podcast-episode-card">
                    <img
                      src="/images/about/rare-episode-1.png"
                      alt="Rare Podcast episode one"
                    />
                    <figcaption>episode 01</figcaption>
                  </figure>

                  <figure className="photo-card podcast-episode-card">
                    <img
                      src="/images/about/rare-episode-2.png"
                      alt="Rare Podcast episode two"
                    />
                    <figcaption>episode 02</figcaption>
                  </figure>

                  <figure className="photo-card podcast-episode-card">
                    <img
                      src="/images/about/rare-episode-3.png"
                      alt="Rare Podcast episode three"
                    />
                    <figcaption>episode 03</figcaption>
                  </figure>
                </div>
              </article>

              <article className="community-block tsa-community-block">
                <div className="community-head">
                  <a
                    className="community-icon tsa-icon tsa-logo-icon"
                    href="https://www.trojanstreetaid.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Trojan Street Aid website"
                  >
                    <img
                      src="/images/about/tsalogo.png"
                      alt="Trojan Street Aid logo"
                    />
                  </a>

                  <div>
                    <h3>Trojan Street Aid</h3>
                    <p>Mutual aid and community care</p>
                  </div>
                </div>

                <p className="community-copy">
                  Community-centered service rooted in care, dignity, and showing
                  up for people beyond the classroom.
                </p>

                <a
                  className="about-community-link"
                  href="https://www.trojanstreetaid.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>

                <div className="tsa-gallery">
                  <figure className="tsa-feature-card photo-card">
                    <img
                      src="/images/about/tsa-mural.png"
                      alt="Trojan Street Aid mural"
                    />
                    <figcaption>mural</figcaption>
                  </figure>

                  <figure className="tsa-feature-card photo-card">
                    <img
                      src="/images/about/tsa-wellness-project.png"
                      alt="Trojan Street Aid wellness project"
                    />
                    <figcaption>wellness project</figcaption>
                  </figure>

                  <div className="tsa-mini-grid">
                    <figure className="photo-card">
                      <img
                        src="/images/about/tsa1.png"
                        alt="Trojan Street Aid community moment one"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/tsa2.png"
                        alt="Trojan Street Aid community moment two"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/tsa3.png"
                        alt="Trojan Street Aid community moment three"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/tsa4.png"
                        alt="Trojan Street Aid community moment four"
                      />
                    </figure>

                    <figure className="photo-card tsa-wide-mini">
                      <img
                        src="/images/about/tsa5.png"
                        alt="Trojan Street Aid community moment five"
                      />
                    </figure>
                  </div>
                </div>
              </article>

              <article className="community-block bloom-community-block">
                <div className="community-head">
                  <div className="community-icon bloom-icon bloom-logo-icon">
                    <img src="/images/about/bloom.png" alt="Bloom logo" />
                  </div>

                  <div>
                    <h3>Bloom</h3>
                    <p>Student-led impact and mentorship</p>
                  </div>
                </div>

                <p className="community-copy">
                  A community I helped grow around mentorship, leadership, and
                  helping students feel supported while becoming who they are.
                </p>

                <div className="bloom-gallery">
                  <figure className="bloom-feature-card photo-card">
                    <img
                      src="/images/about/bloom1.png"
                      alt="Bloom community moment one"
                    />
                    <figcaption>community</figcaption>
                  </figure>

                  <div className="bloom-mini-grid">
                    <figure className="photo-card">
                      <img
                        src="/images/about/bloom2.png"
                        alt="Bloom community moment two"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/bloom3.png"
                        alt="Bloom community moment three"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/bloom4.png"
                        alt="Bloom community moment four"
                      />
                    </figure>

                    <figure className="photo-card">
                      <img
                        src="/images/about/bloom5.png"
                        alt="Bloom community moment five"
                      />
                    </figure>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="about-section sticky-notes-section" id="about-notes">
            <div className="about-section-heading">
              <h2>Thanks for stopping by!</h2>
              <p>Leave a message :)</p>
            </div>

            <div className="sticky-wall">
              <a
                className="sticky-note add-note"
                href="mailto:raniakha@usc.edu?subject=Portfolio%20note%20for%20Rania"
              >
                <span>+</span>
                <p>leave a note</p>
              </a>

            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
