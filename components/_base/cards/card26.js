import React from 'react';

const PlantCard = ({ imageUrl, title, description, price, backgroundColor }) => {
  return (
    <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden rounded-lg shadow-lg" style={{ backgroundColor }}>
      <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div className="relative flex items-center justify-center px-10 pt-10">
        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }}></div>
        <img className="relative w-40" src={imageUrl} alt="" />
      </div>
      <div className="relative px-6 pb-6 mt-6 text-white">
        <span className="block -mb-1 opacity-75">{description}</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">{title}</span>
          <span className="flex items-center block px-3 py-2 text-xs font-bold leading-none text-orange-500 bg-white rounded-full">{price}</span>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;


