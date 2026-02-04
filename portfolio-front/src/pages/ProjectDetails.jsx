import { useParams, Link } from "react-router-dom";
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

  return (
    <Section
      eyebrow="Project"
      title={project.title}
      description={project.summary}
    >
      <div className={styles.block}>
        <h4>Tech Stack</h4>
        <ul>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h4>Categories</h4>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        {project.links.github && (
          <Button href={project.links.github} target="_blank" variant="subtle">
            GitHub
          </Button>
        )}

        <Button to="/projects" variant="ghost">
          Back to projects
        </Button>
      </div>
    </Section>
  );
}
