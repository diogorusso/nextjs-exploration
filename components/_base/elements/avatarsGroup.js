import React from 'react';

const ProfilePictures = ({ numImages,size }) => {
  const imageUrls = [];
  for (let i = 0; i < numImages; i++) {
    imageUrls.push(`https://i.pravatar.cc/150?img=${i + 3}`);
  }

  return (
    <div className="flex px-4 mt-4 -space-x-2 justify-left">
      {imageUrls.map((url, index) => (
        <a key={index} href="#" className="">
          <img
            src={url}
            alt={`Profile ${index + 1}`}
            className={`inline-block object-cover w-${size} h-${size} rounded-full ring-2 ring-white`}
          />
        </a>
      ))}
    </div>
  );
};

export default ProfilePictures;
