import React from 'react';

const Card = ({ title, description, imageUrl, avatarUrl, name, date }) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="object-cover object-center w-full h-64" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
        <div className="flex items-center justify-start mt-8">
          <img className="object-cover w-10 h-10 mr-4 rounded-full" src={avatarUrl} alt="Avatar" />
          <div className="text-sm">
            <p className="leading-none text-gray-900">{name}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
