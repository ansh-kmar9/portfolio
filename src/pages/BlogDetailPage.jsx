import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaTags, FaCalendarAlt } from "react-icons/fa";
import { getBlogById } from "../data/blogs";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm'; // Add this import for table support

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(blogId);

  // Redirect if blog not found
  useEffect(() => {
    if (!blog) {
      navigate("/blog");
    }
    window.scrollTo(0, 0);
  }, [blog, navigate]);

  if (!blog) return null;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ansh Kumar</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <section className="pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-[98%] xs:max-w-[95%] sm:max-w-4xl">

          {/* Top Navigation */}
          <Link
            to="/blog"
            className="inline-flex items-center text-white/60 hover:text-white/90 transition-colors mb-6 text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 rounded-sm ml-1 sm:ml-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            Back to Blog
          </Link>

          {/* Blog Article */}
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

            {/* Blog Body */}
            <div className="p-6 xs:p-8 sm:p-10 md:p-12">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium text-white/95 mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 xs:gap-5 text-white/60 text-xs xs:text-sm mb-8 sm:mb-10">
                {/* <div className="flex items-center">
                  <FaCalendarAlt className="h-3.5 w-3.5 mr-1.5" />
                  {formatDate(blog.date)}
                </div> */}

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {blog.readTime} min read
                </div>

                <div className="flex items-center">
                  <FaTags className="mr-1.5 h-3.5 w-3.5" />
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-sm bg-[#121212] px-2 py-1 text-[11px] xs:text-xs text-white/70 ring-1 ring-inset ring-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="inline-flex items-center rounded-sm bg-[#121212] px-2 py-1 text-[11px] xs:text-xs text-white/50 ring-1 ring-inset ring-[#262626]">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Markdown Content */}
              <div
                className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none
                prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
                prose-headings:text-white/95 prose-headings:font-medium prose-headings:mt-8 prose-headings:mb-4
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-a:text-white/80 prose-a:hover:text-white prose-a:no-underline prose-a:hover:underline
                prose-strong:text-white/90 
                prose-code:text-white/80 prose-code:bg-[#1a1a1a] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-transparent prose-pre:p-0 prose-pre:mt-6 prose-pre:mb-6
                prose-blockquote:border-l-4 prose-blockquote:border-[#262626] prose-blockquote:text-white/70 prose-blockquote:bg-[#121212]/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-6 prose-blockquote:italic
                prose-img:rounded-lg prose-img:my-8
                prose-hr:border-[#262626] prose-hr:my-8
                prose-li:text-white/80 prose-li:my-2
                prose-ol:text-white/80 prose-ul:text-white/80
                prose-table:my-8 prose-table:w-full
                prose-thead:border-b prose-thead:border-[#262626]
                prose-tbody:divide-y prose-tbody:divide-[#262626]
                prose-th:text-left prose-th:font-semibold prose-th:text-white/90
                prose-td:text-white/70"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]} // Add this for table support
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <div className="my-6">
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            customStyle={{
                              fontSize: "0.875rem",
                              lineHeight: "1.7",
                              padding: "1.5rem",
                              borderRadius: "0.5rem",
                              border: "1px solid #262626",
                              margin: 0,
                            }}
                            {...props}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    p: ({ children }) => <p className="mb-6">{children}</p>,
                    h1: ({ children }) => <h1 className="mt-12 mb-6">{children}</h1>,
                    h2: ({ children }) => <h2 className="mt-10 mb-5">{children}</h2>,
                    h3: ({ children }) => <h3 className="mt-8 mb-4">{children}</h3>,
                    ul: ({ children }) => <ul className="my-6 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="my-6 space-y-2">{children}</ol>,
                    blockquote: ({ children }) => <blockquote className="my-8">{children}</blockquote>,
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto">
                        <div className="rounded-lg border border-[#262626] overflow-hidden">
                          <table className="min-w-full divide-y divide-[#262626]">
                            {children}
                          </table>
                        </div>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-[#1a1a1a]">
                        {children}
                      </thead>
                    ),
                    tbody: ({ children }) => (
                      <tbody className="divide-y divide-[#262626] bg-[#0A0A0A]">
                        {children}
                      </tbody>
                    ),
                    tr: ({ children }) => (
                      <tr className="hover:bg-[#121212]/50 transition-colors">
                        {children}
                      </tr>
                    ),
                    th: ({ children }) => (
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white/90 uppercase tracking-wider whitespace-nowrap">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="px-6 py-4 text-sm text-white/70 whitespace-nowrap">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </div>

              {/* Bottom Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#1E1E1E]">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-md text-xs xs:text-sm font-medium transition-colors bg-[#121212] hover:bg-[#1a1a1a] text-white/80 hover:text-white/95 h-9 sm:h-10 px-4 sm:px-5 border border-[#1E1E1E]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to all posts
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;