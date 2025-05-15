import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Introduction = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      id="introduction"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Introduction</h2>
      
      <div className="space-y-4">
        <p className="text-white/80">
          I'm Alex Chen, a passionate full-stack web developer with over 5 years of experience 
          building dynamic web applications and digital experiences. I specialize in JavaScript 
          ecosystem with particular expertise in React, Node.js, and modern frontend frameworks.
        </p>
        
        <p className="text-white/80">
          My journey in web development began during my computer science studies, where I discovered 
          my passion for creating intuitive user interfaces and solving complex problems through code.
          Since then, I've worked on a diverse range of projects from e-commerce platforms to real-time 
          collaboration tools, always striving to write clean, maintainable code that delivers exceptional user experiences.
        </p>
        
        <p className="text-white/80">
          I believe in continuous learning and staying up-to-date with the latest technologies and best practices.
          When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
          or exploring new hiking trails around the Bay Area.
        </p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4 text-secondary">My Approach</h3>
        
        <ul className="space-y-2 text-white/80">
          <li className="flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>Building responsive, accessible, and performance-optimized applications</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>Writing clean, maintainable code with comprehensive documentation</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>Following test-driven development practices for robust applications</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>Implementing user-centered design principles for intuitive interfaces</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">▹</span>
            <span>Collaborating effectively in agile environments with cross-functional teams</span>
          </li>
        </ul>
        
        <p className="text-white/80 mt-8">
          I'm always open to new opportunities, collaborations, and challenging projects that push me to
          grow as a developer. Feel free to reach out if you'd like to work together or just chat about
          web development!
        </p>
      </div>
    </motion.div>
  );
};

export default Introduction;