import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'Please fill out all fields.'
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, success: false, error: null });

    try {
      const result = await emailjs.send(
        'service_xhfocnc',
        'template_x906o7a',
        formData,
        'ETWgFNCQJJWN-FEc_'
      );

      console.log(result.text);
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A0A0A] rounded-xl border border-[#1E1E1E] shadow-md max-w-xl mx-auto w-full p-6"
    >
      <h2 className="text-xl font-medium text-white/95 mb-6">Send a Message</h2>

      {status.submitted && status.success && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0D2516] border border-[#15803D] text-[#86EFAC] text-sm rounded-md p-4 mb-6"
        >
          <div className="flex items-start">
            <svg className="w-4 h-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p>Your message has been sent successfully! I'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {status.submitted && status.error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#280A0A] border border-[#A72828] text-[#FECACA] text-sm rounded-md p-4 mb-6"
        >
          <div className="flex items-start">
            <svg className="w-4 h-4 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p>{status.error}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium text-white/70">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-[#262626] rounded-md p-2.5 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium text-white/70">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="w-full bg-[#121212] border border-[#262626] rounded-md p-2.5 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-white/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-[#121212] border border-[#262626] rounded-md p-2.5 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full inline-flex items-center justify-center rounded-md bg-white text-[#0A0A0A] px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-white/90 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {status.submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;