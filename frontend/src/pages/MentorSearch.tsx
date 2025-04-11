// import React from 'react';

// type Mentor = {
//   id: number;
//   name: string;
//   expertise: string;
//   image: string;
// };

// const mentors: Mentor[] = Array.from({ length: 10 }, (_, i) => ({
//   id: i + 1,
//   name: `Mentor ${i + 1}`,
//   expertise: `Expert in ${["Web Development", "Data Science", "AI", "Design", "Cybersecurity"][i % 5]}`,
//   image: `https://i.pravatar.cc/150?img=${i + 40}`,
// }));

// const MentorSearch: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8 xl:mr-72 mt-10"> {/* 👈 Right margin for sidebar */}
//       <div className="max-w-7xl mx-auto">
//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             defaultValue="find mentors"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Search for mentors..."
//           />
//         </div>

//         {/* Mentor Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {mentors.map((mentor) => (
//             <div
//               key={mentor.id}
//               className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={mentor.image}
//                   alt={mentor.name}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{mentor.name}</h3>
//                   <p className="text-sm text-gray-500">{mentor.expertise}</p>
//                 </div>
//               </div>
//               <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
//                 Message
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorSearch;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Mentor = {
  id: number;
  name: string;
  expertise: string;
  image: string;
  rating: number;
  experience: string;
  skills: string[];
};

const mentors: Mentor[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Mentor ${i + 1}`,
  expertise: `Expert in ${["Web Development", "Data Science", "AI", "Design", "Cybersecurity"][i % 5]}`,
  image: `https://i.pravatar.cc/150?img=${i + 40}`,
  rating: Math.round((Math.random() * 1 + 4) * 10) / 10, // Random rating between 4.0-5.0
  experience: `${Math.floor(Math.random() * 10) + 3}+ years`, // 3-12 years
  skills: [
    ["React", "Node.js", "TypeScript"][i % 3],
    ["Python", "Machine Learning", "TensorFlow"][i % 3],
    ["UI/UX", "Figma", "Adobe XD"][i % 3]
  ].filter(Boolean)
}));

const MentorSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const allSkills = Array.from(new Set(mentors.flatMap(mentor => mentor.skills)));
  
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mentor.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = !selectedSkill || mentor.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 px-4 py-8 sm:px-6 lg:px-8"
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
            Find Your Perfect Mentor
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Connect with experienced professionals to accelerate your learning journey
          </motion.p>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="mb-4">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Mentors
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
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Search by name or expertise..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        {filteredMentors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No mentors found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredMentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-indigo-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 relative">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-0.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {mentor.rating}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{mentor.name}</h3>
                      <p className="text-sm text-indigo-600 font-medium mb-1">{mentor.expertise}</p>
                      <p className="text-xs text-gray-500 mb-3">{mentor.experience} experience</p>
                      <div className="flex flex-wrap gap-1.5">
                        {mentor.skills.map(skill => (
                          <span 
                            key={skill} 
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                    >
                      Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-lg border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                    >
                      View Profile
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MentorSearch;