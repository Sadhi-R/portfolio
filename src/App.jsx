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
      <div className='relative z-0 min-h-screen bg-primary text-[var(--text-primary)] transition-colors duration-300'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
