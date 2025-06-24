import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
import { blogs as blogData } from '../data/blogs';

const BlogPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(term) ||
      blog.excerpt.toLowerCase().includes(term) ||
      blog.tags.some(tag => tag.toLowerCase().includes(term))
    );
    setFilteredBlogs(filtered);
  }, [searchTerm]);

  return (
    <>
      <Helmet>
        <title>Blog | Ansh Kumar</title>
        <meta name="description" content="Articles and tutorials about web development, JavaScript, React, and more." />
      </Helmet>

      <section className="pt-0 xs:pt-1 sm:pt-3 md:pt-6 px-1 xs:px-2 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-[99%] xs:max-w-[98%] sm:max-w-[95%] lg:max-w-6xl">
          
          {/* Header with Search */}
          <div className="mb-3 sm:mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h1 className="font-medium text-base xs:text-lg sm:text-xl md:text-2xl text-white/95 mb-0.5 xs:mb-1 sm:mb-2">
                My Blog
              </h1>
              <p className="text-[10px] xs:text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">
                Articles and thoughts on web development and System Design
              </p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-white/60 italic">
                Click on the title or read more to view the full article
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full max-w-xs sm:max-w-xs">
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full rounded-md border border-[#1E1E1E] bg-[#121212] text-white/80 placeholder-white/40 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#262626]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z" />
              </svg>
            </div>
          </div>

          {/* Blog Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4"
          >
            {filteredBlogs.map((blog, index) => (
              <BlogCard 
                key={blog.id}
                blog={blog}
                index={index} 
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-4 text-center mt-6">
              <p className="text-white/70 text-sm">No articles matched your search.</p>
            </div>
          )}

          {/* Bottom note */}
          {blogData.length > 0 && (
            <p className="text-white/50 text-center text-[9px] xs:text-[10px] sm:text-xs mt-3 sm:mt-5">
              New articles published regularly
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
