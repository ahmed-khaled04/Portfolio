import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change via click
  function close() { setMenuOpen(false); }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} onClick={close}>
          Ahmed Khaled
          <span className={styles.logoDot} aria-hidden="true" />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={close}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={close}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={close}
          >
            Contact
          </NavLink>
          <a
            href="mailto:ahmed_khalid04@hotmail.com"
            className={styles.hireBtn}
            onClick={close}
          >
            Hire Me
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
