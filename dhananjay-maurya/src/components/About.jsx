// src/components/About.jsx
import React from 'react';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full max-w-xs h-80" > 
              <img 
                src=".\src\assets\971.jpg" 
                alt="Dhananjay Maurya" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Curious about me? Here you have it:
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer based in India, specializing in building exceptional 
              digital experiences. With 1 year of experience in web development, I've worked with 
              startups and established companies to create web applications that are both beautiful and functional.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through tech blogs. I believe in continuous learning and staying updated 
              with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-indigo-600 mb-3">
                  <FaCode size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">Full Stack Dev</h4>
                <p className="text-gray-600">
                  Experience with both frontend and backend technologies
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-indigo-600 mb-3">
                  <FaPalette size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">UI/UX Design</h4>
                <p className="text-gray-600">
                  Creating intuitive and user-friendly interfaces
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-indigo-600 mb-3">
                  <FaRocket size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2">DevOps</h4>
                <p className="text-gray-600">
                  Deployment, CI/CD pipelines and cloud infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;