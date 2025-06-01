// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const softSkills = [
    'Problem Solving', 'Communication', 'Team Collaboration', 
    'Time Management', 'Adaptability', 'Creativity'
  ];

  const tools = [
    'VS Code', 'Git & GitHub', 'Figma', 'Postman', 
    'Docker', 'AWS', 'Netlify', 'Vercel'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;