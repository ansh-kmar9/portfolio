import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-2 border-t border-[#1E1E1E] mb-[3rem] md:mb-1">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 flex flex-col items-center justify-center">
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-5">
          <a
            href="https://github.com/ansh-kmar9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center rounded-md text-white/70 hover:text-white/90 hover:bg-white/10 h-9 w-9 sm:h-10 sm:w-10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
          >
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          
          <a
            href="https://x.com/anshkmar999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="inline-flex items-center justify-center rounded-md text-white/70 hover:text-white/90 hover:bg-white/10 h-9 w-9 sm:h-10 sm:w-10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
          >
            {/* X Icon */}
            <svg 
              viewBox="0 0 24 24" 
              aria-hidden="true"
              className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/anshkmr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center rounded-md text-white/70 hover:text-white/90 hover:bg-white/10 h-9 w-9 sm:h-10 sm:w-10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
          >
            <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          
          <a
            href="https://www.instagram.com/_.ansh._kr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center rounded-md text-white/70 hover:text-white/90 hover:bg-white/10 h-9 w-9 sm:h-10 sm:w-10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
          >
            <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-white/50 text-center px-4">
          © {new Date().getFullYear()} Ansh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;