import React from "react";
import { FiCpu, FiTrendingUp, FiZap } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const aiInterests = [
  {
    title: "AI Tools Expertise",
    description:
      "Exploring and applying practical AI tools to improve productivity, experimentation, and development workflows.",
    Icon: FiCpu,
  },
  {
    title: "Development Acceleration",
    description:
      "Using AI-assisted workflows for code generation, testing support, refactoring, and faster iteration.",
    Icon: FiZap,
  },
  {
    title: "Technology Innovation",
    description:
      "Continuously learning emerging technologies and adapting them into useful, maintainable software solutions.",
    Icon: FiTrendingUp,
  },
];

const AITechnology = () => {
  return (
    <section>
      <div>
        <p className={styles.sectionSubText}>My passion</p>
        <h2 className={styles.sectionHeadText}>AI & Technology.</h2>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {aiInterests.map(({ title, description, Icon }) => (
          <div
            key={title}
            className='surface-card rounded-lg p-6 transition duration-300 hover:border-[var(--accent)]'
          >
            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]'>
              <Icon size={24} aria-hidden='true' />
            </div>
            <h3 className='mb-3 text-xl font-bold text-[var(--text-primary)]'>{title}</h3>
            <p className='text-[15px] leading-7 text-secondary'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(AITechnology, "");
