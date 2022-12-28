import React from 'react';

const MyComponent = (props) => {
  return (
    <div className="flex items-start p-4 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-center w-12 h-12 border border-blue-100 rounded-full bg-blue-50">
        {props.svg}
      </div>
      <div className="ml-4">
        <h2 className="font-semibold">{props.h2Text}</h2>
        <p className="mt-2 text-sm text-gray-500">{props.pText}</p>
      </div>
    </div>
  );
};

export default MyComponent;