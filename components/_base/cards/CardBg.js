import React from 'react';

function Card(props) {
  return (
    <div className="relative h-[460px] rounded-lg">
      <img src={props.backgroundImage} className="object-cover w-full h-full rounded-lg" />
      <div className="absolute bottom-0 flex flex-col items-center justify-center w-full h-full text-center rounded-lg bg-gradient-to-r from-fuchsia-700/30 to-violet-700">
        <img src={props.companyLogo} />
        <p className="mt-10 text-lg text-gray-300 px-14">{props.quote}</p>
        <img src={props.photo} className="mt-8 border-2 rounded-full" />
        <p className="mt-3 text-base font-bold text-gray-300 px-14">{props.title}</p>
        <p className="text-sm font-light text-gray-300 px-14 ">{props.company}</p>
      </div>
    </div>
  );
}

export default Card;
