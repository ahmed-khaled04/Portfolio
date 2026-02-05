import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Section eyebrow="About" title="Ahmed Khaled" description="Computer Engineering student (Data Science track) at Ain Shams University with systems engineering focus.">
        <div className={styles.heroGrid}>
          <div className={styles.left}>
            <p className={styles.bio}>
              Senior-1 Computer Engineering student (Data Science track) with strong foundations in
              software development, embedded systems, and machine learning. Experienced in academic and
              hands-on projects involving C++, Python, React, databases, and data-driven applications.
              Motivated, fast learner, and effective team contributor.
            </p>

            <div className={styles.actions}>
              <Button href="/CV.pdf" target="_blank" variant="primary" size="lg">
                Download CV
              </Button>

              <Button href="mailto:ahmed_khalid04@hotmail.com" variant="ghost" size="lg">
                Email Me
              </Button>
            </div>

            <div className={styles.linksRow}>
              <a className={styles.link} href="https://github.com/ahmed-khaled04" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={styles.link} href="https://www.linkedin.com/in/ahmed-khaled-a70273277/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className={styles.link} href="https://www.kaggle.com/ahmedkhaled375/" target="_blank" rel="noreferrer">
                Kaggle
              </a>
            </div>
          </div>

          <aside className={styles.rightCard}>
            <div className={styles.cardBlock}>
              <p className={styles.kicker}>Location</p>
              <p className={styles.cardText}>Nasr City, Cairo</p>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardBlock}>
              <p className={styles.kicker}>Languages</p>
              <div className={styles.pills}>
                <span className={styles.pill}>Arabic — Native</span>
                <span className={styles.pill}>English — Fluent</span>
                <span className={styles.pill}>German — Basic</span>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardBlock}>
              <p className={styles.kicker}>Focus</p>
              <div className={styles.pills}>
                <span className={styles.pill}>Full-Stack</span>
                <span className={styles.pill}>AI / Data</span>
                <span className={styles.pill}>Embedded</span>
                <span className={styles.pill}>Compilers</span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Background"
        title="Education"
        description="Computer Engineering foundation with data science specialization and distributed systems focus."
      >
        <div className={styles.twoCol}>
          <div className={styles.block}>
            <h3 className={styles.h3}>Ain Shams University — Faculty of Engineering</h3>
            <p className={styles.muted}>B.Sc. Computer Engineering (Data Science) • Oct 2022 – Present</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.h3}>Nefertari International School</h3>
            <p className={styles.muted}>National Secondary Certificate • Graduated 93% (2022)</p>
            <ul className={styles.list}>
              <li>Ranked 2nd in class (2022)</li>
              <li>Ranked 4th in El-Salam District</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Training"
        title="Certifications & Programs"
        description="Practical training alongside coursework."
      >
        <div className={styles.grid3}>
          {[
            "Embedded Systems Diploma — AMIT",
            "Embedded Systems Training — Siemens Academy",
            "Big Data Analytics Certificate — NTI",
            "Beginner Training in 2D Game Development",
          ].map((x) => (
            <div key={x} className={styles.tile}>
              {x}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Now"
        title="What I’m looking for"
        description="Opportunities to ship real systems and solve complex engineering problems at scale."
      >
        <div className={styles.callout}>
          <p className={styles.calloutText}>
            Open to internships and roles in <strong>systems engineering</strong>, <strong>full-stack development</strong>, <strong>embedded systems</strong>, and <strong>backend infrastructure</strong>. I'm looking for opportunities where I can architect solutions, optimize performance, and work on technically complex problems. Strong fundamentals, fast execution, attention to detail.
          </p>

          <div className={styles.actions}>
            <Button to="/projects" variant="subtle" size="lg">
              View Projects
            </Button>
            <Button to="/contact" variant="ghost" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
