import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    linkedin: '', // added LinkedIn field
  });

  const [projects, setProjects] = useState<Project[]>([
    { id: '1', title: '', description: '', techSkills: '' },
  ]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (id: string, field: keyof Project, value: string) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const addProject = () => {
    setProjects((prev) => [
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
      setProjects((prev) => prev.filter((project) => project.id !== id));
    }
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log({ ...formData, projects });
      setIsSubmitting(false);
      setCurrentStep(3);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-auto">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  } transition-all duration-300`}
                >
                  {currentStep > step ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{step}</span>
                  )}
                </div>
                {step < 3 && (
                  <div
                    className={`w-20 h-1 ${
                      currentStep > step ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-8">
            <span className="text-xs font-medium text-gray-500">Your Info</span>
            <span className="text-xs font-medium text-gray-500">Projects</span>
            <span className="text-xs font-medium text-gray-500">Complete</span>
          </div>
        </div>

        {/* Form Box */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 px-6 text-white relative">
            <h2 className="text-3xl font-bold relative z-10">Become a Mentor</h2>
            <p className="mt-2 opacity-90 relative z-10">
              Share your expertise and help others grow in their careers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {currentStep === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Skills
                  </label>
                  <input
                    type="text"
                    name="techSkills"
                    value={formData.techSkills}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., React, Node.js"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Share your professional experience..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="https://linkedin.com/in/yourname"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700"
                >
                  Next
                </button>
              </>
            )}

            {currentStep === 2 && (
              <>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-gray-100 p-4 rounded-lg space-y-4 border border-gray-300"
                  >
                    <h3 className="font-semibold text-gray-800">
                      Project #{index + 1}
                    </h3>
                    <input
                      type="text"
                      placeholder="Project Title"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(project.id, 'title', e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                    <textarea
                      placeholder="Description"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(project.id, 'description', e.target.value)
                      }
                      rows={3}
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Tech Skills Used"
                      value={project.techSkills}
                      onChange={(e) =>
                        handleProjectChange(project.id, 'techSkills', e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded"
                      required
                    />
                    {projects.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProject(project.id)}
                        className="text-red-600 hover:underline text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProject}
                  className="text-indigo-600 hover:underline text-sm"
                >
                  + Add Another Project
                </button>
                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <div className="text-center py-10 space-y-4">
                <h3 className="text-2xl font-bold text-green-600">Thank you!</h3>
                <p className="text-gray-600">
                  Your mentor application has been submitted successfully.
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="mt-4 text-indigo-600 underline"
                >
                  Submit Another
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BecomeMentor;
