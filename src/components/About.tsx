import React from 'react';
import { Code, Server, Globe, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Working on code" 
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Software Engineer with 1+ years of experience
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate software engineer specializing in building exceptional digital experiences. 
              With a strong foundation in both frontend and backend technologies, I create scalable, 
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            My journey in software development began as a freelance developer while pursuing my Bachelor's degree in Software Engineering. Through hands-on experience with real-world projects, I honed my skills across the full development stack, working with startups and established companies to deliver scalable and efficient solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Frontend</h4>
                  <p className="text-gray-600">React, Vue, Angular</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Server className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Backend</h4>
                  <p className="text-gray-600">Node.js, Python, Java</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Web</h4>
                  <p className="text-gray-600">HTML5, CSS3, JavaScript</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Coffee className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Other</h4>
                  <p className="text-gray-600">Git, Docker, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;