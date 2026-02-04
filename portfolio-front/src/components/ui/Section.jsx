import Container from "../layout/Container";
import styles from "./Section.module.css";

export default function Section({ eyebrow, title, description, children, className = "" }) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <Container>
        {(eyebrow || title || description) && (
          <header className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}

        <div className={styles.body}>{children}</div>
      </Container>
    </section>
  );
}
