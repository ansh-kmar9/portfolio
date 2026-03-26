import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNotice, setShowMobileNotice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleViewportChange = (event) => {
      const mobileViewport = event.matches;
      setIsMobile(mobileViewport);

      if (!mobileViewport) {
        setShowMobileNotice(false);
        return;
      }

      const hasDismissed =
        sessionStorage.getItem("mobile-notice-dismissed") === "true";
      setShowMobileNotice(!hasDismissed);
    };

    handleViewportChange(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleViewportChange);
      return () =>
        mediaQuery.removeEventListener("change", handleViewportChange);
    }

    mediaQuery.addListener(handleViewportChange);
    return () => mediaQuery.removeListener(handleViewportChange);
  }, []);

  useEffect(() => {
    if (!showMobileNotice) {
      document.body.classList.remove("overflow-hidden");
      return;
    }

    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMobileNotice]);

  const handleContinueOnDevice = () => {
    sessionStorage.setItem("mobile-notice-dismissed", "true");
    setShowMobileNotice(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <motion.main
        className="flex-grow pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />

      <AnimatePresence>
        {isMobile && showMobileNotice && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-experience-title"
            >
              <div className="mb-5 inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                Better on desktop
              </div>

              <h2
                id="mobile-experience-title"
                className="text-2xl font-bold leading-tight text-white"
              >
                Use PC / Laptop for a Better Experience
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/75">
                This portfolio is best experienced on a larger screen for
                smoother layouts, richer visuals, and full interactions.
              </p>

              <button
                type="button"
                onClick={handleContinueOnDevice}
                className="mt-6 w-full rounded-md border border-white/20 bg-white text-[#0A0A0A] px-4 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-white/90"
              >
                Continue on this device
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
