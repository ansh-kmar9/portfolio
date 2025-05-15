import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] overflow-hidden flex flex-col h-full shadow-sm"
    >
      {/* Image with reduced aspect ratio on mobile for less vertical space */}
      <div className="relative aspect-[16/8] xs:aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
      </div>

      {/* Content - more compact padding on mobile */}
      <div className="p-2.5 xs:p-3 sm:p-4 flex flex-col flex-grow">
        <div className="flex flex-col mb-1 sm:mb-1.5">
          <h3 className="font-medium text-sm xs:text-base sm:text-lg text-white/95 line-clamp-1">
            <Link to={`/projects/${project.id}`} className="outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded">
              {project.title}
            </Link>
          </h3>
          <p className="text-[9px] xs:text-[10px] text-white/60 -mt-0.5">
            Project
          </p>
        </div>

        <p className="text-[10px] xs:text-xs sm:text-sm text-white/70 line-clamp-2 mb-1.5 sm:mb-2.5">
          {project.description}
        </p>

        {/* Tags - tighter gaps and less bottom margin */}
        <div className="flex flex-wrap gap-1 mb-1.5 sm:mb-3">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-sm bg-[#121212] px-1 py-0.5 text-[9px] xs:text-[10px] sm:text-xs text-white/70 ring-1 ring-inset ring-[#262626]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-flex items-center rounded-sm bg-[#121212] px-1 py-0.5 text-[9px] xs:text-[10px] sm:text-xs text-white/50 ring-1 ring-inset ring-[#262626]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer Links - reduced top padding */}
        <div className="flex justify-between items-center mt-auto pt-1.5 sm:pt-2 border-t border-[#1E1E1E]">
          <Link 
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[10px] xs:text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/5 h-6 sm:h-7 px-2 sm:px-3"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 sm:ml-1.5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>

          <div className="flex gap-1 sm:gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 h-6 w-6 sm:h-7 sm:w-7 text-white/70 hover:text-white/90 hover:bg-white/10"
              >
                <FaGithub className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Live Demo"
                className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 h-6 w-6 sm:h-7 sm:w-7 text-white/70 hover:text-white/90 hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;