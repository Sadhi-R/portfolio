import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const NAV_OFFSET = 80;

const getSection = (id) => {
  const anchor = document.getElementById(id);
  return anchor ? anchor.closest("section") || anchor : null;
};

const Navbar = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((nav) => {
        const section = getSection(nav.id);
        return section ? { ...nav, section } : null;
      })
      .filter(Boolean);

    if (!sections.length) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navId = entry.target.dataset.navId;
          if (!navId) return;

          if (entry.isIntersecting) {
            visible.set(navId, entry.intersectionRatio);
          } else {
            visible.delete(navId);
          }
        });

        const activeSection = [...sections]
          .reverse()
          .find((nav) => visible.has(nav.id));

        setActive(activeSection?.title ?? "");
      },
      {
        rootMargin: `-${NAV_OFFSET + 24}px 0px -50% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((nav) => {
      nav.section.dataset.navId = nav.id;
      observer.observe(nav.section);
    });

    return () => observer.disconnect();
  }, []);

  const getNavLinkClass = (title) =>
    `nav-link${active === title ? " nav-link-active" : ""}`;

  const handleNavClick = (event, nav) => {
    event.preventDefault();
    setActive(nav.title);
    setToggle(false);

    const section = getSection(nav.id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

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
          <img src={logo} alt='Sadaiah Ramtenki logo' className='h-10 w-10 rounded-full object-contain' />
          <p className='flex cursor-pointer flex-col text-sm font-bold leading-tight text-[var(--text-primary)] sm:text-base'>
            Sadaiah Ramtenki
            <span className='text-xs font-medium text-secondary sm:text-sm'>Software Engineer</span>
          </p>
        </Link>

        <div className='hidden items-center gap-5 lg:flex'>
          <ul className='flex list-none flex-row gap-2'>
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={(event) => handleNavClick(event, nav)}
                  className={getNavLinkClass(nav.title)}
                  aria-current={active === nav.title ? "page" : undefined}
                >
                  {nav.title}
                </a>
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
            <ul className='flex list-none flex-1 flex-col items-start justify-end gap-2'>
              {navLinks.map((nav) => (
                <li key={nav.id} className='w-full'>
                  <a
                    href={`#${nav.id}`}
                    onClick={(event) => handleNavClick(event, nav)}
                    className={`${getNavLinkClass(nav.title)} w-full text-[16px]`}
                    aria-current={active === nav.title ? "page" : undefined}
                  >
                    {nav.title}
                  </a>
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
