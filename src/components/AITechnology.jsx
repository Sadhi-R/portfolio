import React from 'react';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const AITechnology = () => {
  const aiInterests = [
    {
      title: "AI Tools Expertise",
      description: "Passionate about exploring and implementing cutting-edge AI tools to enhance productivity and innovation. Experienced in testing and integrating the latest AI technologies into development workflows.",
      icon: "🤖"
    },
    {
      title: "Development Acceleration",
      description: "Focused on leveraging AI to reduce development time and improve code quality. Implementing AI-powered tools for code generation, testing, and optimization.",
      icon: "⚡"
    },
    {
      title: "Technology Innovation",
      description: "Constantly exploring new technologies and AI solutions to stay at the forefront of software development. Committed to continuous learning and adaptation of emerging tech trends.",
      icon: "🚀"
    }
  ];

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>My Passion</p>
          <h2 className={styles.sectionHeadText}>AI & Technology</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-3 gap-8`}>
        {aiInterests.map((interest, index) => (
          <div
            key={index}
            className="bg-black-200 p-8 rounded-3xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{interest.icon}</div>
            <h3 className="text-white text-xl font-bold mb-4">{interest.title}</h3>
            <p className="text-secondary text-[16px] leading-7">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AITechnology, ""); 