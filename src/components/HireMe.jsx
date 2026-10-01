import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";

import { sadhi2 } from "../assets";
import resumeFile from "../assets/New-Updated-Resume-Sadhi.pdf";
import { SectionWrapper } from "../hoc";

const highlights = [
  "Full-stack development with React, Next.js, TypeScript, Flutter, Java, and Node.js",
  "AI/ML & generative AI — prompting, RAG, vector search, custom agents, and MCP tools",
  "AI-assisted software generation on the D3E platform (prompt → complete applications)",
  "Production systems with REST APIs, PostgreSQL, Docker, and CI/CD ownership",
];

const HireMe = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]'>
      <div className='mx-auto w-full max-w-[340px] lg:mx-0'>
        <div className='overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)]'>
          <img
            src={sadhi2}
            alt='Sadhi Ramtenki profile portrait'
            loading='lazy'
            decoding='async'
            className='profile-portrait aspect-[4/5] w-full object-cover'
          />
        </div>
        <div className='mt-4 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] p-4'>
          <div className='flex items-center gap-2 text-sm font-medium text-secondary'>
            <FiMapPin className='text-[var(--accent)]' aria-hidden='true' />
            Open to hybrid, remote, and on-site roles
          </div>
        </div>
      </div>

      <div>
        <p className='text-sm font-semibold uppercase text-secondary sm:text-[15px]'>Let&apos;s collaborate</p>
        <h2 className='mt-2 text-3xl font-black leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl'>
          Hire Me
        </h2>
        <p className='mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-[17px]'>
          Software engineer with 4+ years building full-stack apps, AI-driven platforms, and production systems.
          If you need someone who can own features end-to-end — from React/Next.js and Flutter to AI/ML workflows —
          I&apos;d be glad to talk.
        </p>

        <div className='mt-6 grid gap-3'>
          {highlights.map((item) => (
            <div
              key={item}
              className='flex items-start gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] p-4 text-sm text-secondary'
            >
              <span className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--success)]' />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className='mt-7 flex flex-col gap-3 xs:flex-row'>
          <a
            href={resumeFile}
            download='Sadhi-Ramtenki-Resume.pdf'
            className='theme-focus btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition'
          >
            <FiDownload aria-hidden='true' />
            Download Resume / CV
          </a>
          <a
            href='#contact'
            className='theme-focus inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]'
          >
            <FiMail aria-hidden='true' />
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(HireMe, "hire");
