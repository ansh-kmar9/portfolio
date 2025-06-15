import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome size={18} /> },
    { name: "About", path: "/about", icon: <FaUser size={18} /> },
    { name: "Projects", path: "/projects", icon: <FaCode size={18} /> },
    { name: "Blog", path: "/blog", icon: <FaNewspaper size={18} /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope size={18} /> },
  ];

  return (
    <>
      {/* Top Navbar for Desktop */}
      {/* Top Navbar for Desktop */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50`}>
        <div className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-md relative">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.icon}
                  <span className="text-sm">{link.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-lg z-50">
        <div className="flex justify-around items-center py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              {link.icon}
              <span className="text-xs mt-1">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
