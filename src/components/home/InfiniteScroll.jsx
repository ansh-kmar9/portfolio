// components/InfiniteScroll.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaGit, FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiRedux, SiTailwindcss, 
  SiFirebase, SiPostgresql 
} from 'react-icons/si';

const InfiniteScroll = () => {
  const icons = [
    <FaHtml5 color="#E34F26" />,
    <FaCss3Alt color="#1572B6" />,
    <FaJs color="#F7DF1E" />,
    <FaReact color="#61DAFB" />,
    <SiTypescript color="#3178C6" />,
    <FaNodeJs color="#339933" />,
    <SiMongodb color="#47A248" />,
    <SiRedux color="#764ABC" />,
    <SiTailwindcss color="#06B6D4" />,
    <FaPython color="#3776AB" />,
    <FaGit color="#F05032" />,
    <FaDocker color="#2496ED" />,
    <SiFirebase color="#FFCA28" />,
    <SiPostgresql color="#4169E1" />
  ];

  return (
    <div className="slider-container mt-16">
      <div className="slider">
        <div className="slide-track">
          {/* Double the icons for seamless loop */}
          {[...icons, ...icons].map((icon, index) => (
            <div 
              key={index} 
              className="slide"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;