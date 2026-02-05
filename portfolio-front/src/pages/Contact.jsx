import { useState } from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import styles from "./Contact.module.css";

const EMAIL = "ahmed_khalid04@hotmail.com";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ahmed-khaled04",
    note: "Projects & code",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-khaled-a70273277/",
    note: "Work & background",
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/ahmedkhaled375/",
    note: "ML notebooks",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: do nothing (browser may block clipboard without HTTPS)
    }
  }

  return (
    <>
      <Section
        eyebrow="Contact"
        title="Let’s build something"
        description="If you have an opportunity, a project idea, or want to collaborate—reach out."
      >
        <div className={styles.grid}>
          {/* Left: email card */}
          <div className={styles.card}>
            <p className={styles.kicker}>Email</p>
            <p className={styles.big}>{EMAIL}</p>

            <div className={styles.actions}>
              <Button href={`mailto:${EMAIL}`} variant="primary" size="lg">
                Send Email
              </Button>

              <button className={styles.copyBtn} onClick={copyEmail} type="button">
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>

            <p className={styles.smallMuted}>
              Prefer LinkedIn? Use the links on the right.
            </p>

            {/* Availability INSIDE email card */}
            <div className={styles.inlineAvailability}>
              <p className={styles.kicker}>Availability</p>
              <h3 className={styles.availabilityTitle}>Open to opportunities</h3>

              <p className={styles.availabilityDesc}>
                Internships, part-time, or project-based work in software engineering,
                embedded systems, and AI/data.
              </p>

              <div className={styles.availabilityStatus}>
                <span className={styles.statusDot} />
                <span>Currently available — feel free to reach out.</span>
              </div>
            </div>
          </div>


          {/* Right: socials */}
          <div className={styles.socialCol}>
            {socials.map((s) => (
              <a
                key={s.name}
                className={styles.socialCard}
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.socialTop}>
                  <span className={styles.socialName}>{s.name}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
                <p className={styles.socialNote}>{s.note}</p>
              </a>
            ))}

            <div className={styles.tip}>
              <p className={styles.tipTitle}>Quick tip</p>
              <p className={styles.tipText}>
                When messaging, include what you’re building + timeline. I reply faster with clear details.
              </p>
            </div>

            
          </div>

        </div>
      </Section>

      
    </>
  );
}
