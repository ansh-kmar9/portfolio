import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Me | DevFolio</title>
        <meta name="description" content="Get in touch with me for project inquiries, collaborations, or just to say hello." />
      </Helmet>
      
      {/* Zero top space on mobile */}
      <section className="pt-0 xs:pt-1 sm:pt-3 md:pt-6 px-1 xs:px-2 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-[99%] xs:max-w-[98%] sm:max-w-[95%] lg:max-w-6xl">
          <div className="mb-2 sm:mb-4 md:mb-6">
            <h1 className="font-medium text-base xs:text-lg sm:text-xl md:text-2xl text-white/95 mb-0.5 xs:mb-1 sm:mb-2">
              Get In Touch
            </h1>
            <p className="text-[10px] xs:text-xs sm:text-sm text-white/70">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          
          {/* Keep the original grid structure but adjust the gap */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-start">
            {/* Leave ContactForm and SocialLinks as they are */}
            <ContactForm />
            <SocialLinks />
          </div>
          
          {/* Privacy note */}
          <p className="text-white/50 text-center text-[9px] xs:text-[10px] sm:text-xs mt-3 sm:mt-5">
            Your information is never shared with third parties
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;