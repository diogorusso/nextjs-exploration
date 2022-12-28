import React from 'react';

const DownloadCard = (props) => {
  return (
    <div className="flex flex-row gap-8 p-6 m-auto border-2 border-purple-500 rounded-lg bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
      <div className="my-auto">
        <div className="text-lg text-purple-300">{props.downloads}</div>
        <div className="text-4xl text-purple-100">{props.number}</div>
      </div>
      <div className="p-4 my-auto text-purple-300 rounded-full bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900">
        {props.svg}
      </div>
    </div>
  );
};

export default DownloadCard;
