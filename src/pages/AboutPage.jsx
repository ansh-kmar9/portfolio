import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Education from '../components/about/Education';
import Skills from '../components/about/Skills';
import CodingProfiles from '../components/about/CodingProfiles';

const AboutPage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('education');

  useEffect(() => {
    // Handle smooth scrolling to sections when hash changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(location.hash.substring(1));
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('education');
    }
  }, [location]);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['education', 'skills', 'coding-profiles'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Me | DevFolio</title>
        <meta name="description" content="Learn about my skills, experience, and education as a full-stack web developer." />
      </Helmet>

      {/* Left Sidebar - only on desktop */}
      <div className="fixed inset-y-0 left-0 z-20 w-64 bg-[#0A0A0A] border-r border-[#1E1E1E] p-6 transition-transform duration-200 ease-in-out hidden md:block">
        <div className="h-full flex flex-col">
          <div className="space-y-2 mt-10">
            <div className="text-xs uppercase text-white/40 font-medium tracking-wider mb-4">Navigation</div>
            <nav className="space-y-1">
              <button
                onClick={() => scrollToSection('education')}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === 'education' 
                    ? 'bg-white/10 text-white font-medium' 
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" className={activeSection === 'education' ? 'text-white' : 'text-white/60'}>
                  <path d="M7.5 1.5L15 5.5L7.5 9.5L0 5.5L7.5 1.5ZM7.5 10.5L0 6.5V11L7.5 15L15 11V6.5L7.5 10.5Z" fill="currentColor"/>
                </svg>
                Education
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === 'skills' 
                    ? 'bg-white/10 text-white font-medium' 
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" className={activeSection === 'skills' ? 'text-white' : 'text-white/60'}>
                  <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H7.50003C7.22389 8 7.00003 7.77614 7.00003 7.5V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                Skills
              </button>
              <button
                onClick={() => scrollToSection('coding-profiles')}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === 'coding-profiles' 
                    ? 'bg-white/10 text-white font-medium' 
                    : 'text-white/60 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" className={activeSection === 'coding-profiles' ? 'text-white' : 'text-white/60'}>
                  <path d="M2 3.5C2 3.22386 2.22386 3 2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5ZM2 11.5C2 11.2239 2.22386 11 2.5 11H12.5C12.7761 11 13 11.2239 13 11.5C13 11.7761 12.7761 12 12.5 12H2.5C2.22386 12 2 11.7761 2 11.5ZM2.5 2C1.67157 2 1 2.67157 1 3.5V9.5C1 10.3284 1.67157 11 2.5 11V11C2.5 11 2.5 11 2.5 11H12.5C12.5 11 12.5 11 12.5 11V11C13.3284 11 14 10.3284 14 9.5V3.5C14 2.67157 13.3284 2 12.5 2H2.5ZM5 6.5C5 6.22386 5.22386 6 5.5 6H9.5C9.77614 6 10 6.22386 10 6.5C10 6.77614 9.77614 7 9.5 7H5.5C5.22386 7 5 6.77614 5 6.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                Coding Profiles
              </button>
            </nav>
          </div>
          <div className="mt-auto">
            <div className="rounded-md border border-[#1E1E1E] p-4 bg-[#121212]">
              <p className="text-xs text-white/60 mb-2">Need help with a project?</p>
              <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-[#0A0A0A] hover:bg-white/90 h-8 px-3 py-2 w-full">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <section className="pt-0 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[95%] md:max-w-6xl mx-auto">
          <div className="md:ml-64 p-2 sm:p-4">
            <div id="education" className="mb-8 md:mb-12 pt-2 md:pt-4 w-full">
              <Education />
            </div>
            <div id="skills" className="mb-8 md:mb-12 pt-2 md:pt-4 w-full">
              <Skills />
            </div>
            <div id="coding-profiles" className="pt-2 md:pt-4 mb-14 md:mb-0 w-full">
              <CodingProfiles />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;