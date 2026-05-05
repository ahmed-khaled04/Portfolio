import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import FadeUp from '../components/ui/FadeUp';
import ParticleCanvas from '../components/ui/ParticleCanvas';
import SkillCard from '../components/ui/SkillCard';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import styles from './Home.module.css';

const WHEEL_TAGS = ['React', 'Node.js', 'STM32', 'PyTorch', 'C++17', 'PostgreSQL', 'LLVM', 'Docker', 'PySpark', 'Verilog'];

function getIcon(tags) {
  if (tags.includes('Networking') || tags.includes('UDP')) return '⚡';
  if (tags.includes('Compilers') || tags.includes('Parsing')) return '◈';
  if (tags.includes('Embedded')) return '⊕';
  return '⬡';
}

const tickerRow1 = skillGroups.slice(0, 3).flatMap(g => g.items);
const tickerRow2 = skillGroups.slice(3).flatMap(g => g.items);

export default function Home() {
  const featured = projects.filter(p => p.featured).slice(0, 3);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = featured[activeIdx];
  const navigate = useNavigate();

  // Tag wheel: direct DOM manipulation to avoid re-renders
  const wheelRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const R = 108, cx = 140, cy = 140, n = WHEEL_TAGS.length;
    const container = wheelRef.current;
    if (!container) return;
    const tagEls = container.querySelectorAll('[data-idx]');

    const interval = setInterval(() => {
      angleRef.current += 0.3;
      tagEls.forEach((el, i) => {
        const a = ((angleRef.current + i * (360 / n)) * Math.PI) / 180;
        const x = cx + R * Math.cos(a);
        const y = cy + R * Math.sin(a);
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = String((0.4 + 0.6 * ((Math.sin(a) + 1) / 2)).toFixed(2));
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <ParticleCanvas />
        <div className={styles.perspGrid} aria-hidden="true" />
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              CE · FULL-STACK · AI/DATA · EMBEDDED
            </div>

            <div className={styles.headlineWrap}>
              <div className={styles.clip}><h1 className={`${styles.headlineLine} ${styles.hl1}`}>Engineering systems</h1></div>
              <div className={styles.clip}><h1 className={`${styles.headlineLine} ${styles.hl2}`}>from hardware</h1></div>
              <div className={styles.clip}><h1 className={`${styles.headlineLine} ${styles.hl3} ${styles.accent}`}>to production web.</h1></div>
            </div>

            <p className={styles.subhead}>
              Computer Engineering student building full-stack applications, embedded systems,
              and compilers. Strong systems thinking across networking, security, and modern web.
            </p>

            <div className={styles.ctas}>
              <Button to="/projects" variant="primary" size="lg">View Projects</Button>
              <Button href="/CV.pdf" target="_blank" variant="ghost" size="lg">Resume</Button>
              <Button to="/contact" variant="subtle" size="lg">Contact</Button>
            </div>

            <div className={styles.social}>
              <a className={styles.socialLink} href="https://github.com/ahmed-khaled04" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className={styles.socialLink} href="https://www.linkedin.com/in/ahmed-khaled-a70273277/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className={styles.socialLink} href="https://www.kaggle.com/ahmedkhaled375/" target="_blank" rel="noreferrer">Kaggle ↗</a>
              <span className={styles.availBadge}>
                <span className={styles.availDot} aria-hidden="true" />
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Right */}
          <div className={styles.heroRight}>
            {/* Identity Card */}
            <div className={styles.cardOuter}>
              <div className={styles.cardInner}>
                <div className={styles.identity}>
                  <div className={styles.avatarWrap}>
                    <img src="/me.jpeg" alt="Ahmed Khaled" className={styles.avatar}
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                    <div className={styles.avatarFallback} style={{ display: 'none' }}>AK</div>
                    <span className={styles.statusDot} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={styles.idName}>Ahmed Khaled</h3>
                    <p className={styles.idRole}>Computer Engineering · Full-Stack · AI</p>
                  </div>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statRow}>
                    <span className={styles.statLabel}>Primary stack</span>
                    <span className={styles.statValue}>React · Node · DB</span>
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

                <div className={styles.openBadge}>
                  <span className={styles.openDot} aria-hidden="true" />
                  Open to opportunities
                </div>
              </div>
            </div>

            {/* Tag Wheel */}
            <div className={styles.tagWheel} ref={wheelRef} aria-hidden="true">
              <div className={styles.wheelCenter}>AK</div>
              <div className={styles.wheelRing} />
              {WHEEL_TAGS.map((tag, i) => (
                <span key={tag} data-idx={i} className={styles.wheelTag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollLabel}>SCROLL</span>
          <span className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className={styles.showcaseSection}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseHeader}>
            <div>
              <p className={styles.sectionEyebrow}>Selected Work</p>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
            </div>
            <span className={styles.ghostNum} aria-hidden="true">
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
          </div>

          <div className={styles.showcaseGrid}>
            {/* Visual card */}
            <button
              type="button"
              className={styles.visualCard}
              onClick={() => navigate(`/projects/${activeProject.slug}`)}
              aria-label={`Open ${activeProject.title}`}
            >
              <div className={styles.visualGrid} />
              <span className={styles.visualIcon} aria-hidden="true">
                {getIcon(activeProject.tags)}
              </span>
              <span className={styles.visualTag}>{activeProject.tags[0]}</span>
              <span className={styles.visualOpen}>Open →</span>
            </button>

            {/* Text */}
            <div className={styles.showcaseText}>
              <div className={styles.tagRow}>
                {activeProject.tags.slice(0, 3).map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <h3 className={styles.showcaseTitle}>{activeProject.title}</h3>
              <p className={styles.showcaseSummary}>{activeProject.summary}</p>

              <div className={styles.dotNav}>
                {featured.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show project ${i + 1}`}
                  />
                ))}
              </div>

              <div className={styles.showcaseActions}>
                <Button to={`/projects/${activeProject.slug}`} variant="primary">
                  View Details →
                </Button>
                <Button to="/projects" variant="ghost">
                  All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className={styles.skillsSection}>
        <div className={styles.tickerWrap}>
          <div className={styles.tickerRow}>
            {[...tickerRow1, ...tickerRow1].map((item, i) => (
              <span key={i} className={styles.tickerItem}>{item}</span>
            ))}
          </div>
          <div className={`${styles.tickerRow} ${styles.tickerReverse}`}>
            {[...tickerRow2, ...tickerRow2].map((item, i) => (
              <span key={i} className={styles.tickerItem}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.skillsInner}>
          <FadeUp>
            <p className={styles.sectionEyebrow}>Expertise</p>
            <h2 className={styles.sectionTitle}>Technical Foundations</h2>
            <p className={styles.sectionDesc}>
              Systems thinking: embedded C/C++, data structures, networking protocols, and full-stack web.
            </p>
          </FadeUp>

          <div className={styles.skillsGrid}>
            {skillGroups.map((g, i) => (
              <FadeUp key={g.title} delay={i * 80}>
                <SkillCard title={g.title} highlight={g.highlight} items={g.items} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
