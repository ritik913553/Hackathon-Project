import Rightbar from "./Rightbar";

export default function CreatePost() {
  return (
    <div className="flex">
      {/* Scrollable Post Area */}
      <div className="flex-1 mt-2 p-4 overflow-y-auto h-[calc(100vh-4rem)] pr-80 bg-gray-100">
        {/* Create Post Section */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <p className="font-semibold mb-2">Create Post</p>
          <textarea
            className="w-full border rounded p-2"
            rows={3}
            placeholder="What's on your mind?"
          />
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-400 rounded-full" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">1 hour ago</p>
                </div>
              </div>
              <p className="mt-2">This is a sample post {i + 1} 🚀</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Right Sidebar */}
      <div className="hidden xl:block w-72 fixed top-16 right-0 bottom-0 p-4 bg-white shadow-md">
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

      {/* <Rightbar setActiveView={setActiveView} /> */}
    </div>
  );
}
