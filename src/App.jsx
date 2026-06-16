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

// Three.js is heavy, so the starfield is split into its own async chunk and
// only mounted once the browser is idle. This keeps the initial load fast.
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const getInitialTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light" || currentTheme === "dark") return currentTheme;

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [showStars, setShowStars] = useState(false);

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
    // Defer the WebGL starfield until the browser is idle so it never
    // competes with painting the actual content.
    const idle =
      window.requestIdleCallback || ((cb) => window.setTimeout(cb, 1200));
    const cancelIdle =
      window.cancelIdleCallback || window.clearTimeout;
    const handle = idle(() => setShowStars(true));
    return () => cancelIdle(handle);
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
      <motion.div
        className='fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-[var(--accent)]'
        style={{ scaleX: progressScale }}
        aria-hidden='true'
      />
      <div className='app-shell relative z-0 min-h-screen bg-primary text-[var(--text-primary)] transition-colors duration-300'>
        <div className='ambient-background' aria-hidden='true'>
          <div className='ambient-grid' />
          <div className='ambient-lines ambient-lines-one' />
          <div className='ambient-lines ambient-lines-two' />
          <div className='ambient-panel ambient-panel-one' />
          <div className='ambient-panel ambient-panel-two' />
        </div>
        <div className='hero-bg bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
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
          {showStars && (
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          )}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
