import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Ahmed Khaled
        </p>

        <div className={styles.links}>
          <a href="https://github.com/ahmed-khaled04" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ahmed-khaled-a70273277/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
