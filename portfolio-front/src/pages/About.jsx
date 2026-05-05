import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import styles from './About.module.css';

const CERTS = [
  { title: 'Embedded Systems Diploma', org: 'AMIT' },
  { title: 'Embedded Systems Training', org: 'Siemens Academy' },
  { title: 'Big Data Analytics Certificate', org: 'NTI' },
  { title: 'Beginner Training in 2D Game Development', org: '' },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── Hero band ── */}
      <div className={styles.heroBand}>
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className={styles.heroBg} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroRow}>
            <div className={styles.avatarWrap}>
              <img src="/me.jpeg" alt="Ahmed Khaled" className={styles.avatar}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className={styles.avatarFallback} style={{ display: 'none' }}>AK</div>
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.heroName}>Ahmed Khaled</h1>
              <p className={styles.heroSub}>
                Computer Engineering student · Cairo, Egypt
              </p>
              <div className={styles.heroActions}>
                <Button href="/CV.pdf" target="_blank" variant="primary" size="lg">
                  Download CV
                </Button>
                <Button href="mailto:ahmed_khalid04@hotmail.com" variant="ghost" size="lg">
                  Email Me
                </Button>
              </div>
              <div className={styles.socials}>
                <a href="https://github.com/ahmed-khaled04" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub ↗</a>
                <a href="https://www.linkedin.com/in/ahmed-khaled-a70273277/" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn ↗</a>
                <a href="https://www.kaggle.com/ahmedkhaled375/" target="_blank" rel="noreferrer" className={styles.socialLink}>Kaggle ↗</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>
        {/* Bio + quick facts */}
        <FadeUp>
          <div className={styles.bioRow}>
            <div className={styles.bioText}>
              <p className={styles.bioPrimary}>
                Senior-1 Computer Engineering student (Data Science track) at Ain Shams University
                with strong foundations in software development, embedded systems, and machine learning.
              </p>
              <p className={styles.bioSecondary}>
                Experienced in academic and hands-on projects involving C++, Python, React, databases,
                and data-driven applications. Motivated, fast learner, and effective team contributor
                looking to solve complex engineering problems at scale.
              </p>
            </div>
            <div className={styles.quickFacts}>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Location</span>
                <span className={styles.factValue}>Nasr City, Cairo</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Languages</span>
                <span className={styles.factValue}>Arabic · English · German</span>
              </div>
              <div className={styles.factRow}>
                <span className={styles.factLabel}>Focus areas</span>
                <span className={styles.factValue}>Full-Stack · Embedded · AI</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className={styles.divider} />

        {/* Education */}
        <FadeUp>
          <p className={styles.sectionLabel}>Education</p>
          <div className={styles.eduList}>
            <div className={styles.eduEntry}>
              <span className={styles.eduDate}>2022 – Present</span>
              <div>
                <h3 className={styles.eduInstitution}>Ain Shams University — Faculty of Engineering</h3>
                <p className={styles.eduDegree}>B.Sc. Computer Engineering (Data Science)</p>
              </div>
            </div>
            <div className={styles.eduEntry}>
              <span className={styles.eduDate}>2022</span>
              <div>
                <h3 className={styles.eduInstitution}>Nefertari International School</h3>
                <p className={styles.eduDegree}>National Secondary Certificate · 93%</p>
                <p className={styles.eduHighlight}>Ranked 2nd in class · 4th in El-Salam District</p>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className={styles.divider} />

        {/* Certifications */}
        <FadeUp>
          <p className={styles.sectionLabel}>Certifications & Training</p>
          <div className={styles.certGrid}>
            {CERTS.map((c, i) => (
              <FadeUp key={c.title} delay={i * 80}>
                <div className={styles.certEntry}>
                  <span className={styles.certDot} aria-hidden="true" />
                  <div>
                    <span className={styles.certTitle}>{c.title}</span>
                    {c.org && <span className={styles.certOrg}> — {c.org}</span>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>

        <div className={styles.divider} />

        {/* Looking for */}
        <FadeUp>
          <div className={styles.lookingFor}>
            <div className={styles.lookingDot} aria-hidden="true" />
            <div>
              <p className={styles.lookingLabel}>What I'm looking for</p>
              <p className={styles.lookingText}>
                Open to internships and roles in <strong>systems engineering</strong>,{' '}
                <strong>full-stack development</strong>, <strong>embedded systems</strong>, and{' '}
                <strong>backend infrastructure</strong>. Looking for opportunities to architect solutions,
                optimize performance, and work on technically complex problems.
              </p>
              <div className={styles.lookingActions}>
                <Button to="/projects" variant="subtle">View Projects</Button>
                <Button to="/contact" variant="ghost">Contact</Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
