import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--card-bg)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 18px 55px var(--shadow-color)",
        borderRadius: "8px",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--card-bg)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "16px",
        padding: "6px",
        boxShadow:
          "0 0 0 4px var(--bg-primary), 0 12px 30px var(--shadow-color)",
      }}
      icon={
        <div className='flex h-full w-full items-center justify-center'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading='lazy'
            decoding='async'
            className='h-full w-full rounded-[12px] bg-white object-contain p-1'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[22px] font-bold text-[var(--text-primary)] sm:text-[24px]'>{experience.title}</h3>
        <p
          className='text-secondary text-[15px] font-semibold sm:text-[16px]'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='pl-1 text-[14px] leading-6 text-secondary'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-12 flex flex-col sm:mt-16'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
