import React from 'react';

const CardContent = () => {
  const name = 'Diogo Russo';
  const role = 'Creative Director';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const thumbnailUrl = 'https://www.diogorusso.com/wp-content/uploads/2020/09/diogo-russo-avatar.jpg';

  return (
      <div className="max-w-xs p-10 font-semibold text-center bg-white border shadow-lg rounded-3xl">
        <img className="w-32 h-32 mx-auto mb-3 rounded-full shadow-lg" src={thumbnailUrl} alt="Profile thumbnail" />
        <h1 className="text-lg text-gray-700">{name}</h1>
        <h3 className="text-sm text-gray-400">{role}</h3>
        <p className="mt-4 text-xs text-gray-400">{description}</p>
        <button className="px-8 py-2 mt-8 font-semibold tracking-wide text-gray-100 uppercase bg-indigo-600 rounded-3xl">
          Hire Me
        </button>
      </div>
  );
};

export default CardContent;
