// Post.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-gray-900 text-white fixed h-full p-4">
        {/* Sidebar content (unchanged) */}
        <div className="space-y-4">
          <button className="block w-full text-left hover:bg-gray-700 p-2 rounded">Dashboard</button>
          <button className="block w-full text-left hover:bg-gray-700 p-2 rounded">Explore</button>
        </div>
      </div>

      {/* Main content with Top Navbar */}
      <div className="flex-1 flex flex-col ml-16 md:ml-64">
        {/* Top Navbar */}
        <div className="h-16 bg-white shadow-md fixed top-0 left-16 md:left-64 right-0 z-10 flex items-center justify-between px-6">
          <div className="font-bold text-xl">Home</div>
          <div className="flex space-x-4 items-center">
            <button>🔔</button>
            <button onClick={() => navigate("/profile")} className="rounded-full border p-2 hover:bg-gray-200">
              👤
            </button>
          </div>
        </div>

        {/* Scrollable Post Area */}
        <div className="mt-16 p-4 overflow-y-auto flex-1 bg-gray-100">
          {/* Create Post Section */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <p className="font-semibold mb-2">Create Post</p>
            <textarea className="w-full border rounded p-2" rows={3} placeholder="What's on your mind?" />
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-400 rounded-full" />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">1 hour ago</p>
                  </div>
                </div>
                <p className="mt-2">This is a sample post {i + 1} 🚀</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block w-72 fixed right-0 top-16 bottom-0 p-4 bg-white shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <div className="space-y-2">
          <button className="w-full bg-blue-500 text-white p-2 rounded">Find Groups</button>
          <button className="w-full bg-green-500 text-white p-2 rounded">Find Mentors</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
