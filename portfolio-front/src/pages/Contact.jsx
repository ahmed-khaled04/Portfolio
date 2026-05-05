import { useState } from 'react';
import FadeUp from '../components/ui/FadeUp';
import Button from '../components/ui/Button';
import styles from './Contact.module.css';

const EMAIL = 'ahmed_khalid04@hotmail.com';

const LINKS = [
  { label: 'GitHub',   note: 'Projects & code',       icon: '⊕', href: 'https://github.com/ahmed-khaled04' },
  { label: 'LinkedIn', note: 'Work & background',      icon: '◈', href: 'https://www.linkedin.com/in/ahmed-khaled-a70273277/' },
  { label: 'Kaggle',   note: 'ML notebooks',           icon: '◪', href: 'https://www.kaggle.com/ahmedkhaled375/' },
  { label: 'Email',    note: EMAIL,                    icon: '⬡', href: `mailto:${EMAIL}` },
];

function validate(f) {
  const errs = {};
  if (!f.name.trim()) errs.name = 'Name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) errs.email = 'Valid email required';
  if (f.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('sending');
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 800);
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <FadeUp>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Let's build something</h1>
          <p className={styles.subtitle}>
            Have an opportunity, a project idea, or want to collaborate — reach out.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {/* Form */}
          <FadeUp delay={100}>
            {status === 'sent' ? (
              <div className={styles.successPanel}>
                <span className={styles.successIcon}>✓</span>
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successText}>Thanks for reaching out. I'll get back to you soon.</p>
                <Button type="button" variant="ghost" onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send another
                </Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject <span className={styles.optional}>(optional)</span></label>
                  <input
                    id="subject"
                    name="subject"
                    className={styles.input}
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me what you're working on..."
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'sending'}
                  className={styles.submitBtn}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </FadeUp>

          {/* Sidebar */}
          <FadeUp delay={200}>
            <div className={styles.sidebar}>
              <div className={styles.linksCard}>
                {LINKS.map(l => (
                  <a key={l.label} href={l.href} className={styles.linkRow} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <div className={styles.linkIcon} aria-hidden="true">{l.icon}</div>
                    <div className={styles.linkText}>
                      <span className={styles.linkLabel}>{l.label}</span>
                      <span className={styles.linkNote}>{l.note}</span>
                    </div>
                    <span className={styles.linkArrow} aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              <div className={styles.availCard}>
                <span className={styles.availDot} aria-hidden="true" />
                <div>
                  <p className={styles.availTitle}>Available now</p>
                  <p className={styles.availText}>Open to internships, part-time, or project-based work in software engineering, embedded systems, and AI/data.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
