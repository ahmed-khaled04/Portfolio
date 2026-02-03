import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Ahmed Khaled
        </Link>

        <div className={styles.links}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
