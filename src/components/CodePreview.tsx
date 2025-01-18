import React, { useState } from 'react';
import { Code, Eye, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodePreviewProps {
  code: string;
  children: React.ReactNode;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, children }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="border dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <h3 className="text-gray-900 dark:text-gray-100 font-medium">Preview</h3>
        <div className="flex items-center space-x-2">
          {showCode && (
            <button
              onClick={handleCopy}
              className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              )}
            </button>
          )}
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            {showCode ? (
              <>
                <Eye className="h-4 w-4" />
                <span>Show Preview</span>
              </>
            ) : (
              <>
                <Code className="h-4 w-4" />
                <span>Show Code</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {showCode ? (
          <div className="relative max-h-96 overflow-auto">
            <SyntaxHighlighter
              language="tsx"
              style={tomorrow}
              customStyle={{
                margin: 0,
                borderRadius: '0.375rem',
                background: 'transparent'
              }}
              className="dark:!bg-gray-900"
            >
              {code}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[200px]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;