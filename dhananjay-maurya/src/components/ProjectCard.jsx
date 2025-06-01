// src/components/ProjectCard.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="bg-gray-200 border-2 border-dashed w-full h-48 rounded-t-xl" />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <div className="flex space-x-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;