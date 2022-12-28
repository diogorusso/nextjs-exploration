import React from 'react';

const MyComponent = ({ dark, post, category, learnMoreText, kText, countText, svgPlaceholder1, svgPlaceholder2 }) => {
  return (
    <div
      className={`p-4`}
    >
      <div
        className={`h-full px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-md hover:shadow-xl hover:border-green-500 ${
          dark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-500'
        }`}
      >
        <h2
          className={`tracking-widest text-xs title-font font-medium mb-1 ${
            dark ? 'text-gray-600' : 'text-gray-500'
          }`}
        >
          {category}
        </h2>
        <h1
          className={`title-font sm:text-2xl text-xl font-medium mb-3 ${
            dark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {post.title}
        </h1>
        <p className="mb-3 leading-relaxed">{post.body}</p>
        <a className="inline-flex items-center text-green-500">
          {learnMoreText}
          {svgPlaceholder1}
        </a>
        <div className="absolute bottom-0 left-0 flex justify-center w-full py-4 mt-2 leading-none text-center">
          <span className="inline-flex items-center py-1 pr-3 mr-3 text-sm leading-none text-gray-600 border-r-2 border-gray-700">
            {svgPlaceholder1}
            {kText}
          </span>
          <span className="inline-flex items-center text-sm leading-none text-gray-600">
            {svgPlaceholder2}
            {countText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
