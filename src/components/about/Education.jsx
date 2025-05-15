import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      period: '2022 - 2026',
      description:
        'CGPA: 8.2. Relevant Coursework: Data Structures and Algorithms, Web Development, Database Management Systems, Object-Oriented Programming, Computer Networks, Operating Systems.',
    },
  ];

  return (
    <motion.div
      id="education"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-4 sm:p-6 md:p-8 w-full"
    >
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-medium text-white/90">Education</h2>

        <div className="space-y-4 sm:space-y-5">
          {education.map((item, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md bg-[#121212] border border-[#262626] sm:mt-0.5 mb-1 sm:mb-0">
                  <FaGraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white/90 leading-tight">
                    {item.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <FaSchool className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="truncate">{item.institution}</span>
                    </div>
                    <span className="h-1 w-1 rounded-full bg-white/30 hidden sm:block"></span>
                    <span>{item.period}</span>
                  </div>
                  
                  <div className="mt-2 sm:mt-3">
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Courses - Responsive */}
                  <div className="mt-3 sm:mt-4">
                    <div className="text-xs text-white/60 mb-2">Relevant Coursework</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Data Structures", 
                        "Algorithms", 
                        "Web Development", 
                        "Database Management", 
                        "OOP", 
                        "Networks"
                      ].map((course, i) => (
                        <span key={i} className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white/70 ring-1 ring-inset ring-[#262626]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements section - Responsive */}
        <div className="border-t border-[#1E1E1E] pt-4 sm:pt-5 mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm font-medium text-white/80 mb-3 sm:mb-4">Academic Achievements</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">Dean's List for Academic Excellence (2022-2023)</span>
            </li>
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">Participated in ACM Coding Competition</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;