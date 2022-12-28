import React from 'react';

function Card({ followers, increase, timeFrame, icon, followersText, increaseText, timeFrameText }) {
  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl">
      <div className="flex items-center">
        <span className="flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full">
          <svg className="w-4 h-4 text-pink-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" dangerouslySetInnerHTML={{ __html: icon }} />
        </span>
        <span className="ml-2 text-sm font-medium text-gray-500">{followersText}</span>
      </div>
      <span className="block mt-4 text-4xl font-semibold text-gray-800">{followers}</span>
      <div className="flex mt-3 text-xs font-medium">
        <span className="text-green-500">{increase}</span>
        <span className="ml-1 text-gray-500">{timeFrameText}</span>
      </div>
    </div>
  );
}

export default Card;
