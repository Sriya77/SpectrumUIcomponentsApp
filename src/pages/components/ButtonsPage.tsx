import React from 'react';
import CodePreview from '../../components/CodePreview';

const ButtonsPage = () => {
  const buttonCode = `
const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
  };

  return (
    <button
      className={\`\${baseClasses} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
};
`.trim();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>
      <p className="text-gray-600 mb-8">
        Beautiful, responsive buttons with different variants and states.
      </p>

      <CodePreview code={buttonCode}>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-md font-medium bg-indigo-600 text-white hover:bg-indigo-700">
            Primary
          </button>
          <button className="px-4 py-2 rounded-md font-medium bg-gray-200 text-gray-800 hover:bg-gray-300">
            Secondary
          </button>
          <button className="px-4 py-2 rounded-md font-medium border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            Outline
          </button>
        </div>
      </CodePreview>
    </div>
  );
};

export default ButtonsPage;