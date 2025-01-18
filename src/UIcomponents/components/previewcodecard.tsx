import React, { useEffect, useState } from 'react';
import CodeCard from '../components/code-card/code-card';
import { cn } from '../../lib/utils';

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
}

const PreviewCodeCard: React.FC<PreviewCodeCardProps> = ({ className, path, children }) => {
  console.log("Path:", path);
  const [demoCode, setDemoCode] = useState<string | null>(null);

  useEffect(() => {

    const fetchCode = async () => {
      try {
        const response = await fetch(path);
        console.log("REsponse:", response); // Fetch from a URL or public directory
        if (response.ok) {
          const code = await response.text();
          setDemoCode(code);
        } else {
          throw new Error('Failed to load code');
        }
      } catch (error) {
        console.error(`Error reading file at ${path}:`, error);
        setDemoCode(null);
      }
    };

    fetchCode();
  }, [path]);

  if (!demoCode) {
    return <p className="text-red-500">No demo code found or failed to load code.</p>;
  }

  return (
    <CodeCard code={demoCode} className={cn('mb-14 mt-5', className)}>
      <div className="flex items-center justify-center py-10">{children}</div>
    </CodeCard>
  );
};

export default PreviewCodeCard;
