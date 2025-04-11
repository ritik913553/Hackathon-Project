import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  rating: number;
  members: number;
  creator: string;
  createdDate: string;
  image: string;
};

const initialProjects: Project[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description: `This project focuses on ${["Web Development", "Data Science", "AI", "Design", "Blockchain"][i % 5]}. Join us to collaborate and build something amazing!`,
  skills: [
    ["React", "Node.js", "TypeScript"][i % 3],
    ["Python", "ML", "TensorFlow"][i % 3],
    ["Solidity", "Ethereum", "Web3"][i % 3]
  ].filter(Boolean),
  rating: Math.round((Math.random() * 1 + 4) * 10) / 10, // 4.0-5.0
  members: Math.floor(Math.random() * 10) + 1, // 1-10 members
  creator: `User${i + 1}`,
  createdDate: `${Math.floor(Math.random() * 12) + 1} months ago`,
  image: `https://source.unsplash.com/random/300x300/?project,tech,${i}`
}));

const FindProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    skills: ''
  });

  const allSkills = Array.from(new Set(initialProjects.flatMap(project => project.skills)));
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = !selectedSkill || project.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  const topRatedProjects = [...projects]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const handleCreateProject = () => {
    const skillsArray = newProject.skills.split(',').map(skill => skill.trim());
    const newProjectObj: Project = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      skills: skillsArray,
      rating: 4.5, // Default rating for new projects
      members: 1,
      creator: "You",
      createdDate: "Just now",
      image: `https://source.unsplash.com/random/300x300/?${newProject.title}`
    };
    
    setProjects([newProjectObj, ...projects]);
    setNewProject({ title: '', description: '', skills: '' });
    setIsCreatingProject(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            Find or Create Projects
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Collaborate with others on exciting projects or start your own
          </motion.p>
        </div>

        {/* Search and Create */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Projects
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Search by project name or description..."
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <motion.button
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedSkill === skill
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCreatingProject(!isCreatingProject)}
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              >
                {isCreatingProject ? 'Cancel' : 'Create Project'}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Create Project Form */}
        <AnimatePresence>
          {isCreatingProject && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Create New Project</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter project name"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="projectDescription"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Describe your project..."
                  />
                </div>

                <div>
                  <label htmlFor="projectSkills" className="block text-sm font-medium text-gray-700 mb-1">
                    Required Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    id="projectSkills"
                    value={newProject.skills}
                    onChange={(e) => setNewProject({...newProject, skills: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="e.g., React, Node.js, TypeScript"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCreateProject}
                    disabled={!newProject.title || !newProject.description}
                    className={`w-full bg-blue-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ${
                      !newProject.title || !newProject.description ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}
                  >
                    Create Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Rated Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Rated Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRatedProjects.map((project) => (
              <motion.div
                key={`top-${project.id}`}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{project.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">{project.members} members</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Created by {project.creator}</span>
                  <span>{project.createdDate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">All Projects</h2>
            <span className="text-sm text-gray-500">{filteredProjects.length} projects found</span>
          </div>

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200"
            >
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No projects found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or create a new project</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                        <div className="flex items-center">
                          <div className="flex items-center mr-2">
                            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-medium">{project.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">{project.members} members</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white py-1 px-4 rounded-lg text-sm hover:bg-blue-700 transition"
                      >
                        Join Project
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FindProject;