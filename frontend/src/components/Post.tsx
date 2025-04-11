import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import FindGroups from "../pages/FindGroups";
import MentorSearch from "../pages/MentorSearch";
import BecomeMentor from "../pages/BecomeMentor";
import CreatePost from "../components/CreatePost";
import Rightbar from "./Rightbar";
import FindProject from "../pages/FindProject";
import ResourcesSection from "../pages/Resources";

const Post = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<string>("createPost"); // 👈 Default view is CreatePost

  const renderActiveView = () => {
    switch (activeView) {
      case "myGroups":
        return <FindGroups />;
      case "findMentors":
        return <MentorSearch />;
      case "becomeMentor":
        return <BecomeMentor />;
        case 'findProject':
          return <FindProject/>;
        case 'resources':
          return <ResourcesSection/>;
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

      {/* Show Rightbar only when in CreatePost view */}
      {activeView === "createPost" && (
        <Rightbar setActiveView={setActiveView} />
      )}
    </div>
  );
};

export default Post;
