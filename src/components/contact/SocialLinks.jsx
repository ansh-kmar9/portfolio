import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDiscord,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <FaEnvelope className="text-white/90 text-lg" />,
      link: "mailto:anshkmr991@gmail.com",
      text: "anshkmr991@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-white/90 text-lg" />,
      link: "https://www.linkedin.com/in/anshkmr/",
      text: "linkedin.com/in/anshkmr",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white/90 text-lg" />,
      link: "https://github.com/ansh-kmar9",
      text: "github.com/ansh-kmar9",
    },
    {
      name: "X",
      icon: <FaXTwitter className="text-white/90 text-lg" />,
      link: "https://x.com/anshkmar999",
      text: "@anshkmar999",
    }, 
    
    {
      name: "Discord",
      icon: <FaDiscord className="text-white/90 text-lg" />,
      link: "https://discord.com",
      text: "theansh6647",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#0A0A0A] rounded-xl border border-[#1E1E1E] shadow-lg max-w-xl mx-auto w-full p-6"
    >
      <h2 className="text-xl font-medium mb-6 text-white/95">
        Connect With Me
      </h2>

      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4 bg-[#1A1A1A] rounded-lg p-3 border border-[#262626]">
          <FaMapMarkerAlt className="text-white/80 mt-1 text-base" />
          <div>
            <h3 className="font-medium text-sm text-white/90">Location</h3>
            <p className="text-white/60 text-sm">Punjab, India</p>
          </div>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          I'm always open to exciting opportunities and collaborations. Feel free
          to reach out via any platform below.
        </p>
      </div>

      <ul className="space-y-2">
        {socialLinks.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-[#121212] hover:bg-[#181818] border border-[#262626] transition-colors duration-150"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#1E1E1E]">
                <span className="text-white/90">{link.icon}</span>
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-sm text-white/90 truncate">
                  {link.name}
                </h3>
                <p className="text-white/60 text-xs truncate">{link.text}</p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;