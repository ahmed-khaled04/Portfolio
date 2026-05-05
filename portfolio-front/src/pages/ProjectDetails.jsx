import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import styles from './ProjectDetails.module.css';

function getIcon(tags) {
  if (tags.includes('Networking') || tags.includes('UDP')) return '⚡';
  if (tags.includes('Compilers') || tags.includes('Parsing')) return '◈';
  if (tags.includes('Embedded')) return '⊕';
  return '⬡';
}

function Section({ label, children }) {
  return (
    <div className={styles.detailSection}>
      <p className={styles.detailLabel}>{label}</p>
      {children}
    </div>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState('');

  const allImages = useMemo(() => {
    if (!project) return [];
    const imgs = [];
    if (project.media?.hero) imgs.push(project.media.hero);
    if (Array.isArray(project.media?.gallery)) imgs.push(...project.media.gallery);
    return imgs;
  }, [project]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundText}>Project not found.</p>
        <Button to="/projects" variant="ghost">← Back to projects</Button>
      </div>
    );
  }

  const { problem, solution = [], architecture = [], contributions = [], highlights = [], stack = [], links = {}, media = {} } = project;
  const gallery = Array.isArray(media.gallery) ? media.gallery : [];

  return (
    <div className={styles.page}>
      {/* Hero visual */}
      <div className={styles.heroVisual}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <span className={styles.heroIcon} aria-hidden="true">{getIcon(project.tags)}</span>
        <span className={styles.heroNum} aria-hidden="true">
          {String(projects.findIndex(p => p.slug === slug) + 1).padStart(2, '0')}
        </span>
        <div className={styles.heroOverlay} />
        <Link to="/projects" className={styles.backBtn}>
          ← Projects
        </Link>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Header */}
        <FadeUp>
          <div className={styles.tagRow}>
            {project.tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.linkRow}>
            {links.demo && <Button href={links.demo} target="_blank" variant="primary">Live Demo</Button>}
            {links.github && <Button href={links.github} target="_blank" variant="subtle">GitHub</Button>}
            {links.report && <Button href={links.report} target="_blank" variant="ghost">Report</Button>}
            {links.docs && <Button href={links.docs} target="_blank" variant="ghost">Docs</Button>}
          </div>
        </FadeUp>

        {/* Hero image */}
        {media.hero && (
          <FadeUp>
            <div className={styles.mediaBlock}>
              <button
                type="button"
                className={styles.heroImg}
                onClick={() => setLightboxSrc(media.hero)}
                aria-label="Open image"
              >
                <img src={media.hero} alt={`${project.title} screenshot`} loading="lazy" />
              </button>
              {media.caption && <p className={styles.caption}>{media.caption}</p>}
            </div>
          </FadeUp>
        )}

        {/* Detail sections */}
        {problem && (
          <FadeUp>
            <Section label="The Problem">
              <p className={styles.prose}>{problem}</p>
            </Section>
          </FadeUp>
        )}

        {solution.length > 0 && (
          <FadeUp>
            <Section label="Solution">
              <ul className={styles.bulletList}>
                {solution.map(x => <li key={x}><span className={styles.bullet}>⸱</span>{x}</li>)}
              </ul>
            </Section>
          </FadeUp>
        )}

        {architecture.length > 0 && (
          <FadeUp>
            <Section label="Architecture">
              <ul className={styles.bulletList}>
                {architecture.map(x => <li key={x}><span className={styles.bullet}>⸱</span>{x}</li>)}
              </ul>
            </Section>
          </FadeUp>
        )}

        {highlights.length > 0 && (
          <FadeUp>
            <Section label="Highlights">
              <ul className={styles.bulletList}>
                {highlights.map(x => <li key={x}><span className={styles.bullet}>⸱</span>{x}</li>)}
              </ul>
            </Section>
          </FadeUp>
        )}

        {contributions.length > 0 && (
          <FadeUp>
            <Section label="My Contributions">
              <ul className={styles.bulletList}>
                {contributions.map(x => <li key={x}><span className={styles.bullet}>⸱</span>{x}</li>)}
              </ul>
            </Section>
          </FadeUp>
        )}

        {stack.length > 0 && (
          <FadeUp>
            <div className={styles.divider} />
            <Section label="Tech Stack">
              <div className={styles.stackRow}>
                {stack.map(t => <span key={t} className={styles.stackChip}>{t}</span>)}
              </div>
            </Section>
          </FadeUp>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <FadeUp>
            <Section label="Screenshots">
              <div className={styles.gallery}>
                {gallery.map(src => (
                  <button
                    key={src}
                    type="button"
                    className={styles.thumb}
                    onClick={() => setLightboxSrc(src)}
                    aria-label="Open screenshot"
                  >
                    <img src={src} alt="screenshot" loading="lazy" />
                  </button>
                ))}
              </div>
            </Section>
          </FadeUp>
        )}

        <FadeUp>
          <div className={styles.footerActions}>
            <Button to="/projects" variant="ghost">← Back to projects</Button>
          </div>
        </FadeUp>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onMouseDown={e => { if (e.target === e.currentTarget) setLightboxSrc(''); }}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxSrc('')}
            aria-label="Close"
          >
            ✕
          </button>
          <img className={styles.lightboxImg} src={lightboxSrc} alt="Preview" />
          {allImages.length > 1 && (
            <div className={styles.strip}>
              {allImages.map(src => (
                <button
                  key={src}
                  type="button"
                  className={`${styles.stripThumb} ${src === lightboxSrc ? styles.stripActive : ''}`}
                  onClick={() => setLightboxSrc(src)}
                  aria-label="Switch image"
                >
                  <img src={src} alt="thumb" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
