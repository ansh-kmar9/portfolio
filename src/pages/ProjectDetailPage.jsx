import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { getProjectById } from '../data/projects';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(projectId);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
    
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <>
      <Helmet>
        <title>{project.title} | DevFolio</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <section className="pt-3 sm:pt-6 md:pt-10 px-1 sm:px-6">
        <div className="container mx-auto max-w-[98%] xs:max-w-[95%] sm:max-w-4xl">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-white/60 hover:text-white/90 transition-colors mb-3 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm ml-1 sm:ml-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 mr-1"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Projects
          </Link>
          
          <div className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] overflow-hidden shadow-sm w-full">
            {/* Hero Image - Reduced height */}
            <div className="relative aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/6] overflow-hidden">
              <motion.img 
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-70"></div>
            </div>
            
            {/* Content - Increased padding on mobile */}
            <div className="p-3 xs:p-4 sm:p-5">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Title and Links Section - Improved layout for mobile */}
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 xs:gap-3 mb-4">
                  <div className="w-full xs:max-w-[65%] sm:max-w-[70%]">
                    <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-white/95 line-clamp-2">{project.title}</h1>
                    <p className="text-[10px] xs:text-xs text-white/60 mt-0.5 sm:mt-1">Role: {project.role}</p>
                  </div>
                  
                  <div className="flex gap-2 mt-2 xs:mt-0 self-start">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:opacity-50 bg-[#121212] hover:bg-[#1a1a1a] text-white/80 hover:text-white/95 h-7 sm:h-8 px-2.5 sm:px-3 border border-[#1E1E1E]"
                    >
                      <FaGithub className="h-3 w-3 mr-1 sm:mr-1.5" /> GitHub
                    </a>
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:opacity-50 bg-white/10 hover:bg-white/15 text-white/90 h-7 sm:h-8 px-2.5 sm:px-3"
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
                        className="h-3 w-3 mr-1 sm:mr-1.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg> 
                      Live
                    </a>
                  </div>
                </div>
                
                {/* Tech Stack - Wider area for tags */}
                <div className="mb-4">
                  <h2 className="text-xs sm:text-sm font-medium text-white/90 mb-2">Technologies Used</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 py-0.5 text-[10px] xs:text-xs text-white/70 ring-1 ring-inset ring-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Description - Increased spacing */}
                <div className="mb-4">
                  <h2 className="text-xs sm:text-sm font-medium text-white/90 mb-2">Project Overview</h2>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-white/70 space-y-2 sm:space-y-3">
                    {project.longDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                {/* Challenges & Solutions - Better spacing for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-md bg-[#0F0F0F] p-3 sm:p-4 border border-[#1E1E1E]">
                    <h2 className="text-xs sm:text-sm font-medium text-white/90 mb-1.5 sm:mb-2">Challenges</h2>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-white/70">{project.challenges}</p>
                  </div>
                  <div className="rounded-md bg-[#0F0F0F] p-3 sm:p-4 border border-[#1E1E1E]">
                    <h2 className="text-xs sm:text-sm font-medium text-white/90 mb-1.5 sm:mb-2">Solutions</h2>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-white/70">{project.solutions}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;