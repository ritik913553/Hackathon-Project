import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import FindGroups from "../pages/FindGroups";
import MentorSearch from "../pages/MentorSearch";
import BecomeMentor from "../pages/BecomeMentor";
import CreatePost from "../components/CreatePost";
import Rightbar from "./Rightbar";

const Post = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<string>("createPost"); // 👈 Default set to "createPost"

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
      case "createPost":
      default:
        return <CreatePost />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 h-screen">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <div className="h-16">
          <TopNav />
        </div>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {renderActiveView()}
        </main>
      </div>

      {/* Right Sidebar with buttons to switch views */}
      {/* <div className="hidden xl:block w-72 fixed right-0 top-16 bottom-0 p-4 bg-white shadow-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-4 py-2 rounded mb-4"
        />
        <div className="space-y-2">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded"
            onClick={() => setActiveView("myGroups")}
          >
            Find Groups
          </button>
          <button
            className="w-full bg-green-500 text-white p-2 rounded"
            onClick={() => setActiveView("findMentors")}
          >
            Find Mentors
          </button>
          <button
            className="w-full bg-gray-500 text-white p-2 rounded"
            onClick={() => setActiveView("becomeMentor")}
          >
            Become a Mentor
          </button>
          <button
            className="w-full bg-purple-500 text-white p-2 rounded"
            onClick={() => setActiveView("createPost")} // 👈 Show CreatePost again
          >
            Create Post
          </button>
        </div>
      </div> */}
      
      <Rightbar setActiveView={setActiveView} />

    </div>
  );
};

export default Post;
