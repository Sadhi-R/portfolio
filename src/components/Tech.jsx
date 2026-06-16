import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon", 
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div className='mb-10 text-center'>
        <p className='text-sm font-semibold uppercase text-secondary sm:text-[15px]'>Tools I work with</p>
        <h2 className='mt-2 text-[30px] font-black leading-tight text-[var(--text-primary)] sm:text-[42px] lg:text-[52px]'>
          Technologies.
        </h2>
      </div>
      <div className='tech-icons-wrapper skill-stage grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
        {technologies.map((technology, index) => (
          <div
            className='skill-card-3d tech-icon'
            key={technology.name}
            title={technology.name}
            style={{ "--skill-delay": `${index * 70}ms` }}
          >
            <div className='skill-card-inner'>
              <span className='skill-card-shine' aria-hidden='true' />
              <img
                src={technology.icon}
                alt={technology.name}
                loading='lazy'
                decoding='async'
                className='h-14 w-14 object-contain sm:h-16 sm:w-16'
              />
              <span className='mt-3 text-center text-xs font-semibold text-[var(--text-primary)] sm:text-sm'>
                {technology.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
