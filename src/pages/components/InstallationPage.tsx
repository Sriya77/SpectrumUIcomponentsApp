import React from 'react';

const InstallationPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Install Spectrum UI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Install Spectrum UI with Create React App
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Create a new project</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>npx</span>
            <span className="text-green-400">create-react-app@latest</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">On installation, you'll see the following prompts:</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-gray-300">
            <span className="text-blue-400">What</span> <span className="text-green-400">is</span> your project named? my-app
            <br />
            <span className="text-blue-400">Would</span> you like to use TypeScript? No / Yes
            <br />
            <span className="text-blue-400">Would</span> you like to use ESLint? No / Yes
            <br />
            <span className="text-blue-400">Would</span> you like to use Tailwind CSS? No / Yes
            <br />
            <span className="text-blue-400">Would</span> you like to use `src/` directory? No / Yes
            <br />
            <span className="text-blue-400">Would</span> you like to use App Router? (recommended) No / Yes
            <br />
            <span className="text-blue-400">Would</span> you like to customize the default import alias (@/*)? No / Yes
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Start the app</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <span>cd</span>
            <span>my-app</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-2">
            <span>npm</span>
            <span>run</span>
            <span>dev</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;