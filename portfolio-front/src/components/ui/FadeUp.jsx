import { useInView } from '../../hooks/useInView';
import styles from './FadeUp.module.css';

export default function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.base} ${inView ? styles.visible : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
