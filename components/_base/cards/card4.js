import React from "react";

function EarningsCard(props) {
  return (
    <div className="h-20 pl-1 bg-blue-500 rounded-lg shadow-md w-96">
      <div className="flex justify-between w-full h-full px-4 py-2 text-gray-800 bg-white rounded-lg">
        <div className="my-auto">
          <p className="font-bold">{props.title}</p>
          <p className="text-lg">{props.earnings}</p>
        </div>
        <div className="my-auto">{props.svg}</div>
      </div>
    </div>
  );
}

export default EarningsCard;
