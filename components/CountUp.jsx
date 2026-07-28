"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ end, suffix = "", duration = 1600, className = "" }) {
  const target = useRef(null);
  const [value, setValue] = useState(0);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const node = target.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || played) return;
      setPlayed(true);
    }, { threshold: 0.55 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [played]);

  useEffect(() => {
    if (!played) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end, played]);

  return <strong ref={target} className={`count-up ${className}`}>{value.toLocaleString()}{suffix}</strong>;
}
