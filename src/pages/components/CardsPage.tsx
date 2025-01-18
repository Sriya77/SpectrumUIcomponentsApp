import React from 'react';
import CodePreview from '../../components/CodePreview';

const CardsPage = () => {
  const cardCode = `
const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
`.trim();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cards</h1>
      <p className="text-gray-600 mb-8">
        Versatile card components for displaying content in a clean and organized way.
      </p>

      <CodePreview code={cardCode}>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
            alt="Sample card"
          />
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">Card Title</h3>
            <p className="text-gray-700 text-base">
              This is a sample card description. You can use this component to display various types of content.
            </p>
          </div>
        </div>
      </CodePreview>
    </div>
  );
};

export default CardsPage;