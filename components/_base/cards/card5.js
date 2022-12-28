import React from "react";

function MediaCard(props) {
  return (
    <div className="relative flex flex-col overflow-hidden cursor-pointer h-52 rounded-xl group">
      <img
        className="object-cover w-full h-full transition duration-300 ease-in-out transform group-hover:scale-105"
        src={props.bgUrl}
      />

      <div className="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
        <img
          className="object-cover w-full h-full"
          src={props.avatarUrl}
          alt={props.title}
        />
      </div>

      <div className="absolute inset-x-3 bottom-1">
        <p className="font-semibold text-white">{props.title}</p>
      </div>

      <div className="absolute inset-0 transition duration-300 ease-in-out bg-black opacity-0 group-hover:opacity-20"></div>
    </div>
  );
}

export default MediaCard;
