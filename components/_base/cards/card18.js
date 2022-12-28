import React from 'react';

const Card = ({ title, description, imageUrl, buttonText, buttonUrl }) => {
  return (
    <div className="lg:mb-0">
      <a href={buttonUrl} className="relative block mx-2 overflow-hidden shadow-lg h-72 md:h-96 group">
        <img src={imageUrl} className="absolute z-0 object-cover w-full transform h-72 md:h-96 group-hover:scale-150" />
        <div className="absolute z-10 w-full transition duration-300 gradient group-hover:bg-black group-hover:opacity-90 h-72 md:h-96"></div>
        <div className="absolute bottom-0 left-0 right-0 z-30 h-full p-6 transition duration-300 delay-100 transform translate-y-1/2 group-hover:translate-y-0">
          <div className="relative h-1/2">
            <div className="absolute bottom-0">
              <h2 className="pb-6 text-xl font-bold leading-tight text-white transition duration-300 group-hover:underline">{title}</h2>
            </div>
          </div>
          <div className="h-1/2">
            <p className="pb-4 text-white transition duration-300 opacity-0 group-hover:opacity-100">{description}</p>
            <button className="px-3 py-1 text-sm font-semibold text-black transition duration-300 bg-white border-2 border-white opacity-0 group-hover:opacity-100 focus:border-black focus:bg-gray-300">{buttonText}</button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
