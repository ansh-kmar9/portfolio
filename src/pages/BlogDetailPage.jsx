import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaTags } from 'react-icons/fa';
import { getBlogById } from '../data/blogs';
import ReactMarkdown from 'react-markdown';

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(blogId);
  
  useEffect(() => {
    if (!blog) {
      navigate('/blog');
    }
    
    window.scrollTo(0, 0);
  }, [blog, navigate]);
  
  if (!blog) return null;
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | DevFolio</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>
      
      <section className="pt-3 sm:pt-6 md:pt-10 px-1 sm:px-6">
        <div className="container mx-auto max-w-[98%] xs:max-w-[95%] sm:max-w-4xl">
          <Link 
            to="/blog" 
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
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Blog
          </Link>
          
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] overflow-hidden shadow-sm w-full"
          >
            {/* Cover Image */}
            <div className="relative aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/6] overflow-hidden">
              <img 
                src={blog.coverImage} 
                alt={blog.title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-70"></div>
            </div>
            
            {/* Content */}
            <div className="p-3 xs:p-4 sm:p-5 md:p-6">
              <div>
                <h1 className="text-base xs:text-xl sm:text-2xl md:text-3xl font-medium text-white/95 mb-3">{blog.title}</h1>
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 xs:gap-4 text-white/60 text-[10px] xs:text-xs mb-4 sm:mb-6">
                  <div className="flex items-center">
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
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {formatDate(blog.date)}
                  </div>
                  <div className="flex items-center">
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
                  </div>
                  <div className="flex items-center">
                    <FaTags className="mr-1 h-2.5 w-2.5" />
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {blog.tags.slice(0, 3).map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 py-0.5 text-[9px] xs:text-[10px] text-white/70 ring-1 ring-inset ring-[#262626]"
                        >
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="inline-flex items-center rounded-sm bg-[#121212] px-1.5 py-0.5 text-[9px] xs:text-[10px] text-white/50 ring-1 ring-inset ring-[#262626]">
                          +{blog.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="prose prose-invert prose-sm sm:prose-base max-w-none 
                  prose-p:text-white/70 prose-headings:text-white/90 prose-headings:font-medium
                  prose-a:text-white/80 prose-a:hover:text-white prose-a:no-underline prose-a:hover:underline
                  prose-strong:text-white/90 prose-code:text-white/80 prose-code:bg-[#121212] prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm
                  prose-pre:bg-[#121212] prose-pre:border prose-pre:border-[#262626]
                  prose-blockquote:border-l-[#262626] prose-blockquote:text-white/70 prose-blockquote:bg-[#121212]/50 prose-blockquote:py-0.5 prose-blockquote:px-3
                  prose-img:rounded-md prose-hr:border-[#262626]
                  prose-li:text-white/70 prose-ol:text-white/70 prose-ul:text-white/70
                  prose-table:text-white/70 prose-th:bg-[#121212] prose-th:text-white/80 prose-td:border-[#262626]"
                >
                  <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>

                {/* Additional navigation at bottom */}
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-[#1E1E1E]">
                  <Link
                    to="/blog"
                    className="inline-flex items-center justify-center rounded-md text-[10px] xs:text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:opacity-50 bg-[#121212] hover:bg-[#1a1a1a] text-white/80 hover:text-white/95 h-7 sm:h-8 px-2.5 sm:px-3 border border-[#1E1E1E]"
                  >
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
                      className="mr-1 sm:mr-1.5"
                    >
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Back to all posts
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;