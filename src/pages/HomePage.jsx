import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DevFolio | Full-Stack Web Developer</title>
        <meta name="description" content="Portfolio of a full-stack web developer specializing in React, Node.js, and modern web technologies." />
      </Helmet>
      
      <Hero />
    </>
  );
};

export default HomePage;