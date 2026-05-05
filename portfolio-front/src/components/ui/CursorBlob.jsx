import { useEffect, useRef } from 'react';
import styles from './CursorBlob.module.css';

export default function CursorBlob() {
  const ref = useRef(null);
  const pos = useRef({ x: -400, y: -400, cx: -400, cy: -400 });

  useEffect(() => {
    function onMove(e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    }
    window.addEventListener('mousemove', onMove);

    let raf;
    function loop() {
      const p = pos.current;
      p.cx += (p.x - p.cx) * 0.07;
      p.cy += (p.y - p.cy) * 0.07;
      if (ref.current) {
        ref.current.style.transform = `translate(${p.cx - 200}px, ${p.cy - 200}px)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className={styles.blob} aria-hidden="true" />;
}
