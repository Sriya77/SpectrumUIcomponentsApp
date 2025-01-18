import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const menuItems = {
  'Getting Started': ['Introduction', 'Installation', 'Tailwind'],
  'Components': ['AnimatedChart', 'Alert', 'AnimatedTestimonials', 'Buttons']
};

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed md:sticky top-0 left-0 z-30 w-64 h-[calc(100vh-4rem)] md:h-screen
        bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        transform transition-transform duration-300 ease-in-out md:transform-none
        overflow-hidden flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
          {Object.entries(menuItems).map(([section, items]) => (
            <div key={section} className="px-3 py-2">
              <button
                onClick={() => toggleSection(section)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              >
                <span className="font-medium">{section}</span>
                {expandedSections.includes(section) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.includes(section) && (
                <div className="ml-4 space-y-1">
                  {items.map(item => (
                    <NavLink
                      key={item}
                      to={`/components/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`
                      }
                      onClick={onClose}
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;