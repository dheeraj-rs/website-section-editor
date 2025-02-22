import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate individuals dedicated to delivering excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To empower businesses with innovative solutions that drive growth and success.',
            },
            {
              icon: Zap,
              title: 'Our Vision',
              description: 'To be the leading force in digital transformation and business innovation.',
            },
            {
              icon: Shield,
              title: 'Our Values',
              description: 'Integrity, excellence, and commitment to delivering outstanding results.',
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <item.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;