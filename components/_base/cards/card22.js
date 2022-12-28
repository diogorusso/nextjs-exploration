import React from "react";

const Card = ({ month, day, dayOfWeek, time }) => {
  return (
    <div className="flex-none w-32 text-center text-gray-600 rounded-t shadow-lg lg:rounded-t-none lg:rounded-l">
      <div className="block overflow-hidden text-center rounded-t">
        <div className="py-1 text-white bg-blue-500">{month}</div>
        <div className="pt-1 bg-white border-l border-r border-white">
          <span className="text-5xl font-bold leading-tight">{day}</span>
        </div>
        <div className="-mb-1 text-center bg-white border-b border-l border-r border-white rounded-b-lg -pt-2">
          <span className="text-sm">{dayOfWeek}</span>
        </div>
        <div className="pb-2 text-center bg-white border-b border-l border-r border-white rounded-b-lg">
          <span className="text-xs leading-normal">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
