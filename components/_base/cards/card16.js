import React from 'react';

const CourseCard = ({ title, language, status, description, lessons, hours, progress }) => {
  return (
    <div className="p-4 text-gray-800 bg-white rounded shadow">
      <div className="flex">
        <div className="w-2/3">
          <h1 className="font-semibold">
            {title}
          </h1>
          <span className="block text-xs text-blue-400 uppercase">{language}</span>
        </div>
        <div className="w-1/3">
          <span className="float-right px-2 py-1 text-xs text-white bg-blue-400 rounded">{status}</span>
        </div>
      </div>
      <div className="py-4 text-sm">
        {description}
      </div>
      <div className="flex">
        <div className="flex-col w-1/2">
            <span className="flex justify-center text-2xl font-semibold">{lessons}</span>
            <span className="flex justify-center text-gray-500">Lessons</span>
        </div>
        <div className="flex-col w-1/2">
            <span className="flex justify-center text-2xl font-semibold">{hours}</span>
            <span className="flex justify-center text-gray-500">Hours</span>
        </div>
      </div>
      <div className="flex">
        <span className="py-1 text-xs font-semibold">Progress</span>
        <span className="py-1 ml-auto text-xs font-semibold text-blue-600">{progress}%</span>
      </div>
      <div className="flex">
        <div className="w-3/4 h-2 bg-blue-400 rounded rounded-r-none" style={{ width: `${progress}%` }}></div>
        <div className="w-1/4 h-2 bg-blue-100 rounded rounded-l-none" style={{ width: `${100 - progress}%` }}></div>
      </div>
    </div>
  );
};

export default CourseCard;
