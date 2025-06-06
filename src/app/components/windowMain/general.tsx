'use client'
import React from 'react';
import { useState } from 'react';

// Define the properties for the ContentFrameComponent
interface ContentFrameComponentProps {

}

const ContentFrameComponent: React.FC<ContentFrameComponentProps> = (props) => {
  const FILM_COLORS = [
    'bg-gray-300 text-gray-700 transition-all duration-300',   // Film 1
    'bg-[#aadb94] text-white transition-all duration-300',  // Film 2
    'bg-[#3f3458] text-white transition-all duration-300',  // Film 3
    'bg-[#35102d] text-white transition-all duration-300',  // Film 4
    'bg-[#571db4] text-white transition-all duration-300',  // Film 5
  ];

  const [selectedColor, setSelectedColor] = useState<string>(FILM_COLORS[0]);

  const handleFilmClick = (color: string) => {
    setSelectedColor(color);
  };


  return (
    // Main container for the content frame
    // This div corresponds to Figma's "Frame 1" (ID: 2029:120)
    <div
      className="bg-white p-8  shadow-xl w-full h-auto min-h-[863px]" // Tailwind classes for background, padding, rounded corners, shadow, and responsive width/height
      style={{ fontFamily: 'Inter' }} // Apply Inter font as default
    >
      {/* Top Rectangles - likely headers or sections */}
      <div className="flex justify-between mb-8">
        {/* Rectangle 14 - Left top section */}
        <div className={`${selectedColor}  w-[48%] h-[67px] flex items-center justify-center text-lg font-bold`}>
          Section 1
        </div>
        {/* Rectangle 15 - Right top section */}
        <div className={`${selectedColor}  w-[34%] h-[67px] flex items-center justify-center text-lg font-bold`}>
          Section 2
        </div>
      </div>

      {/* Main Card Section */}
      {/* This corresponds to Figma's "Card" group (ID: 2029:107) */}
      <div className="flex flex-col space-y-8">
        {/* Rectangle 12 - Main large card */}
        <div className={`${selectedColor}  p-6 w-full min-h-[333px] flex items-center justify-center text-xl font-bold`}>
          Main Content Card
        </div>

        {/* Group 6 - Row of smaller rectangles/cards */}
        <h3 className="text-black text-sm font-normal mt-4">List films</h3>
        <div className="flex justify-between items-center space-x-4 overflow-x-auto pb-4"> {/* Added overflow for potential scrolling on smaller screens */}
          {/* Rectangle 16 */}
          <div className={`flex-shrink-0 ${FILM_COLORS[0]} w-[210px] h-[256px] flex items-center justify-center text-gray-700 text-sm font-bold hover:bg-[#1467E9] hover:text-white transition-all duration-300`} onClick={() => handleFilmClick(FILM_COLORS[0])}>
            Film 1
          </div>
          {/* Rectangle 17 */}
          <div className={`flex-shrink-0 ${FILM_COLORS[1]}  w-[211px] h-[256px] flex items-center justify-center text-white text-sm font-bold hover:bg-[#1467E9] hover:text-white transition-all duration-300`} onClick={() => handleFilmClick(FILM_COLORS[1])}>
            Film 2
          </div>
          {/* Rectangle 18 */}
          <div className={`flex-shrink-0 ${FILM_COLORS[2]}  w-[210px] h-[256px] flex items-center justify-center text-white text-sm font-bold hover:bg-[#1467E9] hover:text-white transition-all duration-300`} onClick={() => handleFilmClick(FILM_COLORS[2])}>
            Film 3
          </div>
          {/* Rectangle 19 */}
          <div className={`flex-shrink-0 ${FILM_COLORS[3]}  w-[211px] h-[256px] flex items-center justify-center text-white text-sm font-bold hover:bg-[#1467E9] hover:text-white transition-all duration-300`} onClick={() => handleFilmClick(FILM_COLORS[3])}>
            Film 4
          </div>
          {/* Rectangle 20 */}
          <div className={`flex-shrink-0 ${FILM_COLORS[4]}  w-[210px] h-[256px] flex items-center justify-center text-white text-sm font-bold hover:bg-[#1467E9] hover:text-white transition-all duration-300`} onClick={() => handleFilmClick(FILM_COLORS[4])}>
            Film 5
          </div>
        </div>

        {/* Rectangle 13 - Another large card, potentially similar to Rectangle 12 */}

      </div>

      {/* "List films" text */}
      {/* Assuming this text is a heading for the film list, placing it appropriately */}

    </div>
  );
};

export default ContentFrameComponent;