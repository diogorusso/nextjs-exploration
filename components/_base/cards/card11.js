import React from "react";

function Tile(props) {
  const { value, change, label } = props;
  const color = change < 0 ? "red" : "green";
  const icon =
    change < 0
      ? "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
      : "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z";
  return (
    <div className="flex items-center p-4 bg-white rounded max-h-[100px]">
      <div
        className={`flex flex-shrink-0 items-center justify-center bg-${color}-200 h-16 w-16 rounded`}
      >
        <svg
          className={`w-6 h-6 text-${color}-700 fill-current`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d={icon}
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col flex-grow ml-4">
        <span className="text-xl font-bold">{value}</span>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{label}</span>
          <span className={`text-${color}-500 text-base font-semibold ml-2`}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tile;
