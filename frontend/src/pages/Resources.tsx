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
    image: 'https://source.unsplash.com/random/300x300/?notes,react',
    downloads: 1245
  },
  {
    id: 2,
    title: 'JavaScript Cheatsheet 2023',
    type: 'cheatsheet',
    description: 'All JS concepts summarized in one page with ES6+ features',
    price: 4.99,
    rating: 4.9,
    author: 'CodeMaster',
    image: 'https://source.unsplash.com/random/300x300/?cheatsheet,javascript',
    downloads: 2873
  },
  {
    id: 3,
    title: 'E-commerce Template',
    type: 'template',
    description: 'Complete Next.js e-commerce template with Stripe integration',
    price: 24.99,
    rating: 4.7,
    author: 'DevTemplates',
    image: 'https://source.unsplash.com/random/300x300/?template,ecommerce',
    downloads: 892
  },
  {
    id: 4,
    title: 'Python Data Science Project',
    type: 'project',
    description: 'Complete data analysis project with Jupyter notebooks and dataset',
    price: 14.99,
    rating: 4.5,
    author: 'DataWizard',
    image: 'https://source.unsplash.com/random/300x300/?python,datascience',
    downloads: 1567
  },
  {
    id: 5,
    title: 'System Design Patterns',
    type: 'notes',
    description: 'Handwritten system design patterns with real-world examples',
    price: 12.99,
    rating: 4.9,
    author: 'ArchitectPro',
    image: 'https://source.unsplash.com/random/300x300/?system,design',
    downloads: 2034
  },
  {
    id: 6,
    title: 'CSS Grid Cheatsheet',
    type: 'cheatsheet',
    description: 'Visual guide to CSS Grid with practical examples',
    price: 3.99,
    rating: 4.6,
    author: 'StyleMaster',
    image: 'https://source.unsplash.com/random/300x300/?css,grid',
    downloads: 3421
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
    const resource: Resource = {
      id: resources.length + 1,
      title: newResource.title,
      type: newResource.type as any,
      description: newResource.description,
      price: newResource.price,
      rating: 4.5,
      author: 'You',
      image: `https://source.unsplash.com/random/300x300/?${newResource.type},${newResource.title}`,
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
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">${resource.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{resource.downloads} downloads</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-indigo-600 hover:bg-gray-50 transition">
            View All Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
