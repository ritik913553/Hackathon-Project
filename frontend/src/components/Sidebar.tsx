import { Dispatch, SetStateAction } from "react";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom"; // 👈 import this

interface SidebarProps {
  activeView: string;
  setActiveView: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navigate = useNavigate(); // 👈 use this hook

  const handleLogout = () => {
    // Clear local storage, tokens, etc. if needed
    navigate("/"); // 👈 redirect to home
  };

  return (
    <aside className="h-full w-full bg-white shadow-md p-4 hidden md:block bg-zinc-600 text-white">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-600 mt-2 ml-5">SkillSphere</h1>
      </div>

      <nav className="space-y-2  flex flex-col gap-5">
        <ActionButton
          active={activeView === "myGroups"}
          onClick={() => setActiveView("myGroups")}
          icon="👥"
          label="My Groups"
        />
        <ActionButton
          active={activeView === "findMentors"}
          onClick={() => setActiveView("findMentors")}
          icon="🔍"
          label="Find Mentors"
        />
        <ActionButton
          active={activeView === "becomeMentor"}
          onClick={() => setActiveView("becomeMentor")}
          icon="🎓"
          label="Become Mentor"
        />
        <ActionButton
          active={activeView === "findProject"}
          onClick={() => setActiveView("findProject")}
          icon="💼"
          label="Find Project"
        />
      </nav>

      <div className="mt-8 space-y-2 flex flex-col gap-5">
        <ActionButton
          active={false}
          onClick={() => console.log("Theme toggled")}
          icon="🌓"
          label="Theme"
        />

        <ActionButton
          active={false}
          onClick={() => setActiveView("resources")}
          icon="⚙️"
          label="Resources"
        />

        <ActionButton
          active={false}
          onClick={handleLogout} // 👈 use this on logout
          icon="🚪"
          label="Logout"
        />
      </div>
    </aside>
  );
}
