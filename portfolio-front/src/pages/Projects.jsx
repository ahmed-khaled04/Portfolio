import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeUp from '../components/ui/FadeUp';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const CATEGORIES = [
  { key: 'all',      label: 'Everything', icon: '∞' },
  { key: 'Embedded', label: 'Embedded',   icon: '⚡' },
  { key: 'Web',      label: 'Web',        icon: '⬡' },
  { key: 'ML',       label: 'ML · Data',  icon: '◈' },
  { key: 'Systems',  label: 'Systems',    icon: '◪' },
];

const PROJECT_CATS = {
  'sync-clash':                  ['Systems'],
  'door-lock-tivac':             ['Embedded'],
  'python-compiler-lexer-parser':['Systems'],
  'banking-system':              ['Web'],
  'verilog-lint-checker':        ['Systems'],
  'ums-agile-scrum':             ['Web'],
  'reddit-clone':                ['Web'],
  'syncro-collab-editor':        ['Web'],
};

function getIcon(tags) {
  if (tags.includes('Networking') || tags.includes('UDP')) return '⚡';
  if (tags.includes('Compilers') || tags.includes('Parsing')) return '◈';
  if (tags.includes('Embedded')) return '⊕';
  if (tags.includes('Full-Stack') || tags.includes('API')) return '⬡';
  return '⬡';
}

export default function Projects() {
  const [cat, setCat] = useState('all');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const list = projects.filter(p =>
      cat === 'all' || (PROJECT_CATS[p.slug] || []).includes(cat)
    );
    return list.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [cat]);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <p className={styles.eyebrow}>Work</p>
            <h1 className={styles.title}>Projects</h1>
          </div>
          <span className={styles.ghostCount} aria-hidden="true">
            {String(filtered.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Category filter */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              type="button"
              className={`${styles.filterTab} ${cat === c.key ? styles.filterActive : ''}`}
              onClick={() => setCat(c.key)}
            >
              <span className={styles.filterIcon} aria-hidden="true">{c.icon}</span>
              {c.label}
              {cat === c.key && (
                <span className={styles.filterCount}>{filtered.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {filtered.map((p, i) => {
            const isWide = i === 0;
            return (
              <FadeUp key={p.slug} delay={i * 60}>
                <button
                  type="button"
                  className={`${styles.card} ${isWide ? styles.cardWide : ''}`}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  aria-label={`Open ${p.title}`}
                >
                  {/* Visual */}
                  <div className={styles.visual}>
                    <div className={styles.visualBg} />
                    <span className={styles.visualIcon} aria-hidden="true">
                      {getIcon(p.tags)}
                    </span>
                    <span className={styles.cardNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={styles.visualOverlay} />
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <span className={styles.cardOpen}>Open →</span>
                    </div>
                    {isWide && <p className={styles.cardSummary}>{p.summary}</p>}
                    <div className={styles.tagRow}>
                      {p.tags.slice(0, isWide ? 5 : 3).map(t => (
                        <span key={t} className={styles.tag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </button>
              </FadeUp>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
