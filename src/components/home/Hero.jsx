import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaFileAlt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import devAnimation from '../../assets/images/giphy2.gif';

const Hero = () => {
  return (
    <section className="pt-2 sm:pt-12 md:pt-24 pb-8 sm:pb-16 md:pb-20 min-h-[calc(100vh-4rem)]">
      <div className="container h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
          
          {/* Dotted Vertical Line */}
          <div className="hidden md:block absolute h-[70%] border-l-2 border-dotted border-white/30 left-1/2 top-1/2 transform -translate-y-1/2"></div>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:space-y-6 md:pr-12"
          >
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white/95">
                Hi, I'm <span className="text-white">Ansh Kumar</span>
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl text-white/80">
                Your friendly neighborhood{' '}
                <TypeAnimation
                  sequence={[
                    'Engineer', 2000,
                    'Gamer', 2000,
                    'Coder', 2000,
                    'Developer', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="text-white font-medium"
                />
              </h2>
            </div>

            <div className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/70">
              <span className="mr-2">Based in India</span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="ml-2">Open to opportunities</span>
            </div>

            <p className="text-sm sm:text-base text-white/70 max-w-lg leading-relaxed">
              I'm a full-stack developer who loves crafting clean, scalable web applications. 
              My goal is to build solutions that offer both exceptional performance and a delightful user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-[#0A0A0A] hover:bg-white/90 h-9 sm:h-10 px-3 sm:px-4 py-2 w-full sm:w-auto"
              >
                View Projects
                <FaArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-white/5 text-white hover:bg-white/15 h-9 sm:h-10 px-3 sm:px-4 py-2 w-full sm:w-auto"
              >
                Resume
                <FaFileAlt className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex justify-center sm:justify-start flex-wrap gap-3 pt-2 sm:pt-4">
              {[FaReact, SiExpress, DiMongodb, FaNodeJs].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-[#121212] border border-white/10"
                >
                  <Icon className="text-white text-sm sm:text-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end md:pl-12 mt-5 md:mt-0"
          >
            <div className="relative overflow-hidden">
              <img
                src={devAnimation}
                alt="Developer Animation"
                className="w-full h-auto max-w-[380px] md:max-w-full mx-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent opacity-30"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
