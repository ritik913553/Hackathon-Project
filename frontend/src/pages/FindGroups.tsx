import React from 'react';

type User = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const users: User[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  description: `This is a short description about User ${i + 1}. They are part of various tech and design groups.`,
  image: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

const GroupSearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            defaultValue="find groups"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for groups..."
          />
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.description}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default GroupSearch;
