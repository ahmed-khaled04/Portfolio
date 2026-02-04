import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section
      eyebrow="Projects"
      title="All Projects"
      description="A collection of systems and applications I’ve built across networking, embedded systems, and software engineering."
    >
      <div className={styles.grid}>
        {projects.map((p) => (
          <Card key={p.slug}>
            <h3 className={styles.title}>{p.title}</h3>

            <p className={styles.summary}>{p.summary}</p>

            <div className={styles.tags}>
              {p.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.actions}>
              <Button to={`/projects/${p.slug}`} variant="subtle" size="sm">
                View details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
