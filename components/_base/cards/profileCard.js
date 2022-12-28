import React from 'react';

function ProfileCard(props) {
  return (
    <div className="my-3 overflow-hidden bg-blue-500 shadow-xl rounded-3xl">
      <img src={props.imageUrl} className="w-full" />
      <div className="flex justify-center -mt-8">
        <img src={props.profileUrl} className="-mt-3 border-2 border-white border-solid rounded-full" />
      </div>
      <div className="px-3 pt-2 pb-6 text-center">
        <h3 className="font-sans text-sm text-white bold">{props.name}</h3>
        <p className="mt-2 font-sans font-light text-white">{props.bio}</p>
      </div>
      <div className="flex justify-center pb-3 text-white">
        <div className="pr-3 mr-3 text-center border-r">
          <h2>{props.photos}</h2>
          <span>Photos</span>
        </div>
        <div className="text-center">
          <h2>{props.friends}</h2>
          <span>Friends</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
