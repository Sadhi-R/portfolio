import { motion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiCheckCircle } from "react-icons/fi";

import { styles } from "../styles";
import { profile } from "../assets";

const heroStats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "3", label: "Core Stacks" },
];

const Hero = () => {
  return (
    <section className='relative mx-auto flex min-h-screen w-full items-center pt-28 sm:pt-32'>
      <div
        className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 ${styles.paddingX} pb-20 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px]`}
      >
        <div className='max-w-3xl'>
          <div className='mb-5 inline-flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-xs font-semibold uppercase text-secondary'>
            <FiCheckCircle className='text-[var(--success)]' aria-hidden='true' />
            Available for software engineering roles
          </div>

          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m <span className='text-[var(--accent)]'>Sadhi Ramtenki</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 max-w-2xl text-secondary`}>
            Software engineer focused on React, Java, Flutter, and practical product delivery. I build clean,
            scalable applications that feel polished for users and reliable for teams.
          </p>

          <div className='mt-8 flex flex-col gap-3 xs:flex-row'>
            <a
              href='#hire'
              className='theme-focus btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition'
            >
              <FiBriefcase aria-hidden='true' />
              Hire Me
            </a>
            <a
              href='#work'
              className='theme-focus inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]'
            >
              View Projects
              <FiArrowRight aria-hidden='true' />
            </a>
          </div>

          <div className='mt-9 grid max-w-xl grid-cols-3 gap-3'>
            {heroStats.map((stat) => (
              <div key={stat.label} className='rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] p-4'>
                <p className='text-2xl font-black text-[var(--text-primary)]'>{stat.value}</p>
                <p className='mt-1 text-xs leading-5 text-secondary'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-[420px] lg:mr-0 xl:max-w-[470px]'>
          <div className='absolute -right-3 -top-3 hidden h-full w-full rounded-lg border border-[var(--border-color)] bg-[var(--hero-accent-panel)] sm:block' />
          <div className='surface-card relative overflow-hidden rounded-lg p-3'>
            <div className='relative overflow-hidden rounded-lg bg-[var(--surface-soft)]'>
              <img
                src={profile}
                alt='Sadhi Ramtenki profile'
                className='profile-portrait h-[410px] w-full object-cover sm:h-[500px] lg:h-[540px]'
              />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white'>
                <p className='text-lg font-bold text-white'>Sadhi Ramtenki</p>
                <p className='mt-1 text-sm text-white/85'>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-6 left-0 hidden w-full items-center justify-center sm:flex'>
        <a href='#about' aria-label='Scroll to about section'>
          <div className='flex h-[58px] w-[32px] items-start justify-center rounded-3xl border-2 border-[var(--border-color)] p-2'>
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
