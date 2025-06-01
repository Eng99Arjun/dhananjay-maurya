// src/components/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: '#',
      liveLink: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: '#',
      liveLink: '#',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast for any location worldwide.',
      technologies: ['React', 'Weather API', 'Chart.js'],
      githubLink: '#',
      liveLink: '#',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'Custom CMS for bloggers with markdown support and SEO optimization.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      githubLink: '#',
      liveLink: '#',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-friendly fitness tracking application with workout plans and progress charts.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubLink: '#',
      liveLink: '#',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubLink: '#',
      liveLink: '#',
      category: 'frontend'
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;