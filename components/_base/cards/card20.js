import React from 'react';

const Card = ({ title, description, svg, linkText, linkUrl }) => {
  return (
    <div id="card" className="relative m-4">
      <div id="outline" className="absolute w-full h-full bg-green-300 rounded-xl -left-2 -top-2"></div>
      <div id="content" className="relative w-full h-full p-8 bg-gray-100 shadow-lg rounded-xl space-y-7">
        <div className="w-16 h-3 ml-auto bg-green-300 "></div>
        <span className="text-gray-500 text-7xl">{title}</span>
        <p className="text-gray-500">{description}</p>
        <a className="flex items-center text-gray-500" href={linkUrl}>
          <span>{linkText}</span>
          {svg}
        </a>
      </div>
    </div>
  );
}

export default Card;