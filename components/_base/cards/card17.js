import React from 'react';

const BookCard = ({ title, genre, imageUrl }) => {
  return (
    <a className="relative flex flex-col justify-between h-64 max-w-md p-6 m-4 overflow-hidden transition-shadow duration-300 bg-gray-500 rounded-md shadow-md hover:shadow-xl">
      <img className="absolute top-0 left-0 object-cover w-full h-full" src={imageUrl} alt="random image name" />
      <h3 className="relative text-2xl font-black leading-tight text-white">{title}</h3>

      <div className="relative flex justify-between text-white card_bottom">
        <div className="text-sm font-semibold">hello</div>
        <div className="inline-block px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-200 rounded-full">{genre}</div>
      </div>
    </a>
  );
};

export default BookCard;
