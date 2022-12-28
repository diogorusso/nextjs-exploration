import React from 'react';

const Card = ({ title, description, svg }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="mb-5">
        {svg}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
