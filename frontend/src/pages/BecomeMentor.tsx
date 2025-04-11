import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  techSkills: string;
}

const BecomeMentor: React.FC = () => {
  const [formData, setFormData] = useState({
    techSkills: '',
    experience: '',
  });
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', title: '', description: '', techSkills: '' },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (id: string, field: keyof Project, value: string) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const addProject = () => {
    setProjects(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: '',
        description: '',
        techSkills: '',
      },
    ]);
  };

  const removeProject = (id: string) => {
    if (projects.length > 1) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ ...formData, projects });
    alert('Mentor application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Become a Mentor</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Tech Skills */}
          <div className="mb-6">
            <label htmlFor="techSkills" className="block text-sm font-medium text-gray-700 mb-1">
              Your Technical Skills (comma separated)
            </label>
            <input
              type="text"
              id="techSkills"
              name="techSkills"
              value={formData.techSkills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., React, Node.js, Python, Machine Learning"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-6">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Your Professional Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your professional background and experience..."
              required
            />
          </div>

          {/* Projects */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Projects
            </label>
            
            {projects.map((project, index) => (
              <div key={project.id} className="mb-4 p-4 border border-gray-200 rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-800">Project {index + 1}</h3>
                  {projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProject(project.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor={`title-${project.id}`} className="block text-sm text-gray-600 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id={`title-${project.id}`}
                    value={project.title}
                    onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project title"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor={`description-${project.id}`} className="block text-sm text-gray-600 mb-1">
                    Description
                  </label>
                  <textarea
                    id={`description-${project.id}`}
                    value={project.description}
                    onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the project..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor={`techSkills-${project.id}`} className="block text-sm text-gray-600 mb-1">
                    Technologies Used (comma separated)
                  </label>
                  <input
                    type="text"
                    id={`techSkills-${project.id}`}
                    value={project.techSkills}
                    onChange={(e) => handleProjectChange(project.id, 'techSkills', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React, Node.js, MongoDB"
                    required
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addProject}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Another Project
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeMentor;