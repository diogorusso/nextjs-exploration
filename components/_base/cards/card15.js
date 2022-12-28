import React from 'react';

const Card = ({ text, image }) => {
  return (
    <div className="relative flex items-end w-full overflow-hidden rounded-xl">
      <img src={image} alt="Card image" className="absolute object-cover w-full h-full opacity-60" />
      <h2 className="relative z-10 p-8 text-3xl font-semibold text-white ">{text}</h2>
    </div>
  );
}

export default Card;
