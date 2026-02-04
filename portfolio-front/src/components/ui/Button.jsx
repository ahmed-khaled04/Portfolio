import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Button can render as:
 * - <button> (default)
 * - <a> if href is provided
 * - <Link> if to is provided
 */
export default function Button({
  children,
  variant = "primary", // primary | ghost | subtle
  size = "md", // sm | md | lg
  to,
  href,
  target,
  rel,
  disabled,
  type = "button",
  onClick,
  className = "",
}) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (to) {
    return (
      <Link className={cls} to={to} aria-disabled={disabled ? "true" : undefined}>
        {children}
      </Link>
    );
  }

  if (href) {
    const safeRel = target === "_blank" ? rel ?? "noreferrer" : rel;
    return (
      <a className={cls} href={href} target={target} rel={safeRel} aria-disabled={disabled ? "true" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
