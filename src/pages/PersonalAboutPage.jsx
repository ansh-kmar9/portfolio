import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PersonalAboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Personal Story | Ansh Kumar</title>
        <meta
          name="description"
          content="Personal autobiography of Ansh Kumar — journey, values, and growth in tech."
        />
      </Helmet>

      <section className="pt-3 sm:pt-6 md:pt-10 px-1 sm:px-6 pb-14 md:pb-20">
        <div className="container mx-auto max-w-[98%] xs:max-w-[95%] sm:max-w-4xl">
          <Link
            to="/about"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to About
          </Link>

          <div className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-4 sm:p-6 md:p-8">
            <div className="space-y-2 mb-5 sm:mb-7">
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-white/50">
                 Story of mine
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 leading-tight">
                My Personal Journey till BTech
              </h1>
              <p className="text-xs sm:text-sm text-white/60 max-w-2xl">
                A short story about where I started, what shaped me, and what
                keeps me moving forward.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-base text-white/75 leading-relaxed">
              <p>
                Hi...I am Ansh Kumar
              </p>

              <p>Updating Soon...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalAboutPage;
