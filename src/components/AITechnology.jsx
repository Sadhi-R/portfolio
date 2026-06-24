import { motion } from "framer-motion";
import { FiCpu, FiLayers, FiTrendingUp, FiZap } from "react-icons/fi";

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
    span: "lg:col-span-2",
    featured: true,
  },
  {
    title: "Development Acceleration",
    description:
      "Using AI-assisted workflows for code generation, testing support, refactoring, and faster iteration.",
    Icon: FiZap,
    accent: "from-[var(--success)] to-[#22d3ee]",
    span: "",
    featured: false,
  },
  {
    title: "Technology Innovation",
    description:
      "Continuously learning emerging technologies and adapting them into useful, maintainable software solutions.",
    Icon: FiTrendingUp,
    accent: "from-[#6366f1] to-[var(--accent)]",
    span: "",
    featured: false,
  },
];

const aiTools = [
  "Cursor",
  "GitHub Copilot",
  "ChatGPT",
  "Claude",
  "Gemini",
  "D3E Platform",
  "LangChain",
  "Prompt Engineering",
];

const aiStats = [
  { value: "AI-First", label: "Development approach" },
  { value: "D3E", label: "NL-to-app platform" },
  { value: "3+", label: "Years shipping products" },
];

const AITechnology = () => {
  return (
    <section>
      <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
        <div className='max-w-2xl'>
          <p className={styles.sectionSubText}>My passion</p>
          <h2 className={styles.sectionHeadText}>
            AI & <span className='hero-gradient-text'>Technology</span>.
          </h2>
          <p className='mt-4 text-base leading-7 text-secondary sm:text-[17px]'>
            I combine modern AI tooling with solid engineering to ship faster without sacrificing
            quality — from rapid prototyping to production-ready systems.
          </p>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.1, 0.75)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='ai-stats-row flex shrink-0 flex-wrap gap-3'
        >
          {aiStats.map(({ value, label }) => (
            <div key={label} className='ai-stat-chip glass-stat rounded-xl px-5 py-3'>
              <span className='block text-lg font-black text-[var(--text-primary)]'>{value}</span>
              <span className='block text-xs text-secondary'>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.08)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className='mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3'
      >
        {aiInterests.map(({ title, description, Icon, accent, span, featured }, index) => (
          <motion.div
            key={title}
            variants={fadeIn("up", "spring", index * 0.08, 0.75)}
            className={`ai-bento-card group relative overflow-hidden rounded-2xl p-[1px] ${span}`}
          >
            <div className={`ai-card-border absolute inset-0 bg-gradient-to-br ${accent} opacity-60`} />
            <div
              className={`ai-bento-inner relative h-full overflow-hidden rounded-[15px] ${
                featured ? "ai-bento-inner--featured" : ""
              }`}
            >
              <div className='ai-bento-glow absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl' aria-hidden='true' />

              {featured ? (
                <div className='flex h-full flex-col justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8'>
                  <div className='max-w-lg'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='ai-bento-icon flex h-12 w-12 items-center justify-center rounded-xl'>
                        <Icon size={24} aria-hidden='true' />
                      </div>
                      <span className='ai-bento-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide'>
                        Core focus
                      </span>
                    </div>
                    <h3 className='mb-3 text-2xl font-bold text-[var(--text-primary)] sm:text-[26px]'>
                      {title}
                    </h3>
                    <p className='text-[15px] leading-7 text-secondary'>{description}</p>
                  </div>

                  <div className='ai-tools-panel shrink-0 rounded-xl p-5 sm:max-w-[240px]'>
                    <div className='mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-secondary'>
                      <FiLayers size={14} aria-hidden='true' />
                      Tools I use
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {aiTools.map((tool) => (
                        <span key={tool} className='ai-tool-tag rounded-md px-2.5 py-1 text-xs font-medium'>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex h-full flex-col p-6'>
                  <div className='ai-bento-icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110'>
                    <Icon size={24} aria-hidden='true' />
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-[var(--text-primary)]'>{title}</h3>
                  <p className='text-[15px] leading-7 text-secondary'>{description}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(AITechnology, "");
