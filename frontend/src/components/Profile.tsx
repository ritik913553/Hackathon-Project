import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import FindGroups from "../pages/FindGroups";
import MentorSearch from "../pages/MentorSearch";
import BecomeMentor from "../pages/BecomeMentor";
import CreatePost from "../components/CreatePost";
import FindProject from "../pages/FindProject";
import ResourcesSection from "../pages/Resources";

const Profile: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [experiences, setExperiences] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [expInput, setExpInput] = useState("");
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showExpModal, setShowExpModal] = useState(false);
  const [activeView, setActiveView] = useState<string>("");

  const handleAddSkill = () => {
    if (input.trim() && !skills.includes(input.trim())) {
      setSkills([...skills, input.trim()]);
      setInput("");
      setShowSkillModal(false);
    }
  };

  const handleAddExperience = () => {
    if (expInput.trim() && !experiences.includes(expInput.trim())) {
      setExperiences([...experiences, expInput.trim()]);
      setExpInput("");
      setShowExpModal(false);
    }
  };

  const renderActiveView = () => {
    switch (activeView) {
      case "myGroups":
        return <FindGroups />;
      case "findMentors":
        return <MentorSearch />;
      case "becomeMentor":
        return <BecomeMentor />;
      case "createPost":
        return <CreatePost />;
      case "createPost":
        return <CreatePost />;
        case 'findProject':
        return <FindProject/>;
      case 'resources':
        return <ResourcesSection/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 h-screen">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <div className="h-16">
          <TopNav />
        </div>

        <main
          className={`flex-1 overflow-y-auto bg-gray-100 p-4 ${
            activeView === "" ? "pr-[280px]" : ""
          }`}
        >
          {activeView === "" ? (
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
                      <span className="font-semibold">Projects:</span> 5+ completed
                    </p>
                    <p>
                      <span className="font-semibold">Experience:</span> 1+ years frontend development
                    </p>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => setShowSkillModal(true)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Add Skill
                    </button>
                    <button
                      onClick={() => setShowExpModal(true)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Add Experience
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            renderActiveView()
          )}
        </main>

        {/* Fixed Right Section (skills + exp panel) */}
        <div
          className={`w-[260px] h-full bg-white border-l fixed right-0 top-16 overflow-hidden shadow-lg p-4 transition-all duration-300 ${
            activeView === "" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                    className="text-blue-500 hover:text-red-600"
                    title="Remove skill"
                  >
                    ❌
                  </button>
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <div className="flex flex-wrap gap-2">
              {experiences.map((exp, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2"
                >
                  {exp}
                  <button
                    onClick={() =>
                      setExperiences(experiences.filter((_, i) => i !== index))
                    }
                    className="text-green-500 hover:text-red-600"
                    title="Remove experience"
                  >
                    ❌
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Modal */}
      {showSkillModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 space-y-4">
            <h3 className="text-lg font-semibold">Enter Skill</h3>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="e.g. React, Java"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowSkillModal(false)}
                className="px-3 py-1 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSkill}
                className="bg-blue-500 text-white px-4 py-1 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {showExpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full space-y-4 max-w-md mx-auto">
            <h3 className="text-lg font-semibold">Enter Experience</h3>
            <input
              type="text"
              value={expInput}
              onChange={(e) => setExpInput(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="e.g. 1 year frontend dev OR Fresher"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowExpModal(false)}
                className="px-3 py-1 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddExperience}
                className="bg-green-500 text-white px-4 py-1 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
