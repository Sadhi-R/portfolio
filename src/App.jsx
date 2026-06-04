import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  AITechnology,
  Hero,
  HireMe,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const getInitialTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "light" || currentTheme === "dark") return currentTheme;

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
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
        <Tech />
        <Works />
        <AITechnology />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
