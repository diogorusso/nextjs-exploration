import React from 'react';

const Card = ({ title, description, cancelText, previewText, buyNowText }) => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg">
        <a className="block focus:outline-none focus-visible:ring-2" href="#0">
          <figure className="relative h-0 pb-[56.25%] overflow-hidden">
            <img className="absolute inset-0 object-cover w-full h-full transition duration-700 ease-out transform hover:scale-105" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png" width="320" height="180" alt="Course" />
          </figure>
        </a>
        <div className="flex flex-col flex-grow p-5">
          <div className="flex-grow">
            <header className="mb-3">
              <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{title}</h3>
              </a>
            </header>
            <div className="mb-8">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">{cancelText}</a>
            <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">{previewText}</a>
            <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">{buyNowText}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
