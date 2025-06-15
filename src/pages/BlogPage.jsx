import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Blog | Ansh Kumar</title>
        <meta name="description" content="Articles and tutorials about web development, JavaScript, React, and more." />
      </Helmet>
      
      <section className="pt-0 xs:pt-1 sm:pt-3 md:pt-6 px-1 xs:px-2 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-[99%] xs:max-w-[98%] sm:max-w-[95%] lg:max-w-6xl">
          <div className="mb-2 sm:mb-4 md:mb-6">
            <div className="flex flex-col">
              <h1 className="font-medium text-base xs:text-lg sm:text-xl md:text-2xl text-white/95 mb-0.5 xs:mb-1 sm:mb-2">
                My Blog
              </h1>
              <p className="text-[10px] xs:text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">
                Articles and thoughts on web development
              </p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-white/60 italic">
                Click on the title or read more to view the full article
              </p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4"
          >
            {blogs.map((blog, index) => (
              <BlogCard 
                key={blog.id}
                blog={blog}
                index={index} 
              />
            ))}
          </motion.div>
          
          {/* If no blogs are available, show this message */}
          {blogs.length === 0 && (
            <div className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-4 text-center">
              <p className="text-white/70 text-sm">No articles available yet. Check back soon!</p>
            </div>
          )}
          
          {/* Bottom note */}
          {blogs.length > 0 && (
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
