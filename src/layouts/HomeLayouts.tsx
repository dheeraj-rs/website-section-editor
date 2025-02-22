import React from 'react';
import { ArrowRight, ChevronRight, ArrowDownCircle } from 'lucide-react';

export const HomeLayout1 = () => (
  <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white">
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

export const HomeLayout2 = () => (
  <section className="min-h-screen relative bg-black text-white overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
        alt="Background"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-8">
          Innovate. Create. Succeed.
        </h1>
        <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge solutions that drive growth and success in the digital age.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-4 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ArrowDownCircle size={32} />
    </div>
  </section>
);

export const HomeLayout3 = () => (
  <section className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            The Future of
            <span className="block text-yellow-400">Digital Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl">
            Join thousands of businesses that trust us to deliver exceptional digital solutions that drive growth and innovation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Start Your Journey
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Innovation"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);