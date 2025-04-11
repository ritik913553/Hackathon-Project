import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import PostSection from '../components/PostSection';

export default function Dashboard() {
  const [activeView, setActiveView] = useState('posts');

  const renderActiveView = () => {
    switch (activeView) {
      case 'myGroups':
        return <div>My Groups Content</div>;
      case 'findMentors':
        return <div>Find Mentors Content</div>;
      case 'becomeMentor':
        return <div>Become Mentor Content</div>;
      case 'findProject':
        return <div>Find Project Content</div>;
      default:
        return <PostSection />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNav />
      <div className="flex flex-1">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}