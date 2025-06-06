import React from 'react';

// Define the properties for the RightNavComponent
interface RightNavComponentProps {
  // You can add props here if this navigation component needs to receive any data,
  // like a list of menu items or user-specific content.
}

const RightNavComponent: React.FC<RightNavComponentProps> = () => {
  return (
    // Main container for the right navigation/sidebar
    // Based on Figma's "NavRight" within "Frame 1" (ID: 2027:105)
    <div
      className="bg-[#2e3540] w-[335px] h-full flex flex-col p-6 space-y-8 shadow-lg" // Tailwind classes for background, width, full height, flexbox, padding, spacing, rounded corners, and shadow
      style={{ fontFamily: 'Bebas Neue' }} // Apply Inter font as default
    >
     

      {/* Categories Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-gray-300 text-sm font-medium uppercase tracking-wider">Categories</h2>
        <ul className="space-y-2">
          {['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'].map((category, index) => (
            <li key={index} className="text-white text-base font-normal cursor-pointer hover:text-blue-400 transition-colors">
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-gray-300 text-sm font-medium uppercase tracking-wider h-[38px]">Featured</h2>
        <ul className="space-y-2">
          {['New Releases', 'Top Rated', 'Coming Soon'].map((feature, index) => (
            <li key={index} className="text-white text-base font-normal cursor-pointer hover:text-blue-400 transition-colors">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* User Actions/Settings (Example) */}
      <div className="flex flex-col space-y-4 mt-152 pt-4 border-t border-gray-700"> {/* mt-auto pushes to bottom */}
        <h2 className="text-gray-300 text-sm font-medium uppercase tracking-wider">Settings</h2>
        <ul className="space-y-2">
          <li className="text-white text-base font-normal cursor-pointer hover:text-blue-400 transition-colors">
            Profile
          </li>
          <li className="text-white text-base font-normal cursor-pointer hover:text-blue-400 transition-colors">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightNavComponent;
