import React from 'react';

function HeroImage(props) {
  return (
    <div className="relative w-full h-64 max-w-lg overflow-hidden rounded-lg shadow-2xl">
      <img className="absolute inset-0 object-cover w-full h-full" src={props.imageUrl} alt={props.altText} />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-3xl tracking-wider text-teal-100">{props.text}</h1>
      </div>
    </div>
  );
}

export default HeroImage;
