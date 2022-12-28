import React from 'react';

const ProductCard = ({ imageUrl, title, description, price, buttonText }) => {
  return (
    <div className="p-2 transition duration-300 transform bg-white rounded-lg m-h-64 hover:translate-y-2 hover:shadow-xl">
      <figure className="mb-2">
        <img src={imageUrl} alt="" className="h-64 ml-auto mr-auto" />
      </figure>
      <div className="flex flex-col p-4 bg-purple-700 rounded-lg">
        <div>
          <h5 className="text-2xl font-bold leading-none text-white">
            {title}
          </h5>
          <span className="text-xs leading-none text-gray-400">{description}</span>
        </div>
        <div className="flex items-center">
          <div className="text-lg font-light text-white">
            {price}
          </div>
          <button href="javascript:;" className="flex w-10 h-10 ml-auto text-white transition duration-300 bg-purple-900 rounded-full hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="m-auto stroke-current">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          {buttonText}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
