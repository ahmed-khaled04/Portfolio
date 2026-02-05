import styles from "./SkillCard.module.css";

export default function SkillCard({ title, highlight, items }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.highlight}>{highlight}</span>
      </div>

      <div className={styles.items}>
        {items.map((x) => (
          <span key={x} className={styles.pill}>
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
