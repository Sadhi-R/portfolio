import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";

import { styles } from "../styles";
import { educations, achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned</p>
        <h2 className={styles.sectionHeadText}>Education &amp; Achievements.</h2>
      </motion.div>

      <div className='mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-secondary'>
            <FiBookOpen className='text-[var(--accent)]' aria-hidden='true' />
            Education
          </div>

          {educations.map((education, index) => (
            <motion.div
              key={education.degree}
              variants={fadeIn("up", "spring", index * 0.15, 0.7)}
              className='surface-card rounded-lg p-6'
            >
              <h3 className='text-[18px] font-bold leading-6 text-[var(--text-primary)]'>
                {education.degree}
              </h3>
              <p className='mt-1 text-[15px] font-semibold text-[var(--accent)]'>
                {education.school}
              </p>
              <p className='mt-1 text-[13px] font-medium text-secondary'>{education.date}</p>
              <p className='mt-3 text-[14px] leading-6 text-secondary'>{education.description}</p>
            </motion.div>
          ))}
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-secondary'>
            <FiAward className='text-[var(--success)]' aria-hidden='true' />
            Key Achievements
          </div>

          <motion.ul
            variants={fadeIn("up", "spring", 0.2, 0.7)}
            className='surface-card flex flex-1 flex-col gap-4 rounded-lg p-6'
          >
            {achievements.map((achievement) => (
              <li key={achievement} className='flex items-start gap-3'>
                <span className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]'>
                  <FiAward size={14} aria-hidden='true' />
                </span>
                <span className='text-[14px] leading-6 text-secondary'>{achievement}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
