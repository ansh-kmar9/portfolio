import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showMoreCerts, setShowMoreCerts] = useState(false);

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Lovely Professional University",
      period: "2022 - 2026",
      description: "CGPA: 8.3",
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
        <h2 className="text-lg sm:text-xl font-medium text-white/90">
          Education
        </h2>

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
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Courses - Responsive */}
                  <div className="mt-3 sm:mt-4">
                    <div className="text-xs text-white/60 mb-2">
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Web Development",
                        "Database and Management Systems",
                        "Object Oriented Programming",
                        "Computer Networks",
                        "Operating Systems",
                      ].map((course, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-white/70 ring-1 ring-inset ring-[#262626]"
                        >
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

        {/* Certifications section - Responsive */}
        <div className="border-t border-[#1E1E1E] pt-4 sm:pt-5 mt-4 sm:mt-6">
          <div className="flex flex-col gap-1 mb-3 sm:mb-4">
            <h3 className="text-xs sm:text-sm font-medium text-white/80">
              Certifications
            </h3>
            <p className="text-xs text-white/50">
              Click on the title to see the certificates
            </p>
          </div>

          {/* All certifications data */}
          {(() => {
            const allCertifications = [
              {
                title: "Social Networks - NPTEL",
                link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs120/Course/NPTEL24CS120S106500033103927628.pdf",
              },
              {
                title: "Dynamic Programming, Greedy Algorithms",
                link: "https://coursera.org/share/f4e177b69e3fe666a295b16ce4df0543",
              },
              {
                title: "Mastering Data Structures & Algorithms using C and C++",
                link: "https://www.udemy.com/certificate/UC-26321671-1240-403c-981a-83299cd24d62/",
              },
              {
                title: "ChatGPT Advanced Data Analysis",
                link: "https://coursera.org/share/2efe6c40e517f1be904e26c5a2742dc1",
              },
              {
                title: "Figma UI Practices",
                link: "https://www.udemy.com/certificate/UC-a428a169-2ec7-4ff9-9ef2-acc0a5b230ee/",
              },
              {
                title: "AWS Cloud Technical Essentials",
                link: "https://coursera.org/share/46840e5fe7ba277887bb91f6ef1bffba",
              },
              {
                title: "Architecting Solutions on AWS",
                link: "https://coursera.org/share/722a8f965a8381dd3895ab52d8564098",
              },
              {
                title: "Approximation Algorithms and Linear Programming",
                link: "https://coursera.org/share/a93f1314016b12fc9e4cea29bedc771a",
              },
              {
                title: "Agile Project Management",
                link: "https://coursera.org/share/2972ee3102a5c31313e87e9c0609ed4b",
              },
              {
                title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
                link: "https://coursera.org/share/0d42d9c004bcad855040639c56443a93",
              },
              {
                title: "Project Planning and Execution",
                link: "https://coursera.org/share/052e6c8aa341cb70b6ce7c5ee03fd003",
              },
              {
                title: "AWS Multi-Tier VPC Architecture",
                link: "https://coursera.org/share/42c3d9a8bca1233193bebfbe1bc926fc",
              },
              {
                title: "Project Management: Foundations and Initiation",
                link: "https://coursera.org/share/f13c34b899f4f71b085ad90e9e248c26",
              },
              {
                title: "Prompt Engineering for ChatGPT",
                link: "https://coursera.org/share/86c1be54e136b291885c70e9586702dd",
              },
              {
                title: "GenAI for Everyone",
                link: "https://coursera.org/share/a21edfd82bda48a78146a1dac99c4723",
              },
              {
                title: "Learn to code with AI",
                link: "https://coursera.org/share/404a2bc6748e1b789b9916575930d3e32",
              },
              {
                title: "Algorithms on Strings",
                link: "https://coursera.org/share/68da5a069cd280d4bef9f4dd6ded630b",
              },
              {
                title: "ChatGPT Playground for Beginners: Intro to NLP AI",
                link: "https://coursera.org/share/c5cf4dc69b2c9d35691d00c2cd3fe1fb",
              },
              {
                title: "Server side JavaScript with Node.js",
                link: "https://coursera.org/share/cd07b6a6f69ce3a3fe7fd215dc640518",
              },
              {
                title: "HTML, CSS, and Javascript for Web Developers",
                link: "https://coursera.org/share/d78cdef5ad7312ce08bdc422cbe18f62",
              },
              {
                title: "Introduction to Large Language Models",
                link: "https://coursera.org/share/968f1ca0b672f439707b971c10e0397c",
              },
              {
                title: "Generative AI with Large Language Models",
                link: "https://coursera.org/share/aca5ae14762921d246f05d9c7c52f1bf",
              },
              {
                title: "Generative AI Primer",
                link: "https://coursera.org/share/69c05acf31be6e139279cc33bcd3b75c",
              },
              {
                title: "Introduction to Generative AI",
                link: "https://coursera.org/share/1e53dba17963b6dd10ba88e14496b7b8",
              },
              {
                title: "Learn React: Introduction",
                link: "https://www.codecademy.com/profiles/ansssh/certificates/1bf3e70ae92b43c2a3add66cbfaec661",
              },
              {
                title:
                  "Python And Django Framework For Beginners Complete Course",
                link: "https://www.udemy.com/certificate/UC-c7a8765c-627a-4518-8ba2-7e448df7721d/",
              },
            ];

            const visibleCerts = showMoreCerts
              ? allCertifications
              : allCertifications.slice(0, 7);

            return (
              <>
                <ul className="space-y-2 sm:space-y-3">
                  {visibleCerts.map((cert, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-white/70">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white underline underline-offset-2 transition"
                        >
                          {cert.title}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>

                {allCertifications.length > 7 && (
                  <button
                    onClick={() => setShowMoreCerts(!showMoreCerts)}
                    className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {showMoreCerts ? (
                      <>
                        Show Less
                        <FaChevronUp className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        Show More ({allCertifications.length - 7} more)
                        <FaChevronDown className="h-3 w-3" />
                      </>
                    )}
                  </button>
                )}
              </>
            );
          })()}
        </div>

        {/* Achievements section - Responsive */}
        <div className="border-t border-[#1E1E1E] pt-4 sm:pt-5 mt-4 sm:mt-6">
          <h3 className="text-xs sm:text-sm font-medium text-white/80 mb-3 sm:mb-4">
            Achievements
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">
                Secured the top <span className="text-white">1%</span> in the{" "}
                <span className="text-white">Dean List</span>
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">
                Secured top <span className="text-white">50</span> Institute
                rank on <span className="text-white">GeeksForGeeks</span> among
                thousands of peers
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">
                LeetCode Max Rating: <span className="text-white">1600+</span>
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-1"></div>
              <span className="text-xs sm:text-sm text-white/70">
                GFG Max Rating: <span className="text-white">1700+</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
