import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 60, scale: 0.94 },
      to: { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
    },
    index * 0.12
  );

  return (
    <Tilt className='w-full'>
      <div ref={cardRef} className='surface-card flex min-h-[220px] w-full flex-col items-center justify-center rounded-lg p-6'>
        <div className='mb-5 flex h-20 w-20 items-center justify-center rounded-lg bg-[var(--surface-soft)]'>
          <img src={icon} alt={`${title} icon`} className='h-14 w-14 object-contain' />
        </div>
        <h3 className='text-center text-[19px] font-bold text-[var(--text-primary)]'>{title}</h3>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p ref={paragraphRef} className='mt-4 max-w-3xl text-[16px] leading-8 text-secondary sm:text-[17px]'>
        I&apos;m a results-driven software engineer with 3+ years of experience building scalable,
        full-stack applications. I work across Flutter, React.js, Java, and modern AI technologies, and
        I&apos;m currently developing D3E &mdash; an AI-powered platform that turns natural-language prompts
        into complete applications. I love automating complex workflows, optimizing performance, and turning
        ideas into reliable, user-friendly software. Let&apos;s work together to bring your ideas to life!
      </p>

      <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
