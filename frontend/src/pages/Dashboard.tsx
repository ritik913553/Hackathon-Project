import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import FindGroups from './FindGroups';
import MentorSearch from './MentorSearch';
import BecomeMentor from './BecomeMentor';
import CreatePost from '../components/CreatePost';
import FindProject from './FindProject';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>(''); // empty string = show "CreatePost"

  const renderActiveView = () => {
    switch (activeView) {
      case 'myGroups':
        return <FindGroups />;
      case 'findMentors':
        return <MentorSearch />;
      case 'becomeMentor':
        return <BecomeMentor />;
      case 'findProject':
        return <FindProject/>;
      default:
        return <CreatePost />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TopNav */}
        <div className="h-16">
          <TopNav />
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {renderActiveView()}
        </main>
        
      </div>
    </div>
  );
}
