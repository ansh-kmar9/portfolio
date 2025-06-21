import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  useEffect(() => {
    // Inject Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js";
    document.body.appendChild(script);

    // Remove "Built with Spline" branding
    const observer = new MutationObserver(() => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer?.shadowRoot) {
        const branding = Array.from(viewer.shadowRoot.querySelectorAll("div")).find(div =>
          div?.textContent?.toLowerCase().includes("spline.design")
        );
        if (branding) {
          branding.remove();
          observer.disconnect();
        }
      }
    });

    const interval = setInterval(() => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer?.shadowRoot) {
        observer.observe(viewer.shadowRoot, { childList: true, subtree: true });
        clearInterval(interval);
      }
    }, 500);

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative pt-2 sm:pt-12 md:pt-24 pb-8 sm:pb-16 md:pb-20 min-h-[calc(100vh-4rem)]">
      <div className="container h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">

          {/* Dotted Line */}
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
                Your friendly neighborhood{" "}
                <TypeAnimation
                  sequence={["Engineer", 2000, "Gamer", 2000, "Coder", 2000, "Developer", 2000]}
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 bg-white text-[#0A0A0A] hover:bg-white/90 h-9 sm:h-10 px-3 sm:px-4 py-2"
              >
                View Projects
                <FaArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>

              <a
                href="/assets/resumee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 border border-white/20 bg-white/5 text-white hover:bg-white/15 h-9 sm:h-10 px-3 sm:px-4 py-2"
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

          {/* Right Content: Spline 3D */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end md:pl-12 mt-5 md:mt-0"
          >
            <div className="relative w-full max-w-[500px] h-[380px] rounded-lg overflow-hidden shadow-md">
              <spline-viewer
                url="https://prod.spline.design/d6mX-4CKY-2Ptd2Y/scene.splinecode"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "transparent",
                }}
              ></spline-viewer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
