import CreatePost from './CreatePost';
import Post from './Post';

export default function PostSection() {
  // This would come from your API/state in a real app
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: 'JD',
      content: 'Looking for a mentor to help me with React and TypeScript. I have some experience but want to take my skills to the next level.',
      timestamp: '2 hours ago',
      likes: 5,
      comments: 3
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'JS',
      content: 'Just published a new tutorial on advanced state management in React. Check it out and let me know what you think!',
      timestamp: '5 hours ago',
      likes: 12,
      comments: 7
    }
  ];

  return (
    <div className="space-y-6">
      <CreatePost />
      <div className="space-y-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}