import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/shime.jpg')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60"></div>
      
      <div className="container-custom section-padding text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm{' '}
            <span className="text-gradient animate-pulse">
              Shmelis Solomon
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Full Stack Developer & UI/UX Designer passionate about creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Yadi-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:scale-110 hover:bg-opacity-20 transition-all duration-300 text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:scale-110 hover:bg-opacity-20 transition-all duration-300 text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:shmelissolomon12@gmail.com"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:scale-110 hover:bg-opacity-20 transition-all duration-300 text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;