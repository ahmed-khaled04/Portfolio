import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SkillCard from "../components/ui/SkillCard";
import styles from "./Home.module.css";
import featuredStyles from "./HomeFeatured.module.css";
import skillsStyles from "./HomeSkills.module.css";

import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>Computer Engineering • Full-Stack • AI/Data</p>

            <h1 className={styles.headline}>
              Building clean, modern software that actually ships.
            </h1>

            <p className={styles.subhead}>
              Full-stack + engineering projects with strong architecture, smooth UX, and real results.
            </p>

            <div className={styles.actions}>
              <Button to="/projects" variant="primary" size="lg">
                View Projects
              </Button>

              <Button href="/CV.pdf" target="_blank" variant="subtle" size="lg">
                Resume
              </Button>

              <Button to="/contact" variant="ghost" size="lg">
                Contact
              </Button>
            </div>

            <div className={styles.trustRow}>
              <a className={styles.trustLink} href="https://github.com/ahmed-khaled04" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a className={styles.trustLink} href="https://www.linkedin.com/in/ahmed-khaled-a70273277/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className={styles.trustLink} href="https://www.kaggle.com/ahmedkhaled375/" target="_blank" rel="noreferrer">
                Kaggle ↗
              </a>

              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.available}>Open to opportunities</span>
            </div>
          </div>

          <aside className={styles.rightCard}>
            <div className={styles.identity}>
              <img
                src="/me.jpg"
                alt="Ahmed Khaled"
                className={styles.avatar}
              />
              <div>
                <h3 className={styles.name}>Ahmed Khaled</h3>
                <p className={styles.role}>
                  Computer Engineering • Full-Stack • AI
                </p>
              </div>
            </div>
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
                <span className={styles.statValue}>React • Node • DB</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>What I optimize</span>
                <span className={styles.statValue}>Performance + UX</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Strength</span>
                <span className={styles.statValue}>Systems thinking</span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Work"
        title="Featured Projects"
        description="A few projects I’m proud of—clean architecture, solid UX, and real functionality."
      >
        <div className={featuredStyles.grid}>
          {featured.map((p) => (
            <Card key={p.slug} className={featuredStyles.card}>
              {p.media?.hero && (
                <button
                  type="button"
                  className={featuredStyles.thumb}
                  onClick={() => (window.location.href = `/projects/${p.slug}`)}
                  aria-label={`Open ${p.title}`}
                >
                  <img src={p.media.hero} alt={`${p.title} preview`} loading="lazy" />
                </button>
              )}

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

      <Section
        eyebrow="Expertise"
        title="Skills & technical focus"
        description="A practical skill set built through academic depth and hands-on engineering projects."
      >
        <div className={skillsStyles.grid}>
          {skillGroups.map((g) => (
            <SkillCard key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
      </Section>
    </>
  );
}
