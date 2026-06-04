import { motion } from "framer-motion";

import { styles } from "../styles";
import { creator } from "../assets";

const Hero = () => {
  return (
    <section className='relative mx-auto flex min-h-screen w-full items-center pt-28 sm:pt-32'>
      <div
        className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 ${styles.paddingX} pb-16 md:grid-cols-[1.2fr_1fr]`}
      >
        <div className='flex items-start gap-5'>
          <div className='mt-3 flex flex-col items-center justify-center'>
            <div className='h-5 w-5 rounded-full bg-[#915EFF]' />
            <div className='violet-gradient h-32 w-1 sm:h-56' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-[var(--text-primary)]`}>
              Hi, I&apos;m <span className='text-[#915EFF]'>Sadhi Ramtenki</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-secondary`}>
              Software engineer building reliable, scalable, and business-focused products.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href='#hire'
                className='rounded-lg bg-[#915EFF] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90'
              >
                Hire Me
              </a>
              <a
                href='#work'
                className='rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:opacity-90'
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className='mx-auto w-full max-w-[320px] sm:max-w-[380px]'>
          <img
            src={creator}
            alt='Sadhi Ramtenki profile'
            className='profile-image w-full rounded-3xl object-cover shadow-xl'
          />
        </div>
      </div>

      <div className='absolute bottom-6 left-0 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='flex h-[62px] w-[34px] items-start justify-center rounded-3xl border-2 border-[var(--border-color)] p-2'>
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='mb-1 h-3 w-3 rounded-full bg-[#915EFF]'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
