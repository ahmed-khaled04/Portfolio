import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Section eyebrow="404" title="Page not found" description="The page you’re looking for doesn’t exist (or it was moved).">
      <div className={styles.box}>
        <p className={styles.text}>
          Try going back home or browsing projects.
        </p>

        <div className={styles.actions}>
          <Button to="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button to="/projects" variant="subtle" size="lg">
            View Projects
          </Button>
          <Button to="/contact" variant="ghost" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </Section>
  );
}
