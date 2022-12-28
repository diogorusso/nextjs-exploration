import React from 'react';

const FastestDevEnv = ({ title, subTitle }) => {
  return (
    <div className="container px-4 mx-auto">
      <div className="w-full">
        <h1 className="mt-32 text-6xl font-bold text-white">
          {title}
          <br />
          <span className="text-blue-400">{subTitle}</span>
        </h1>
      </div>
      <div className="w-5/6 my-10 ml-6">
        <h3 className="text-gray-300">
          Create, edit & deploy fullstack apps with
          <br />
          <strong className="text-white">
            faster package installations & greater security
          </strong>
          <br />
          than even local environments.
        </h3>
      </div>
    </div>
  );
};

export default FastestDevEnv;
