import React from 'react';

const Header = ({ title, color, description, buttonText, imageUrl }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12">
        <div className="container h-full mx-auto sm:p-10">
          <header className="container items-center h-full px-4 mt-10 lg:flex lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl font-bold lg:text-6xl">{title}</h1>
              <div className={`w-20 h-2 bg-${color}-700 my-4`}></div>
              <p className="mb-10 text-xl">{description}</p>
              <button className={`bg-${color}-500 text-white text-2xl font-medium px-4 py-2 rounded shadow`}>{buttonText}</button>
            </div>
          </header>
        </div>
      </div>
      <img src={imageUrl} alt="Leafs" className="object-cover w-full sm:h-screen sm:w-4/12" />
    </div>
  );
};

export default Header;
