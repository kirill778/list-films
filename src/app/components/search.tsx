import React from 'react';



const Search = () => {
  return (
    // Main container for the Frame 1 header
    // Uses flexbox for horizontal alignment of search, user icon, and burger menu
    <div
      className="flex items-center justify-between p-4 bg-white shadow-md w-full max-w-full h-30" // Tailwind classes for layout, padding, background, rounded corners, shadow, and fixed height
      style={{ fontFamily: 'Bebas Neue' }} // Apply Inter font as default
    >
      {/* Search Bar Section */}
      <div className="flex flex-col flex-grow mr-4 ml-10">
        <div className="flex items-center py-2 px-4 ">
          {/* Search Icon (SVG) */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3722 21.38L26 26M24.538 13.25C24.538 16.2337 23.3508 19.0952 21.2374 21.205C19.1241 23.3147 16.2577 24.5 13.269 24.5C10.2803 24.5 7.41397 23.3147 5.30062 21.205C3.18727 19.0952 2 16.2337 2 13.25C2 10.2663 3.18727 7.40483 5.30062 5.29505C7.41397 3.18526 10.2803 2 13.269 2C16.2577 2 19.1241 3.18526 21.2374 5.29505C23.3508 7.40483 24.538 10.2663 24.538 13.25Z" stroke="#7C7C7C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          {/* Search Input Text */}
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-gray-700 placeholder-gray-500 ml-15 mt-2 text-[18px] focus:outline-none w-30"
            // Figma had a line below the text, but an input field typically has a natural bottom border,
            // so we'll use a transparent background and let the parent div define the visual bounds.
            // If a distinct line is strictly needed, it could be added with a pseudo-element or separate div.
          />
        </div>
        <div className="w-70 h-[2px] bg-gray-500 px-4"></div>
      </div>

      {/* User Avatar Placeholder */}
      <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mr-284 flex-shrink-0">
        {/* Placeholder for user icon or initial */}
        <span className="text-gray-600 text-lg font-bold"></span>
      </div>

      {/* Burger Menu Icon */}
      <div className="flex flex-col justify-around w-6 h-5 cursor-pointer flex-shrink-0 mr-5">
        <span className="block w-full h-0.5 bg-gray-800 rounded"></span>
        <span className="block w-full h-0.5 bg-gray-800 rounded"></span>
        <span className="block w-full h-0.5 bg-gray-800 rounded"></span>
      </div>
    </div>
  );
};

export default Search;