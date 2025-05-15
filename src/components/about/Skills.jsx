import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaAngular, FaGitAlt, FaDocker, FaAws, FaGithub,
  FaFigma, FaLaravel, FaPhp, FaCode
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiRedux, SiFirebase,
  SiTailwindcss, SiBootstrap, SiNextdotjs, SiEjs,
  SiMysql, SiPostman
} from 'react-icons/si';
import { MdOutlineSmartToy } from 'react-icons/md';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "EJS", icon: <SiEjs /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "REST API", icon: <FaCode /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Blade", icon: <FaCode /> }
      ]
    },
    {
      category: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "AI", icon: <MdOutlineSmartToy /> },
        { name: "Testing", icon: <FaCode /> }
      ]
    }
  ];

  return (
    <motion.div
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-4 sm:p-5 md:p-6 w-full"
    >
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-medium text-white/95">Skills</h2>

        <div className="space-y-4 sm:space-y-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider">
                {category.category}
              </h3>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 group p-1.5 rounded-md hover:bg-[#121212]/60 transition-colors duration-200"
                  >
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-md bg-[#121212] border border-[#262626] group-hover:border-white/20 transition-colors duration-200">
                      <span className="text-white/80 text-[10px] sm:text-sm">{skill.icon}</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm group-hover:text-white/95 transition-colors duration-200 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1E1E1E]">
        <h3 className="text-xs sm:text-sm font-medium text-white/70 mb-3 sm:mb-4">Core Proficiency</h3>
        <div className="space-y-3 sm:space-y-4">
          {[
            { name: "Frontend Development", value: 90 },
            { name: "Backend Development", value: 85 },
            { name: "UI/UX Design", value: 75 }
          ].map((item, i) => (
            <div key={i} className="space-y-1 sm:space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-white/70">{item.name}</span>
                <span className="text-[10px] sm:text-xs text-white/50">{item.value}%</span>
              </div>
              <div className="h-1 sm:h-1.5 w-full bg-[#121212] rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/80 rounded-full"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
