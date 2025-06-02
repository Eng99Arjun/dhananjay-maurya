// src/components/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Green Cart E-Commerce Platform',
      description: 'A full-featured e-commerce platform under development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      category: 'fullstack',
      image: 'src/assets/greencart.png'
    },
    {
      id: 2,
      title: 'EDoc+',
      description: 'An online doctor appointment booking system with user-friendly interface.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      category: 'Fullstack',
      image: 'src/assets/edoc.png'
    },
    {
      id: 3,
      title: 'PayX',
      description: 'Payment App to leverage backend Skills for secure transactions and analytics.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: '#',
      liveLink: '#',
      category: 'frontend',
      image: 'src/assets/payX.png'
    },

    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubLink: '#',
      liveLink: '#',
      category: 'frontend',
      image: 'src/assets/portfolio.png'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;