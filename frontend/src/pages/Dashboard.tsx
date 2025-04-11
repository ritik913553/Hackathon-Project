import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import PostSection from '../components/PostSection';
import FindGroups from './FindGroups';
import MentorSearch from './MentorSearch';
import BecomeMentor from './BecomeMentor';
import CreatePost from '../components/CreatePost';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>(''); // empty string = show "Hello World"

  const renderActiveView = () => {
    switch (activeView) {
      case 'myGroups':
        return <FindGroups />;
      case 'findMentors':
        return <MentorSearch />;
      case 'becomeMentor':
        return <BecomeMentor />;
      case 'findProject':
        return <div>Find Project Content</div>;
      default:
        return <CreatePost/>;
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Fixed Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopNav />
      </div>

      {/* Main Content Section */}
      <div className="flex pt-16 h-full">
        {/* Fixed Sidebar */}
        <div className="fixed top-16 left-0 bottom-0 w-64 z-40 bg-white shadow">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
        </div>

        {/* Scrollable Main Section */}
        <main className="ml-64 flex-1 overflow-y-auto p-4 bg-gray-100 h-[calc(100vh-4rem)]">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
