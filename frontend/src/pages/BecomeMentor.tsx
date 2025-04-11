// import React, { useState } from 'react';

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   techSkills: string;
// }

// const BecomeMentor: React.FC = () => {
//   const [formData, setFormData] = useState({
//     techSkills: '',
//     experience: '',
//   });
//   const [projects, setProjects] = useState<Project[]>([
//     { id: '1', title: '', description: '', techSkills: '' },
//   ]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleProjectChange = (id: string, field: keyof Project, value: string) => {
//     setProjects(prev =>
//       prev.map(project =>
//         project.id === id ? { ...project, [field]: value } : project
//       )
//     );
//   };

//   const addProject = () => {
//     setProjects(prev => [
//       ...prev,
//       {
//         id: Date.now().toString(),
//         title: '',
//         description: '',
//         techSkills: '',
//       },
//     ]);
//   };

//   const removeProject = (id: string) => {
//     if (projects.length > 1) {
//       setProjects(prev => prev.filter(project => project.id !== id));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log({ ...formData, projects });
//     alert('Mentor application submitted successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Become a Mentor</h2>
        
//         <form onSubmit={handleSubmit}>
//           {/* Tech Skills */}
//           <div className="mb-6">
//             <label htmlFor="techSkills" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Technical Skills (comma separated)
//             </label>
//             <input
//               type="text"
//               id="techSkills"
//               name="techSkills"
//               value={formData.techSkills}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., React, Node.js, Python, Machine Learning"
//               required
//             />
//           </div>

//           {/* Experience */}
//           <div className="mb-6">
//             <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
//               Your Professional Experience
//             </label>
//             <textarea
//               id="experience"
//               name="experience"
//               value={formData.experience}
//               onChange={handleInputChange}
//               rows={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Describe your professional background and experience..."
//               required
//             />
//           </div>

//           {/* Projects */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Your Projects
//             </label>
            
//             {projects.map((project, index) => (
//               <div key={project.id} className="mb-4 p-4 border border-gray-200 rounded-md">
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="font-medium text-gray-800">Project {index + 1}</h3>
//                   {projects.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeProject(project.id)}
//                       className="text-red-500 hover:text-red-700 text-sm"
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor={`title-${project.id}`} className="block text-sm text-gray-600 mb-1">
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     id={`title-${project.id}`}
//                     value={project.title}
//                     onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Project title"
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor={`description-${project.id}`} className="block text-sm text-gray-600 mb-1">
//                     Description
//                   </label>
//                   <textarea
//                     id={`description-${project.id}`}
//                     value={project.description}
//                     onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
//                     rows={3}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Describe the project..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor={`techSkills-${project.id}`} className="block text-sm text-gray-600 mb-1">
//                     Technologies Used (comma separated)
//                   </label>
//                   <input
//                     type="text"
//                     id={`techSkills-${project.id}`}
//                     value={project.techSkills}
//                     onChange={(e) => handleProjectChange(project.id, 'techSkills', e.target.value)}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="e.g., React, Node.js, MongoDB"
//                     required
//                   />
//                 </div>
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={addProject}
//               className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
//             >
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//               </svg>
//               Add Another Project
//             </button>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BecomeMentor;


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
  });
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', title: '', description: '', techSkills: '' },
  ]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log({ ...formData, projects });
      setIsSubmitting(false);
      setCurrentStep(3); // Move to success step
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
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

        <motion.div 
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header with graphic element */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 px-6 text-white relative">
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M40,40 L160,40 L160,160 L40,160 Z" />
                <path fill="white" d="M10,10 L50,10 L50,50 L10,50 Z" />
                <path fill="white" d="M150,10 L190,10 L190,50 L150,50 Z" />
                <path fill="white" d="M10,150 L50,150 L50,190 L10,190 Z" />
                <path fill="white" d="M150,150 L190,150 L190,190 L150,190 Z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold relative z-10">Become a Mentor</h2>
            <p className="mt-2 opacity-90 relative z-10">Share your expertise and help others grow in their careers</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {currentStep === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="techSkills" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Technical Skills <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg width="20" height="20" fill="none" className="text-gray-400">
                        <path d="M7 8h10M7 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 16.25V19l2.6-1.5L16 16.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 3.5H5a2 2 0 00-2 2v13a2 2 0 002 2h9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="techSkills"
                      name="techSkills"
                      value={formData.techSkills}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      placeholder="e.g., React, Node.js, Python"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">List the technologies you're proficient in and can mentor others on</p>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Professional Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="relative rounded-lg shadow-sm">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <svg width="20" height="20" fill="none">
                        <path d="M17 6.5H3m14 0a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2v-7a2 2 0 012-2m14 0V4a1.5 1.5 0 00-1.5-1.5h-11A1.5 1.5 0 003 4v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M9.5 11h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      placeholder="Describe your experience in 2-3 paragraphs..."
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Share your relevant work experience and how it's qualified you to be a mentor</p>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg font-medium flex items-center justify-center"
                  >
                    Next: Add Projects
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-indigo-700">
                    Add projects that showcase your expertise. The more detailed your examples, the better.
                  </p>
                </div>

                <div className="space-y-6">
                  <AnimatePresence>
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center">
                            <div className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm mr-3">
                              {index + 1}
                            </div>
                            <h3 className="font-semibold text-gray-800">Project Details</h3>
                          </div>
                          {projects.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeProject(project.id)}
                              className="text-red-500 hover:text-red-700 flex items-center text-sm transition"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Project Title</label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                              placeholder="What did you build?"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Description</label>
                            <textarea
                              value={project.description}
                              onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                              placeholder="Describe what you built and your role in the project"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Technologies Used</label>
                            <input
                              type="text"
                              value={project.techSkills}
                              onChange={(e) => handleProjectChange(project.id, 'techSkills', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                              placeholder="e.g., React, Firebase, Tailwind"
                              required
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={addProject}
                    className="flex items-center justify-center w-full py-3 px-4 border border-dashed border-indigo-300 rounded-lg text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Another Project
                  </button>
                </div>

                <div className="flex justify-between pt-6 space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-1/3 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium flex items-center justify-center"
                  >
                    Submit Application
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Thank you for applying to be a mentor. Our team will review your application and get back to you within 5-7 business days.
                </p>
                <button
                  type="button"
                  className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
                  onClick={() => {
                    setCurrentStep(1);
                    setFormData({
                      techSkills: '',
                      experience: '',
                    });
                    setProjects([
                      { id: '1', title: '', description: '', techSkills: '' },
                    ]);
                  }}
                >
                  Submit Another Application
                </button>
              </motion.div>
            )}
          </form>
        </motion.div>

        {isSubmitting && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mr-4"></div>
              <p className="text-gray-700 font-medium">Submitting your application...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeMentor;