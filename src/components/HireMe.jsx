import { creator } from "../assets";
import resumeFile from "../assets/Resume.pdf";
import { SectionWrapper } from "../hoc";

const HireMe = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.2fr]'>
      <div className='mx-auto w-full max-w-[280px] lg:mx-0'>
        <img
          src={creator}
          alt='Sadhi Ramtenki profile portrait'
          className='profile-image w-full rounded-2xl object-cover shadow-lg'
        />
      </div>

      <div>
        <p className='text-sm uppercase tracking-wider text-secondary sm:text-[16px]'>Let&apos;s Collaborate</p>
        <h2 className='mt-2 text-3xl font-black text-[var(--text-primary)] sm:text-4xl'>Hire Me</h2>
        <p className='mt-4 max-w-2xl text-base leading-7 text-secondary sm:text-[17px]'>
          I help teams deliver performant products with thoughtful UX, scalable architecture, and clean code.
          If you&apos;re looking for a software engineer who can own features end-to-end, I&apos;d love to contribute.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a
            href='#contact'
            className='rounded-lg bg-[#915EFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90'
          >
            Start a Conversation
          </a>
          <a
            href={resumeFile}
            download='Sadhi-Ramtenki-Resume.pdf'
            className='rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:opacity-90'
          >
            Download Resume / CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(HireMe, "hire");
