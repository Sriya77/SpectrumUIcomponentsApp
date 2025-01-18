import React from 'react';
import { Github } from 'lucide-react';

const IntroductionPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Spectrum UI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Beautifully designed components that you can copy and paste into your apps.
          Accessible. Customizable. Open Source.
        </p>
        
        <div className="flex space-x-4">
          <a
            href="#getting-started"
            className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Spectrum UI is a collection of re-usable components that you can copy and paste into your apps.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            What do you mean by copy and paste?
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Spectrum UI is not a component library. It's a collection of re-usable components
            that you can copy and paste into your projects.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            What? Why?
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            The goal is to give you a set of beautiful, accessible, and customizable
            components that you can use in your projects. Use this as a reference
            implementation or copy and paste the code into your project and customize
            it to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;