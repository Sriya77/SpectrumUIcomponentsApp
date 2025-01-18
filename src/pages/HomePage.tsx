import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Layers className="h-16 w-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold dark:text-gray-200 mb-6">
            Welcome to SpectrumUI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A beautiful and modern UI component library for React applications.
            Build stunning interfaces with ease.
          </p>
          <Link
            to="/components"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-rounded-full border-gray-700 hover:border-blue-900"

            >
              <div className="text-indigo-600 mb-4">{<feature.icon className="h-8 w-8" />}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Layers,
    title: 'Modern Design',
    description: 'Clean and modern components built with Tailwind CSS.'
  },
  {
    icon: Layers,
    title: 'Responsive',
    description: 'Fully responsive components that work on all devices.'
  },
  {
    icon: Layers,
    title: 'Customizable',
    description: 'Easy to customize and extend to match your brand.'
  }
];

export default HomePage;