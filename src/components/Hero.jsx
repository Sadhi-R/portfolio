import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";

import { styles } from "../styles";
import { profile } from "../assets";
import MagneticButton from "./effects/MagneticButton";
import { fadeIn, staggerContainer } from "../utils/motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const heroStats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "1,000+", label: "Users Served" },
];

const TiltPortrait = ({ children }) => {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 24 });

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(x * 14);
    rotateX.set(-y * 14);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className='tilt-portrait'
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className='relative mx-auto flex min-h-screen w-full items-center pt-28 sm:pt-32'>
      <motion.div
        variants={staggerContainer(0.12, 0.15)}
        initial='hidden'
        animate='show'
        className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 ${styles.paddingX} pb-20 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]`}
      >
        <div className='max-w-3xl'>
          <motion.div
            variants={fadeIn("up", "spring", 0, 0.8)}
            className='glass-chip mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase text-secondary'
          >
            <FiCheckCircle className='text-[var(--success)]' aria-hidden='true' />
            Available for software engineering roles
          </motion.div>

          <motion.h1 variants={fadeIn("up", "spring", 0.1, 0.9)} className={styles.heroHeadText}>
            Hi, I&apos;m{" "}
            <span className='hero-gradient-text'>Sadaiah Ramtenki</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.2, 0.9)}
            className={`${styles.heroSubText} mt-5 max-w-2xl text-secondary`}
          >
            Software engineer focused on React, Java, Flutter, and practical product delivery. I build clean,
            scalable applications that feel polished for users and reliable for teams.
          </motion.p>

          <motion.div variants={fadeIn("up", "spring", 0.3, 0.9)} className='mt-8 flex flex-col gap-3 xs:flex-row'>
            <MagneticButton
              href='#hire'
              className='theme-focus btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-glow transition duration-300'
            >
              <FiBriefcase aria-hidden='true' />
              Hire Me
            </MagneticButton>
            <MagneticButton
              href='#work'
              className='theme-focus glass-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition duration-300'
            >
              View Projects
              <FiArrowRight aria-hidden='true' />
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.4, 0.9)}
            className='mt-9 grid max-w-xl grid-cols-3 gap-3'
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className='glass-stat rounded-2xl p-4'>
                <p className='text-2xl font-black text-[var(--text-primary)]'>{stat.value}</p>
                <p className='mt-1 text-xs leading-5 text-secondary'>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.25, 1)}
          className='relative mx-auto w-full max-w-[320px] lg:mr-0 xl:max-w-[360px]'
        >
          <div className='portrait-glow absolute inset-0 rounded-3xl' aria-hidden='true' />
          <TiltPortrait>
            <div className='absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border border-[var(--border-color)] bg-[var(--hero-accent-panel)] sm:block' />
            <div className='surface-card glass-portrait relative overflow-hidden rounded-3xl p-3'>
              <div className='relative overflow-hidden rounded-2xl bg-[var(--surface-soft)]'>
                <img
                  src={profile}
                  alt='Sadaiah Ramtenki profile'
                  className='profile-portrait h-[320px] w-full object-cover sm:h-[380px] lg:h-[420px]'
                />
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white'>
                  <p className='text-lg font-bold text-white'>Sadaiah Ramtenki</p>
                  <p className='mt-1 text-sm text-white/85'>Software Engineer</p>
                </div>
              </div>
            </div>
          </TiltPortrait>
        </motion.div>
      </motion.div>

      <div className='absolute bottom-6 left-0 hidden w-full items-center justify-center sm:flex'>
        <a href='#about' aria-label='Scroll to about section' className='cursor-pointer'>
          <div className='scroll-indicator flex h-[58px] w-[32px] items-start justify-center rounded-3xl border-2 border-[var(--border-color)] p-2'>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='mb-1 h-3 w-3 rounded-full bg-[var(--accent)]'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
