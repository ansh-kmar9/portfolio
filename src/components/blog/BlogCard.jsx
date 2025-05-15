import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

const BlogCard = ({ blog, index }) => {
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCopyLink = () => {
    const blogUrl = `${window.location.origin}/blog/${blog.id}`;
    navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Blog Card */}
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] overflow-hidden flex flex-col h-full shadow-sm group"
      >
        {/* Blog Content */}
        <div className="p-3 xs:p-4 sm:p-5 flex-grow flex flex-col">
          {/* Date and Time */}
          <div className="flex flex-wrap justify-between items-center text-[10px] xs:text-xs text-white/60 mb-1.5 sm:mb-2">
            <span className="truncate mr-3">{formatDate(blog.date)}</span>
            <span className="flex items-center shrink-0">
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
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {blog.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="font-medium text-sm xs:text-base sm:text-lg text-white/95 line-clamp-2 mb-1.5 sm:mb-2">
            <Link to={`/blog/${blog.id}`} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded">
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-[10px] xs:text-xs sm:text-sm text-white/70 mb-2 sm:mb-3 flex-grow line-clamp-2 sm:line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
            {blog.tags.slice(0, window.innerWidth < 400 ? 2 : 3).map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 py-0.5 text-[9px] xs:text-[10px] sm:text-xs text-white/70 ring-1 ring-inset ring-[#262626]"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > (window.innerWidth < 400 ? 2 : 3) && (
              <span className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 py-0.5 text-[9px] xs:text-[10px] sm:text-xs text-white/50 ring-1 ring-inset ring-[#262626]">
                +{blog.tags.length - (window.innerWidth < 400 ? 2 : 3)}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-auto pt-2 sm:pt-3 border-t border-[#1E1E1E]">
            <Link
              to={`/blog/${blog.id}`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[10px] xs:text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/5 h-6 sm:h-8 px-2 sm:px-3"
            >
              Read More
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

            <button
              onClick={handleCopyLink}
              aria-label="Copy Link"
              className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 h-6 w-6 sm:h-8 sm:w-8 text-white/70 hover:text-white/90 hover:bg-white/10"
            >
              <FaLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </motion.article>

      {/* Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-[#333333] text-white/90 px-4 py-2 rounded-md shadow-md z-50 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
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
                className="text-white/70"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Link copied to clipboard
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogCard;