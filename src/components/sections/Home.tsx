import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help businesses grow by providing innovative solutions and exceptional service.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;