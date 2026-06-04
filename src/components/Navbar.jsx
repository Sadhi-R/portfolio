import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeButton = (
    <button
      type='button'
      onClick={onToggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className='theme-focus flex h-10 w-[76px] items-center rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] p-1 transition hover:border-[var(--accent)]'
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-sm transition-transform duration-300 ${
          theme === "dark" ? "translate-x-0" : "translate-x-8"
        }`}
      >
        {theme === "dark" ? <FiMoon aria-hidden='true' /> : <FiSun aria-hidden='true' />}
      </span>
    </button>
  );

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-30 w-full border-b border-transparent py-3 transition-all duration-300 ${
        scrolled
          ? "border-[var(--border-color)] bg-[var(--surface-bg)]/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='Sadhi Ramtenki logo' className='h-10 w-10 rounded-full object-contain' />
          <p className='flex cursor-pointer flex-col text-sm font-bold leading-tight text-[var(--text-primary)] sm:text-base'>
            Sadhi Ramtenki
            <span className='text-xs font-medium text-secondary sm:text-sm'>Software Engineer</span>
          </p>
        </Link>

        <div className='hidden items-center gap-5 lg:flex'>
          <ul className='flex list-none flex-row gap-5'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[15px] font-medium transition ${
                  active === nav.title ? "text-[var(--text-primary)]" : "text-secondary"
                } hover:text-[var(--text-primary)]`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          {themeButton}
        </div>

        <div className='flex flex-1 items-center justify-end gap-3 lg:hidden'>
          {themeButton}
          <button
            type='button'
            aria-label='Toggle navigation menu'
            className='theme-focus flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)]'
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-5 top-16 my-2 min-w-[210px] rounded-lg border border-[var(--border-color)] bg-[var(--surface-bg)]/95 p-5 shadow-card backdrop-blur-md sm:right-8`}
          >
            <ul className='flex list-none flex-1 flex-col items-start justify-end gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? "text-[var(--text-primary)]" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
