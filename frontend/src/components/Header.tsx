import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SkillSphere</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}