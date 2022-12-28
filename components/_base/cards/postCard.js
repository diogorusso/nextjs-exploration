import React from 'react';

const PostCard = ({ avatarUrl, name, joinDate, description, likes, comments, shares }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg">
      <div className="flex items-start px-4 py-6">
        <img className="object-cover w-12 h-12 mr-4 rounded-full shadow" src={avatarUrl} alt="avatar" />
        <div className=''>
          <div className="flex items-center justify-between">
            <h2 className="-mt-1 text-lg font-semibold text-gray-900">{name}</h2>
            <small className="text-sm text-gray-700">{joinDate}</small>
          </div>
          <p className="text-gray-700">{description}</p>
          <div className="flex items-center mt-4">
            <div className="flex mr-2 mr-3 text-sm text-gray-700">
              {/* <svg></svg> */}
              <span>{likes}</span>
            </div>
            <div className="flex mr-2 mr-8 text-sm text-gray-700">
              {/* <svg></svg> */}
              <span>{comments}</span>
            </div>
            <div className="flex mr-2 mr-4 text-sm text-gray-700">
              {/* <svg></svg> */}
              <span>{shares}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;