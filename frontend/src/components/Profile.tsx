// Profile.tsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import PostSection from "../components/PostSection";
import FindGroups from "../pages/FindGroups";
import MentorSearch from "../pages/MentorSearch";
import BecomeMentor from "../pages/BecomeMentor";
import CreatePost from "../components/CreatePost";

const Profile: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddSkill = () => {
    if (input.trim() && !skills.includes(input.trim())) {
      setSkills([...skills, input.trim()]);
      setInput("");
    }
  };
  const [activeView, setActiveView] = useState<string>(""); // empty string = show "Hello World"

  const renderActiveView = () => {
    switch (activeView) {
      case "myGroups":
        return <FindGroups />;
      case "findMentors":
        return <MentorSearch />;
      case "becomeMentor":
        return <BecomeMentor />;
      case "findProject":
        return <div>Find Project Content</div>;
      default:
        return <CreatePost />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 bottom-0 w-64 z-40 bg-white shadow">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Main content with fixed Navbar */}
      <div className="flex-1 flex flex-col ml-16 md:ml-64">
        {/* Top Navbar */}
        <div className="h-16 bg-white shadow-md fixed top-0 left-16 md:left-64 right-0 z-10 flex items-center justify-between px-6">
          <div className="font-bold text-xl">Profile</div>
          <div className="flex space-x-4 items-center">
            <button>🔔</button>
            <button className="rounded-full border p-2 hover:bg-gray-200">
              👤
            </button>
          </div>
        </div>

        {/* Profile Scrollable Content */}
        <div className="mt-16 p-4 overflow-y-auto flex-1 bg-gray-100">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Banner + Profile Info */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-32 sm:h-40 bg-blue-500 relative">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="profile"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white absolute -bottom-12 sm:-bottom-16 left-4 sm:left-6"
                />
              </div>
              <div className="pt-16 sm:pt-20 pl-4 sm:pl-6 pb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Vikram Kumar
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  vikram@example.com
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">Projects:</span> 5+
                    completed
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span> 1+ years
                    frontend development
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Skills Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-md sm:text-lg font-semibold mb-4 text-gray-800">
                Tech Skills
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                  placeholder="Add a skill..."
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddSkill}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-1 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
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
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Find Groups
          </button>
          <button className="w-full bg-green-500 text-white p-2 rounded">
            Find Mentors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
