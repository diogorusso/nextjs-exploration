import React from 'react';

const Card = ({ title, description, imgUrl, buttonText, buttonUrl }) => {
  return (
    <div className="mb-5 bg-white border border-gray-200 rounded-lg shadow-md">
      <a href={buttonUrl}>
        <img className="rounded-t-lg" src={imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={buttonUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <a
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          href={buttonUrl}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;