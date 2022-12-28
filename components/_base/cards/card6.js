import React from 'react';

function CreateStoryCard(props) {
  return (
    <div className="relative flex flex-col overflow-hidden cursor-pointer h-52 rounded-xl group">
      <img className="object-cover w-full transition duration-300 ease-in-out transform h-4/5 group-hover:scale-105" src={props.imageUrl} alt={props.title} />
      <div className="relative flex flex-col flex-1 bg-gray-800">
        <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {props.svg}
        </div>
        <div className="flex items-end justify-center flex-1 pb-1 text-sm font-semibold text-white capitalize">
          <p>
            {props.title}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 transition duration-300 ease-in-out bg-black opacity-0 group-hover:opacity-20"></div>
    </div>
  );
}

export default CreateStoryCard;
