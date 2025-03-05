import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-indigo-600">Abdul Baasith</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/baasith6" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Github className="h-6 w-6 text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-baasith" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin className="h-6 w-6 text-gray-700" />
              </a>
              <a href="mailto:abdulbaasith1124@gmail.com" 
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Mail className="h-6 w-6 text-gray-700" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center">
                View Projects
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img 
                  src="/images/abc.jpg" 
                  alt="Abdul Baasith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Code className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce p-2 bg-white rounded-full shadow-md">
            <ArrowDown className="h-6 w-6 text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;