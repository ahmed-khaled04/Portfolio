import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import styles from "./Home.module.css";
import featuredStyles from "./HomeFeatured.module.css";

import { projects } from "../data/projects";


export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);


  return (
    <>
      <Section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.headline}>
              Building clean, modern software that actually ships.
            </h1>

            <p className={styles.subhead}>
              I focus on full-stack development and AI projects—fast UI, solid
              architecture, and real-world impact.
            </p>

            <div className={styles.actions}>
              <Button to="/projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Contact
              </Button>
            </div>
          </div>

          <aside className={styles.rightCard}>
            <p className={styles.kicker}>Highlights</p>

            <div className={styles.pills}>
              <span className={styles.pill}>Full-Stack</span>
              <span className={styles.pill}>AI / Data</span>
              <span className={styles.pill}>Embedded</span>
              <span className={styles.pill}>Networking</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Primary stack</span>
                <span className={styles.statValue}>React • Node • PostgreSQL</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Focus</span>
                <span className={styles.statValue}>Performance + UX</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Currently</span>
                <span className={styles.statValue}>Building & shipping</span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Work"
        title="Featured Projects"
        description="A few projects I’m proud of—built with clean architecture, solid UX, and real functionality."
      >
        <div className={featuredStyles.grid}>
          {featured.map((p) => (
            <Card key={p.slug}>
              <div className={featuredStyles.titleRow}>
                <h3 className={featuredStyles.cardTitle}>{p.title}</h3>
                <Button to={`/projects/${p.slug}`} variant="subtle" size="sm">
                  Details
                </Button>
              </div>

              <p className={featuredStyles.cardText}>{p.summary}</p>

              <div className={featuredStyles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={featuredStyles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
