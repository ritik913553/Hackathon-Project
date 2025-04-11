import React from 'react';

type Mentor = {
  id: number;
  name: string;
  expertise: string;
  image: string;
};

const mentors: Mentor[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Mentor ${i + 1}`,
  expertise: `Expert in ${["Web Development", "Data Science", "AI", "Design", "Cybersecurity"][i % 5]}`,
  image: `https://i.pravatar.cc/150?img=${i + 40}`,
}));

const MentorSearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            defaultValue="find mentors"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search for mentors..."
          />
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-500">{mentor.expertise}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Message
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSearch;
