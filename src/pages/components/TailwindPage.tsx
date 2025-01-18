import React from 'react';

const TailwindPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Install Tailwind CSS</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Install Tailwind CSS with React
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Create your project</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>npx</span>
            <span className="text-green-400">create-next-app@latest</span>
            <span>my-project</span>
            <span className="text-orange-400">--typescript</span>
            <span className="text-orange-400">--eslint</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-2">
            <span>cd</span>
            <span>my-project</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Install Tailwind CSS</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>npm</span>
            <span>install</span>
            <span>-D</span>
            <span>tailwindcss</span>
            <span>postcss</span>
            <span>autoprefixer</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-2">
            <span>npx</span>
            <span>tailwindcss</span>
            <span>init</span>
            <span>-p</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Configure your template paths</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-gray-300">
            <span className="text-gray-500">/** @type {import('tailwindcss').Config} */</span>
            <br />
            module.exports = {'{'}
            <br />
            {'  '}content: [
            <br />
            {'    '}./src/**/*.{'{'}js,jsx,ts,tsx{'}'},
            <br />
            {'  '}],
            <br />
            {'  '}theme: {'{'}
            <br />
            {'    '}extend: {'{'}{'}'}, 
            <br />
            {'  '}{'}'}, 
            <br />
            {'  '}plugins: [], 
            <br />
            {'}'}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TailwindPage;