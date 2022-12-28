import React from 'react';

const MyComponent = ({ percentage, description, learnMoreText }) => {
  return (
    <div className="relative">
      {/* yellow background */}
      {/* <div className="absolute w-full h-full bg-yellow-400 -right-2 -bottom-3 "></div> */}
      <div className="relative p-8 space-y-6 bg-gray-600 border-4 text-gray-50 border-white-700">
        {/* card */}
        <div className="w-20 h-2 bg-yellow-400 "></div>
        <div className="text-5xl font-bold text-white">{percentage}%</div>
        <p className="leading-snug text-gray-300">{description}</p>
        <a href="#" className="block text-yellow-300">
          {learnMoreText}
        </a>
      </div>
    </div>
  );
};

export default MyComponent;
