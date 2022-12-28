import React from 'react';

const Card = (props) => {
  return (
    <card className="w-full p-8 text-gray-800 bg-white">
      <header className="flex text-sm font-light">
        {props.headerSvg}
        <p>{props.headerText}</p>
      </header>
      <h2 className="mt-2 text-3xl font-bold">{props.title}</h2>
      <p className="mt-5">{props.author1}</p>
      <p>{props.author2}</p>
      <h3 className="mt-8 text-xl font-bold">{props.intro}</h3>
      <p className="font-light">{props.description}</p>
      <button className="inline-flex items-center px-5 py-2 mt-6 text-sm font-semibold text-white bg-red-600 group">
        <p>{props.buttonText}</p>
        {props.buttonSvg}
      </button>
    </card>
  );
};

export default Card;
