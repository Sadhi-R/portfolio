import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Education,
  AITechnology,
  Hero,
  HireMe,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/Footer";
import MouseEffects from "./components/effects/MouseEffects";

const AIBackground = lazy(() => import("./components/canvas/AIBackground"));

const getInitialTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light" || currentTheme === "dark") return currentTheme;

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return "dark";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [showEffects, setShowEffects] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const idle = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 600));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;
    const handle = idle(() => setShowEffects(true));

    return () => cancelIdle(handle);
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MouseEffects />
      <motion.div
        className='fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-[var(--accent)]'
        style={{ scaleX: progressScale }}
        aria-hidden='true'
      />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div className='app-shell relative z-0 min-h-screen bg-primary text-[var(--text-primary)] transition-colors duration-300'>
        <div className='ambient-background' aria-hidden='true'>
          <div className='ai-mesh-gradient' />
          <div className='ambient-spotlight-glow' />
          <div className='ambient-orb ambient-orb-one' />
          <div className='ambient-grid' />
        </div>
        {showEffects && (
          <Suspense fallback={null}>
            <AIBackground theme={theme} />
          </Suspense>
        )}
        <div className='hero-bg'>
          <Hero />
        </div>
        <About />
        <HireMe />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <AITechnology />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
