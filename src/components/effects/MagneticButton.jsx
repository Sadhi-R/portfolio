import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const MagneticButton = ({ children, className = "", strength = 0.35, ...props }) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      className='inline-flex'
    >
      <a className={`cursor-pointer ${className}`} {...props}>
        {children}
      </a>
    </motion.div>
  );
};

export default MagneticButton;
