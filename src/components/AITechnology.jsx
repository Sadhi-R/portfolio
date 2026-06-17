import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiZap } from "react-icons/fi";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, staggerContainer } from "../utils/motion";

const aiInterests = [
  {
    title: "AI Tools Expertise",
    description:
      "Exploring and applying practical AI tools to improve productivity, experimentation, and development workflows.",
    Icon: FiCpu,
    accent: "from-[var(--accent)] to-[#a855f7]",
  },
  {
    title: "Development Acceleration",
    description:
      "Using AI-assisted workflows for code generation, testing support, refactoring, and faster iteration.",
    Icon: FiZap,
    accent: "from-[var(--success)] to-[#22d3ee]",
  },
  {
    title: "Technology Innovation",
    description:
      "Continuously learning emerging technologies and adapting them into useful, maintainable software solutions.",
    Icon: FiTrendingUp,
    accent: "from-[#6366f1] to-[var(--accent)]",
  },
];

const AITechnology = () => {
  return (
    <section>
      <div>
        <p className={styles.sectionSubText}>My passion</p>
        <h2 className={styles.sectionHeadText}>
          AI & <span className='hero-gradient-text'>Technology</span>.
        </h2>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'
      >
        {aiInterests.map(({ title, description, Icon, accent }, index) => (
          <motion.div
            key={title}
            variants={fadeIn("up", "spring", index * 0.08, 0.75)}
            className='ai-card group relative overflow-hidden rounded-2xl p-[1px]'
          >
            <div className={`ai-card-border absolute inset-0 bg-gradient-to-br ${accent} opacity-70`} />
            <div className='ai-card-inner surface-card relative h-full rounded-[15px] p-6 transition duration-300'>
              <div className='ai-card-glow absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl' aria-hidden='true' />
              <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] transition duration-300 group-hover:scale-110'>
                <Icon size={24} aria-hidden='true' />
              </div>
              <h3 className='mb-3 text-xl font-bold text-[var(--text-primary)]'>{title}</h3>
              <p className='text-[15px] leading-7 text-secondary'>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(AITechnology, "");
