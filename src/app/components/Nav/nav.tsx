import React from 'react'

export const Navbar = () => {
    return (
        // Main container for Frame1, acting as the left navigation
        <div
          className="bg-[#2e3540] w-100 h-screen flex flex-col shadow-lg overflow-hidden" // Tailwind classes for background, width, height, flexbox, rounded corners, and shadow
          style={{ fontFamily: 'Bebas Neue' }} // Apply Bebas Neue font
        >
          {/* Logo Section */}
          <div className="relative w-full h-30 flex items-center justify-center p-4 bg-[#1467E9]">
            {/* FILmS Text */}
            <h1 className="text-white text-6xl font-normal leading-[76.8px] relative z-10">
              FILmS
            </h1>
            {/* Line separator below the logo */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
          </div>
    
          {/* Years List Section */}
          <div className="flex flex-col flex-grow space-y-4 pt-20 ">
            {/* Years Title */}
            <h2 className="text-white text-base font-normal leading-[18px] h-[38px] text-center mb-20">
              Years
            </h2>
            <div className="w-100 h-[1px] bg-white mb-0"></div>
    
            {/* Individual Year Items */}
            {/* Group 1: 2021 */}
            <div className="relative w-full flex items-center justify-center mb-0 hover:bg-[#1467E9] transition-all duration-300 hover:text-black">
              <span className="text-white text-[16px] font-normal h-[38px] leading-[18px] mt-5">
                2021
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white mt-5 "></div>
            </div>
    
            {/* Group 2: 2022 */}
            <div className="relative w-full flex items-center justify-center hover:bg-[#1467E9] transition-all duration-300 hover:text-black mb-0">
              <span className="text-white text-[16px] font-normal h-[38px] leading-[18px] mt-5">
                2022
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white mt-5 "></div>
            </div>
    
            {/* Group 3: 2023 */}
            <div className="relative w-full flex items-center justify-center hover:bg-[#1467E9] transition-all duration-300 hover:text-black mb-0">
              <span className="text-white text-[16px] font-normal h-[38px] leading-[18px] mt-5">
                2023
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white mt-5 "></div>
            </div>
    
            {/* Group 4: 2024 */}
            <div className="relative w-full flex items-center justify-center hover:bg-[#1467E9] transition-all duration-300 hover:text-black mb-0">
              <span className="text-white text-[16px] font-normal h-[38px] leading-[18px] mt-5">
                2024
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white mt-5 "></div>
            </div>
    
            {/* Group 5: 2025 */}
            <div className="relative w-full flex items-center justify-center hover:bg-[#1467E9] transition-all duration-300 hover:text-black mb-0">
              <span className="text-white text-[16px] font-normal h-[38px] leading-[18px] mt-5">
                2025
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white mt-5 "></div>
            </div>
          </div>
        </div>
      );
}




// Define the properties for the Frame1 component
interface Frame1Props {
  // You can add props here if Frame1 needs to receive any data or callbacks
}

const Frame1: React.FC<Frame1Props> = () => {
  return (
    // Main container for Frame1, acting as the left navigation
    <div
      className="bg-[#2e3540] w-[318px] h-screen flex flex-col rounded-lg shadow-lg overflow-hidden" // Tailwind classes for background, width, height, flexbox, rounded corners, and shadow
      style={{ fontFamily: 'Bebas Neue' }} // Apply Bebas Neue font
    >
      {/* Logo Section */}
      <div className="relative w-full h-[85px] flex items-center justify-center p-4">
        {/* FILmS Text */}
        <h1 className="text-white text-6xl font-normal leading-[76.8px] relative z-10">
          FILmS
        </h1>
        {/* Line separator below the logo */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
      </div>

      {/* Years List Section */}
      <div className="flex flex-col flex-grow p-4 space-y-4">
        {/* Years Title */}
        <h2 className="text-white text-base font-normal leading-[18px] text-center mb-4">
          Years
        </h2>

        {/* Individual Year Items */}
        {/* Group 1: 2021 */}
        <div className="relative w-full flex items-center justify-center mb-4">
          <span className="text-white text-base font-normal leading-[18px]">
            2021
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </div>

        {/* Group 2: 2022 */}
        <div className="relative w-full flex items-center justify-center mb-4">
          <span className="text-white text-base font-normal leading-[18px]">
            2022
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </div>

        {/* Group 3: 2023 */}
        <div className="relative w-full flex items-center justify-center mb-4">
          <span className="text-white text-base font-normal leading-[18px]">
            2023
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </div>

        {/* Group 4: 2024 */}
        <div className="relative w-full flex items-center justify-center mb-4">
          <span className="text-white text-base font-normal leading-[18px]">
            2024
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </div>

        {/* Group 5: 2025 */}
        <div className="relative w-full flex items-center justify-center mb-4">
          <span className="text-white text-base font-normal leading-[18px]">
            2025
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
