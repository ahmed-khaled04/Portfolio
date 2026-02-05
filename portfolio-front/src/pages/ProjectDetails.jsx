import { useParams } from "react-router-dom";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section title="Project not found">
        <Button to="/projects" variant="ghost">
          Back to projects
        </Button>
      </Section>
    );
  }

  // Safe defaults (prevents "Cannot read properties of undefined (reading 'map')")
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

  return (
    <Section eyebrow="Case Study" title={project.title} description={project.summary}>
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
