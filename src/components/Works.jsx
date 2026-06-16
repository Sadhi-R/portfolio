import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating project cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className='h-full'>
      <Tilt
        options={{
          max: 18,
          scale: 1,
          speed: 450,
        }}
        className='surface-card flex h-full w-full flex-col rounded-lg p-4'
      >
        <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[var(--surface-soft)]'>
          <img
            src={image}
            alt={`${name} project preview`}
            loading='lazy'
            decoding='async'
            className='h-full w-full object-cover object-left'
          />

          <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
            >
              <img
                src={github}
                alt='source code'
                className='h-1/2 w-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex flex-1 flex-col'>
          <h3 className='text-[20px] font-bold leading-7 text-[var(--text-primary)]'>{name}</h3>
          <p className='mt-3 text-[14px] leading-6 text-secondary'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    // Stagger effect for project cards
    gsap.fromTo(
      ".project-card", // Select all project cards
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Stagger delay of 0.3 seconds between each card
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",  // Trigger when the top of the container reaches the bottom
          end: "top center",
          scrub: true,
          markers: false, // Set to true to see debug markers
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='flex w-full'>
        <p className='mt-3 max-w-3xl text-[16px] leading-8 text-secondary sm:text-[17px]'>
          The following projects demonstrate my skills and experience through real-world applications I&apos;ve contributed to.
          Each project highlights my ability to solve complex problems, work across technologies, and manage end-to-end development effectively.
        </p>
      </div>

      <div className='works-container mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <div key={`project-${index}`} className='project-card h-full'>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
