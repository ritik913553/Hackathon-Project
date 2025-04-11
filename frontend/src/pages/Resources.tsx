import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Resource = {
  id: number;
  title: string;
  type: 'notes' | 'cheatsheet' | 'project' | 'template';
  description: string;
  price: number;
  rating: number;
  author: string;
  image: string;
  downloads: number;
};

const initialResources: Resource[] = [
  {
    id: 1,
    title: 'React Complete Guide Notes',
    type: 'notes',
    description: 'Comprehensive handwritten notes covering React fundamentals to advanced concepts',
    price: 9.99,
    rating: 4.8,
    author: 'JaneDoe',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    downloads: 1245
  },
  {
    id: 2,
    title: 'Frontend Mentor Project Pack',
    type: 'project',
    description: 'Collection of frontend projects with source code and solutions',
    price: 0.0,
    rating: 4.5,
    author: 'CodeMaster',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
    downloads: 980
  },
  {
    id: 3,
    title: 'JavaScript Mastery Course',
    type: 'cheatsheet',
    description: 'In-depth video course on JavaScript from beginner to advanced level',
    price: 49.99,
    rating: 4.9,
    author: 'DevGuru',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    downloads: 3100
  },
  {
    id: 4,
    title: 'HTML & CSS Crash Notes',
    type: 'notes',
    description: 'Quick reference notes for HTML5 and modern CSS3 techniques',
    price: 5.0,
    rating: 4.3,
    author: 'StyleQueen',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    downloads: 750
  },
  {
    id: 5,
    title: 'Portfolio Website Project',
    type: 'project',
    description: 'Personal portfolio website template built with HTML, CSS, and JS',
    price: 0.0,
    rating: 4.6,
    author: 'WebWizard',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
    downloads: 1580
  },
  {
    id: 6,
    title: 'Responsive Design Course',
    type: 'cheatsheet',
    description: 'Learn to build responsive websites that look great on all devices',
    price: 29.99,
    rating: 4.7,
    author: 'DesignNinja',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    downloads: 2140
  },
  {
    id: 7,
    title: 'Node.js Beginner Notes',
    type: 'notes',
    description: 'Easy-to-understand notes covering the basics of Node.js and backend development',
    price: 7.5,
    rating: 4.4,
    author: 'BackendBro',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    downloads: 630
  },
  {
    id: 8,
    title: 'API Integration Project Kit',
    type: 'project',
    description: 'Project resources and source code for integrating various public APIs',
    price: 0.0,
    rating: 4.5,
    author: 'APIGenius',
    image: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
    downloads: 890
  },
  {
    id: 9,
    title: 'Full Stack Developer Course',
    type: 'cheatsheet',
    description: 'Become a full stack developer with this complete learning path',
    price: 59.99,
    rating: 4.9,
    author: 'StackMaster',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    downloads: 4000
  }
];

const ResourcesSection: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [newResource, setNewResource] = useState({
    title: '',
    type: 'notes',
    description: '',
    price: 0
  });
  const [showForm, setShowForm] = useState(false);

  const handleAddResource = () => {
    const newId = resources.length + 1;
    const resource: Resource = {
      id: newId,
      title: newResource.title,
      type: newResource.type as Resource['type'],
      description: newResource.description,
      price: newResource.price,
      rating: 4.5,
      author: 'You',
      image: `https://source.unsplash.com/random/300x300/?${newResource.type},${newResource.title}&sig=${newId}`,
      downloads: 0
    };
    setResources([resource, ...resources]);
    setNewResource({ title: '', type: 'notes', description: '', price: 0 });
    setShowForm(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'notes': return 'bg-purple-100 text-purple-800';
      case 'cheatsheet': return 'bg-blue-100 text-blue-800';
      case 'project': return 'bg-green-100 text-green-800';
      case 'template': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tech Resources Marketplace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buy and sell high-quality tech resources to boost your learning
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Featured Resources</h3>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            {showForm ? 'Cancel' : 'Sell Your Resource'}
          </button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md mb-8"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Resource</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resource Title</label>
                <input
                  type="text"
                  value={newResource.title}
                  onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., React Hooks Cheatsheet"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resource Type</label>
                <select
                  value={newResource.type}
                  onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="notes">Handwritten Notes</option>
                  <option value="cheatsheet">Cheatsheet</option>
                  <option value="project">Project</option>
                  <option value="template">Template</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newResource.description}
                  onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Detailed description of your resource..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                <input
                  type="number"
                  value={newResource.price}
                  onChange={(e) => setNewResource({ ...newResource, price: parseFloat(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={handleAddResource}
                disabled={!newResource.title || !newResource.description}
                className={`px-4 py-2 rounded-md text-white ${!newResource.title || !newResource.description ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition`}
              >
                List Resource
              </button>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className={`inline-block text-xs px-2 py-1 rounded-full font-medium mb-2 ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
                <h4 className="text-lg font-semibold text-gray-900">{resource.title}</h4>
                <p className="text-sm text-gray-600 mt-1 mb-2">{resource.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {resource.author}</span>
                  <span>⭐ {resource.rating}</span>
                </div>
                <div className="mt-2 flex justify-between items-center text-sm">
                  <span className="text-gray-700 font-medium">${resource.price.toFixed(2)}</span>
                  <span className="text-gray-500">{resource.downloads} downloads</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
