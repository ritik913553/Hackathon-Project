import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Session {
  id: string;
  studentName: string;
  date: string;
  time: string;
  topic: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface MenteeRequest {
  id: string;
  menteeName: string;
  topic: string;
  message: string;
  date: string;
}

const MentorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'requests' | 'history'>('upcoming');
  
  // Sample data - in a real app, this would come from your API
  const upcomingSessions: Session[] = [
    { id: '1', studentName: 'Alex Johnson', date: '2025-04-15', time: '14:00', topic: 'React Hooks', status: 'upcoming' },
    { id: '2', studentName: 'Sarah Williams', date: '2025-04-18', time: '10:30', topic: 'Tailwind CSS', status: 'upcoming' },
  ];
  
  const menteeRequests: MenteeRequest[] = [
    { id: '1', menteeName: 'Jordan Lee', topic: 'Node.js API Development', message: 'I need help with setting up a Node.js RESTful API for my project.', date: '2025-04-12' },
    { id: '2', menteeName: 'Taylor Smith', topic: 'React State Management', message: 'Looking for guidance on managing state in a complex React application.', date: '2025-04-13' },
  ];
  
  const sessionHistory: Session[] = [
    { id: '3', studentName: 'Michael Brown', date: '2025-04-05', time: '15:00', topic: 'JavaScript Promises', status: 'completed' },
    { id: '4', studentName: 'Emily Davis', date: '2025-04-01', time: '11:00', topic: 'CSS Flexbox', status: 'completed' },
    { id: '5', studentName: 'Chris Wilson', date: '2025-03-28', time: '13:30', topic: 'TypeScript Basics', status: 'cancelled' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'upcoming':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {upcomingSessions.length > 0 ? (
              upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white rounded-lg shadow p-5 border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{session.studentName}</h3>
                      <p className="text-gray-600 mt-1">{session.topic}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-indigo-600">{new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                      <div className="text-gray-500">{session.time}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="px-4 py-2 bg-green-50 text-green-700 rounded-md font-medium text-sm hover:bg-green-100 transition-colors">
                      Start Session
                    </button>
                    <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">No upcoming sessions scheduled.</p>
              </div>
            )}
          </motion.div>
        );
        
      case 'requests':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {menteeRequests.length > 0 ? (
              menteeRequests.map((request) => (
                <div key={request.id} className="bg-white rounded-lg shadow p-5">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg text-gray-800">{request.menteeName}</h3>
                    <span className="text-gray-500 text-sm">{new Date(request.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded font-medium">
                      {request.topic}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-3 text-sm">{request.message}</p>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium text-sm hover:bg-indigo-700 transition-colors">
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium text-sm hover:bg-gray-300 transition-colors">
                      Decline
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500">No pending mentee requests.</p>
              </div>
            )}
          </motion.div>
        );
        
      case 'history':
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topic
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sessionHistory.map((session) => (
                  <tr key={session.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{session.studentName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{session.topic}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        <span className="ml-2 text-xs text-gray-400">{session.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${session.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          session.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-full rounded-lg p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mentor Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your mentoring sessions and mentee requests</p>
        </div>
        <div className="bg-indigo-50 text-indigo-700 py-2 px-4 rounded-lg font-medium flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>2 hours this week</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex space-x-2">
          <div className="bg-indigo-100 text-indigo-800 py-2 px-4 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">3 Active Mentees</span>
          </div>
          <div className="bg-green-100 text-green-800 py-2 px-4 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="font-medium">12 Sessions Completed</span>
          </div>
          <div className="bg-yellow-100 text-yellow-800 py-2 px-4 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="font-medium">4.8 Rating</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <nav className="flex space-x-2">
          <button
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'upcoming' 
                ? 'bg-indigo-100 text-indigo-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Sessions
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'requests' 
                ? 'bg-indigo-100 text-indigo-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('requests')}
          >
            Mentee Requests
            {menteeRequests.length > 0 && (
              <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">
                {menteeRequests.length}
              </span>
            )}
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              activeTab === 'history' 
                ? 'bg-indigo-100 text-indigo-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('history')}
          >
            Session History
          </button>
        </nav>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default MentorDashboard;