import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

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
      aria-label='Toggle theme'
      className='rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--text-primary)] transition hover:opacity-90'
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-30 w-full border-b border-transparent py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface-bg)]/95 backdrop-blur-md border-[var(--border-color)]"
          : "bg-transparent"
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='h-9 w-9 object-contain' />
          <p className='flex cursor-pointer text-base font-bold text-[var(--text-primary)] sm:text-lg'>
            Sadhi Ramtenki <span className='hidden sm:block'>&nbsp;| Software Engineer</span>
          </p>
        </Link>

        <div className='hidden items-center gap-6 sm:flex'>
          <ul className='flex list-none flex-row gap-6'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] font-medium transition ${
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

        <div className='flex flex-1 justify-end items-center gap-3 sm:hidden'>
          {themeButton}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='h-7 w-7 cursor-pointer object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-16 mx-4 my-2 min-w-[170px] rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)]/95 p-6 backdrop-blur-md`}
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
