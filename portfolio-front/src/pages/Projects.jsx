import { useMemo, useState } from "react";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => allTags.add(t)));
    return ["All", ...Array.from(allTags).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const list = projects.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);

      const haystack = [p.title, p.summary, ...(p.tags || []), ...(p.stack || [])]
        .join(" ")
        .toLowerCase();

      const matchesQuery = q.length === 0 || haystack.includes(q);

      return matchesTag && matchesQuery;
    });

    return list.sort((a, b) => {
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if (fb !== fa) return fb - fa;
      return a.title.localeCompare(b.title);
    });
  }, [query, activeTag]);

  return (
    <Section
      eyebrow="Projects"
      title="All Projects"
      description="Search and filter by category to quickly find what you’re looking for."
    >
      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <input
            className={styles.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (e.g., UDP, Tiva-C, compiler)..."
            aria-label="Search projects"
          />
        </div>

        <div className={styles.chips} role="tablist" aria-label="Project filters">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={`${styles.chip} ${activeTag === t ? styles.active : ""}`}
              onClick={() => setActiveTag(t)}
              role="tab"
              aria-selected={activeTag === t}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.count}>
          Showing <strong>{filtered.length}</strong> of{" "}
          <strong>{projects.length}</strong>
        </span>

        {(query || activeTag !== "All") && (
          <button
            className={styles.clear}
            type="button"
            onClick={() => {
              setQuery("");
              setActiveTag("All");
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => (
          <Card
            key={p.slug}
            className={`${styles.card} ${p.featured ? styles.featured : ""}`.trim()}
          >
            <div className={styles.cardTop}>
              <h3 className={styles.title}>{p.title}</h3>
              <Button to={`/projects/${p.slug}`} variant="subtle" size="sm">
                Details
              </Button>
            </div>
            
            {p.featured && <div className={styles.featuredBadge}>Featured</div>}

            <p className={styles.summary}>{p.summary}</p>

            <div className={styles.tags}>
              {p.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>No matching projects.</p>
          <p className={styles.emptyText}>
            Try a different keyword or clear filters.
          </p>
        </div>
      )}
    </Section>
  );
}
