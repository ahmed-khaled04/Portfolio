import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [lightboxSrc, setLightboxSrc] = useState("");

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setLightboxSrc("");
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!project) {
    return (
      <Section title="Project not found">
        <Button to="/projects" variant="ghost">
          Back to projects
        </Button>
      </Section>
    );
  }

  // Safe defaults
  const problem = project.problem || "";
  const solution = Array.isArray(project.solution) ? project.solution : [];
  const architecture = Array.isArray(project.architecture) ? project.architecture : [];
  const contributions = Array.isArray(project.contributions) ? project.contributions : [];
  const highlights = Array.isArray(project.highlights) ? project.highlights : [];
  const tech = Array.isArray(project.stack) ? project.stack : [];

  const links = project.links || {};
  const demo = links.demo || "";
  const github = links.github || "";
  const report = links.report || "";
  const docs = links.docs || "";

  const heroImg = project.media?.hero || "";
  const heroCaption = project.media?.caption || "";
  const heroFit = project.media?.fit || "contain";
  const gallery = Array.isArray(project.media?.gallery) ? project.media.gallery : [];

  const allImages = useMemo(() => {
    const imgs = [];
    if (heroImg) imgs.push(heroImg);
    for (const g of gallery) imgs.push(g);
    return imgs;
  }, [heroImg, gallery]);

  return (
    <>
      <Section eyebrow="Case Study" title={project.title} description={project.summary}>
        {heroImg && (
          <div className={styles.heroMedia} data-fit={heroFit}>
            <button
              type="button"
              className={styles.heroClick}
              onClick={() => setLightboxSrc(heroImg)}
              aria-label="Open hero image"
            >
              <img
                className={styles.heroImg}
                src={heroImg}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            </button>

            {heroCaption && <p className={styles.heroCaption}>{heroCaption}</p>}
          </div>
        )}

        {gallery.length > 0 && (
          <Block title="Screenshots">
            <div className={styles.gallery}>
              {gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  className={styles.thumbBtn}
                  onClick={() => setLightboxSrc(src)}
                  aria-label="Open screenshot"
                >
                  <img src={src} alt={`${project.title} screenshot`} loading="lazy" />
                </button>
              ))}
            </div>
          </Block>
        )}

        {problem && (
          <Block title="Problem">
            <p>{problem}</p>
          </Block>
        )}

        {solution.length > 0 && (
          <Block title="Solution">
            <ul>
              {solution.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Block>
        )}

        {architecture.length > 0 && (
          <Block title="Architecture">
            <ul>
              {architecture.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Block>
        )}

        {tech.length > 0 && (
          <Block title="Technologies Used">
            <div className={styles.tech}>
              {tech.map((t) => (
                <span key={t} className={styles.techItem}>
                  {t}
                </span>
              ))}
            </div>
          </Block>
        )}

        {contributions.length > 0 && (
          <Block title="My Contributions">
            <ul>
              {contributions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Block>
        )}

        {highlights.length > 0 && (
          <Block title="Highlights">
            <ul>
              {highlights.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Block>
        )}

        <div className={styles.actions}>
          {demo && (
            <Button href={demo} target="_blank" variant="primary">
              Live Demo
            </Button>
          )}

          {github && (
            <Button href={github} target="_blank" variant="subtle">
              GitHub
            </Button>
          )}

          {report && (
            <Button href={report} target="_blank" variant="ghost">
              Report
            </Button>
          )}

          {docs && (
            <Button href={docs} target="_blank" variant="ghost">
              Docs
            </Button>
          )}

          <Button to="/projects" variant="ghost">
            Back to projects
          </Button>
        </div>
      </Section>

      {lightboxSrc && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) setLightboxSrc("");
          }}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxSrc("")}
            aria-label="Close"
          >
            ✕
          </button>

          <img className={styles.lightboxImg} src={lightboxSrc} alt="Preview" />

          {allImages.length > 1 && (
            <div className={styles.lightboxStrip}>
              {allImages.map((src) => (
                <button
                  key={src}
                  type="button"
                  className={`${styles.stripThumb} ${
                    src === lightboxSrc ? styles.stripActive : ""
                  }`}
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
    </>
  );
}

function Block({ title, children }) {
  return (
    <div className={styles.block}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
