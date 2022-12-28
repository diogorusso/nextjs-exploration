import React from 'react';

const ElegantDarkMode = (props) => {
  return (
    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
      <span className="inline-block text-blue-500 dark:text-blue-400">
        {props.svg}
      </span>

      <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{props.title}</h1>

      <p className="text-gray-500 dark:text-gray-300">{props.description}</p>

      <a href={props.link} className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
        {props.buttonSvg}
      </a>
    </div>
  );
};

export default ElegantDarkMode;
