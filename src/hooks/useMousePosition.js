import { useEffect, useState } from "react";

import usePrefersReducedMotion from "./usePrefersReducedMotion";

const useMousePosition = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [position, setPosition] = useState({
    x: 0.5,
    y: 0.5,
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handlePointerMove = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      setPosition({
        x,
        y,
        clientX: event.clientX,
        clientY: event.clientY,
      });

      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--mouse-x-pct", `${x * 100}%`);
      document.documentElement.style.setProperty("--mouse-y-pct", `${y * 100}%`);
      document.documentElement.style.setProperty("--mouse-parallax-x", `${(x - 0.5) * 2}`);
      document.documentElement.style.setProperty("--mouse-parallax-y", `${(y - 0.5) * 2}`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion]);

  return { ...position, prefersReducedMotion };
};

export default useMousePosition;
