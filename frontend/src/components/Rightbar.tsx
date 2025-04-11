import React from "react";

interface RightbarProps {
  setActiveView: (view: string) => void;
}

const Rightbar: React.FC<RightbarProps> = ({ setActiveView }) => {
  return (
    <div className="hidden xl:block w-72 fixed right-0 top-16 bottom-0 p-4 bg-white shadow-md">
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
          onClick={() => setActiveView("createPost")}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
