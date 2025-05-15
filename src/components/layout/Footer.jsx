import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-24 bg-transparent mb-[3rem] md:mb-1"> {/* Added margin bottom for mobile */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-6"> {/* Increased space between icons */}
          <a
            href="https://github.com/ansh-kmar9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-2xl sm:text-[24px]" /> {/* Responsive icon size */}
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <FaTwitter className="text-2xl sm:text-[24px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/anshkmr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn className="text-2xl sm:text-[24px]" />
          </a>
          <a
            href="https://www.instagram.com/_.ansh._kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <FaInstagram className="text-2xl sm:text-[24px]" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-base text-white/50 text-center px-4">
          © {new Date().getFullYear()} Ansh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;